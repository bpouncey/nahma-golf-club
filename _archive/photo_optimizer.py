#!/usr/bin/env python3
"""
photo_optimizer.py — Local SEO photo processor.

Renames JPEG images using Claude vision analysis, writes GPS EXIF data,
and generates a rename log for local SEO workflows.
"""

import argparse
import base64
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

import anthropic
from dotenv import load_dotenv
from PIL import Image  # noqa: F401 — validates Pillow is installed


# Closed-set context taxonomies keyed by service type token.
# Lookup matches any token from the key against the service slug tokens.
SERVICE_CONTEXT_TAXONOMIES: dict[str, list[str]] = {
    "golf": [
        "green", "fairway", "tee-box", "bunker", "water-feature", "clubhouse",
        "cart-path", "course-overview", "signage", "pro-shop", "parking-lot",
    ],
    "pressure-washing": [
        "before-clean", "after-clean", "equipment", "truck-setup", "house-exterior",
        "driveway", "deck", "commercial-building", "team-on-site",
    ],
    "window-cleaning": [
        "storefront-exterior", "residential-exterior", "high-rise", "equipment",
        "before-clean", "after-clean", "team-on-site",
    ],
    "mobile-detailing": [
        "vehicle-exterior", "interior-detail", "engine-bay", "before-clean",
        "after-clean", "equipment", "van-setup",
    ],
}

FALLBACK_TAXONOMY = ["before-clean", "after-clean", "equipment", "job-site", "team-on-site", "other"]


def check_exiftool() -> None:
    if shutil.which("exiftool") is None:
        print("ERROR: exiftool is not installed or not on PATH.")
        print("Install it with:")
        print("  macOS:  brew install exiftool")
        print("  Ubuntu: sudo apt install libimage-exiftool-perl")
        print("  Windows: https://exiftool.org")
        sys.exit(1)


def load_job_config(folder: Path) -> dict:
    config_path = folder / "job.json"
    if not config_path.exists():
        print(f"ERROR: job.json not found in {folder}")
        sys.exit(1)
    with open(config_path) as f:
        return json.load(f)


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def encode_image(path: Path) -> str:
    with open(path, "rb") as f:
        return base64.standard_b64encode(f.read()).decode("utf-8")


def get_context_taxonomy(service: str) -> list[str]:
    """Return the closed-set taxonomy for the given service, matched by token intersection."""
    service_tokens = set(slugify(service).split("-"))
    for key, taxonomy in SERVICE_CONTEXT_TAXONOMIES.items():
        key_tokens = set(key.split("-"))
        if key_tokens & service_tokens:
            return taxonomy
    return FALLBACK_TAXONOMY


def deduplicate_desc_slug(service_slug: str, desc_slug: str) -> str:
    """Strip leading tokens from desc_slug that already appear in service_slug."""
    service_tokens = set(service_slug.split("-"))
    desc_tokens = desc_slug.split("-")
    while desc_tokens and desc_tokens[0] in service_tokens:
        desc_tokens.pop(0)
    return "-".join(desc_tokens) if desc_tokens else desc_slug


def analyze_image(client: anthropic.Anthropic, image_path: Path, job: dict) -> dict:
    image_data = encode_image(image_path)

    suffix = image_path.suffix.lower()
    media_type = "image/jpeg" if suffix in (".jpg", ".jpeg") else "image/png"

    service = job.get("service", "")
    city = job.get("city", "")
    state = job.get("state", "")
    keywords: list[str] = job.get("keywords", [])

    taxonomy = get_context_taxonomy(service)
    taxonomy_str = ", ".join(f'"{t}"' for t in taxonomy)
    location_hint = f"{city}, {state}".strip(", ") if state else city
    keywords_hint = f"\nKeywords for this business: {', '.join(keywords)}" if keywords else ""

    signage_rule = (
        "Before writing any identifier (number, hole marker, sign text): zoom your attention "
        "to that element and rate your read confidence as high, medium, or low. "
        "Only include the identifier in your output if confidence is high. "
        "If medium or low, describe the element generically instead "
        '(e.g. "flagstick on green" rather than "hole 6 green"). '
        "A missing number is better than a wrong one."
    )

    prompt = (
        "Analyze this photo and return ONLY a valid JSON object with exactly three fields:\n\n"
        '  "slug": a 3-5 word lowercase description of the literal subject '
        '(e.g. "hole 6 green", "driveway before wash", "equipment trailer"). '
        f"{signage_rule} "
        "Do not include location or business name.\n\n"
        '  "description": a human caption of 12 words or fewer that reads like a natural '
        "photographer's caption, incorporating the most location-specific keyword naturally. "
        f"Service: {service}. Location: {location_hint}.{keywords_hint} "
        f"{signage_rule} "
        'Example: "Hole 6 green at Nahma Golf Club, public golf course near Rapid River MI"\n\n'
        f'  "context": choose exactly one value from this list — {taxonomy_str} — '
        "return only the value, no explanation.\n\n"
        "Return ONLY the JSON object. No explanation, no markdown, no code fences."
    )

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=300,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "image",
                        "source": {
                            "type": "base64",
                            "media_type": media_type,
                            "data": image_data,
                        },
                    },
                    {"type": "text", "text": prompt},
                ],
            }
        ],
    )

    raw = message.content[0].text.strip()
    # Strip markdown code fences if Claude wraps it anyway
    raw = re.sub(r"^```[a-z]*\n?", "", raw)
    raw = re.sub(r"\n?```$", "", raw)
    return json.loads(raw)


def write_exif(
    output_path: Path,
    lat: float,
    lon: float,
    image_description: str,
) -> None:
    lat_ref = "N" if lat >= 0 else "S"
    lon_ref = "E" if lon >= 0 else "W"

    cmd = [
        "exiftool",
        "-overwrite_original",
        f"-GPSLatitude={abs(lat)}",
        f"-GPSLatitudeRef={lat_ref}",
        f"-GPSLongitude={abs(lon)}",
        f"-GPSLongitudeRef={lon_ref}",
        f"-ImageDescription={image_description}",
        str(output_path),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(f"exiftool failed: {result.stderr.strip()}")


def find_jpegs(folder: Path) -> list[Path]:
    return sorted(
        p
        for p in folder.iterdir()
        if p.is_file() and p.suffix.lower() in (".jpg", ".jpeg") and p.name != "job.json"
    )


def build_new_filename(job: dict, slug: str, index: int) -> str:
    city_slug = slugify(job["city"])
    service_slug = slugify(job["service"])
    desc_slug = deduplicate_desc_slug(service_slug, slugify(slug))
    return f"{city_slug}-{service_slug}-{desc_slug}-{index:02d}.jpg"


def process_folder(folder: Path, output: Path) -> None:
    check_exiftool()

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("ERROR: ANTHROPIC_API_KEY environment variable is not set.")
        sys.exit(1)

    job = load_job_config(folder)

    lat = job.get("lat")
    lon = job.get("lon")
    if lat is None or lon is None:
        print("ERROR: job.json must contain 'lat' and 'lon' fields.")
        sys.exit(1)

    images = find_jpegs(folder)

    if not images:
        print(f"No JPEG images found in {folder}")
        return

    output.mkdir(parents=True, exist_ok=True)
    client = anthropic.Anthropic(api_key=api_key)
    rename_log: dict[str, dict] = {}

    for index, image_path in enumerate(images, start=1):
        print(f"\n[{index}/{len(images)}] Processing: {image_path.name}")

        try:
            analysis = analyze_image(client, image_path, job)
            slug = analysis.get("slug", "photo").strip()
            description = analysis.get("description", slug).strip()
            context = analysis.get("context", "other").strip()
        except Exception as exc:
            print(f"  ERROR: Claude vision failed for {image_path.name}: {exc}")
            rename_log[image_path.name] = {"error": f"Claude vision failed: {exc}"}
            continue

        new_filename = build_new_filename(job, slug, index)
        output_path = output / new_filename

        try:
            shutil.copy2(image_path, output_path)
        except Exception as exc:
            print(f"  ERROR: Could not copy {image_path.name}: {exc}")
            rename_log[image_path.name] = {"error": f"File copy failed: {exc}"}
            continue

        try:
            write_exif(output_path, lat, lon, description)
        except Exception as exc:
            print(f"  WARNING: exiftool failed for {new_filename}: {exc}")
            rename_log[image_path.name] = {
                "new_filename": new_filename,
                "description": description,
                "context": context,
                "exif_error": str(exc),
            }
        else:
            rename_log[image_path.name] = {
                "new_filename": new_filename,
                "description": description,
                "context": context,
            }

        print(f"  {image_path.name} → {new_filename}")
        print(f"  description: {description}")
        print(f"  context: {context}")

    log_path = output / "rename_log.json"
    with open(log_path, "w") as f:
        json.dump(rename_log, f, indent=2)
    print(f"\nDone. Rename log written to: {log_path}")


def main() -> None:
    load_dotenv()

    parser = argparse.ArgumentParser(
        description="Process JPEG images for local SEO: rename, tag with GPS EXIF, and log."
    )
    parser.add_argument("--folder", required=True, help="Path to folder containing images and job.json")
    parser.add_argument("--output", default=None, help="Output folder path (default: <folder>/output/)")

    args = parser.parse_args()

    folder = Path(args.folder).resolve()
    if not folder.is_dir():
        print(f"ERROR: Folder not found: {folder}")
        sys.exit(1)

    output = Path(args.output).resolve() if args.output else folder / "output"

    process_folder(folder, output)


if __name__ == "__main__":
    main()
