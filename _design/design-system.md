# Nahma Golf Club — Design System

**Version:** 1.0 (May 2026)  
**Purpose:** Source of truth for all visual decisions. Feed this into Claude Design as the foundational brief. Every design decision for the website should reference this document.

---

## Brand Concept

**"Modern Vintage Country Club"** — The aesthetic celebrates mid-century club culture (the 1960s–70s Après-Golf era) through clean execution. Not rustic, not athletic, not minimalist-modern. Heritage precision with contemporary clarity.

**Three foundational rules:**
1. **Nostalgic Layout Formats** — curved/arched type baselines, stacked condensed headers, mid-century collegiate geometry
2. **Clean Vector Execution** — pristine structure, no gradients, no distressed textures; the form itself signals vintage
3. **Enclosed Compositions** — section headers with rule lines, framed callouts, tight typographic containment

---

## Color Tokens

### Primary Palette

| Token | Hex | Name | Use |
|-------|-----|------|-----|
| `--color-green` | `#1C3829` | Course Green | Primary brand color. Nav, buttons, headers, accents. |
| `--color-terracotta` | `#B85C38` | Terracotta | Secondary accent. Callout labels, hover states, decorative rules. |
| `--color-cream` | `#F4EFE6` | Warm Cream | Primary background. Page BG, card backgrounds. |
| `--color-off-white` | `#FAFAF8` | Off-White | Secondary background. Alternating section BG. |
| `--color-dark` | `#1A1A18` | Near-Black | Primary body text. |
| `--color-text-muted` | `#6B7264` | Muted Green-Gray | Secondary text, captions, labels. |

### Extended Palette

| Token | Hex | Name | Use |
|-------|-----|------|-----|
| `--color-green-dark` | `#122519` | Deep Green | Dark section backgrounds (footer, hero overlays). |
| `--color-green-light` | `#E6EDE8` | Light Green Tint | Subtle section BG, hover backgrounds. |
| `--color-terracotta-light` | `#F2D5C8` | Terracotta Tint | Badge backgrounds, label chips. |
| `--color-cream-dark` | `#E8E0D4` | Deep Cream | Borders, dividers on cream backgrounds. |
| `--color-white` | `#FFFFFF` | White | Text on dark backgrounds. |

### Contextual Usage Rules

- **Dark sections** (hero, footer, feature callouts): `--color-green-dark` background, `--color-white` or `--color-cream` text, `--color-terracotta` accents
- **Light sections** (body content, cards): `--color-cream` or `--color-off-white` background, `--color-dark` text
- **Accent rule**: Terracotta is sparingly used — 1–2 instances per section maximum. Never use as a background fill for large areas.

---

## Typography

### Typeface Stack

| Role | Family | Weight | Style | Source |
|------|--------|--------|-------|--------|
| Heading | Barlow Condensed | 700 (Bold) | Uppercase always | Google Fonts |
| Body | DM Sans | 400, 500, 600 | Sentence case | Google Fonts |

**Import (Google Fonts):**
```
Barlow+Condensed:wght@700&family=DM+Sans:wght@400;500;600
```

### Typography Rules

**Barlow Condensed — Headings:**
- Always uppercase (`text-transform: uppercase`)
- Letter-spacing: `0.05em` to `0.08em` — slightly tracked, never tight
- Line-height: `1.0` to `1.1` for display sizes; `1.15` for smaller headings
- Never use italic
- Works best at 28px+ — do not use for body or small UI text

**DM Sans — Body:**
- Sentence case for all body copy and UI labels
- Letter-spacing: `0` (default) — no tracking
- Line-height: `1.6` for paragraphs; `1.2` for UI labels; `1.4` for subheadings
- Bold (`600`) for emphasis, never for decorative purposes

### Type Scale

| Token | Size | Font | Weight | Line Height | Use |
|-------|------|------|--------|-------------|-----|
| `--text-display` | 96px | Barlow Condensed | 700 | 1.0 | Hero headline |
| `--text-h1` | 72px | Barlow Condensed | 700 | 1.05 | Page titles |
| `--text-h2` | 52px | Barlow Condensed | 700 | 1.08 | Section headers |
| `--text-h3` | 36px | Barlow Condensed | 700 | 1.1 | Sub-section headers |
| `--text-h4` | 24px | Barlow Condensed | 700 | 1.15 | Card titles, callout headers |
| `--text-overline` | 13px | DM Sans | 600 | 1.2 | Category labels above headings |
| `--text-body-lg` | 18px | DM Sans | 400 | 1.65 | Lead paragraphs, feature copy |
| `--text-body` | 16px | DM Sans | 400 | 1.6 | Standard body copy |
| `--text-body-sm` | 14px | DM Sans | 400 | 1.55 | Secondary info, table text |
| `--text-caption` | 12px | DM Sans | 500 | 1.4 | Captions, legal, footnotes |
| `--text-ui` | 15px | DM Sans | 500 | 1.2 | Buttons, nav links, form labels |

### Overline Pattern

A recurring typographic motif throughout the site: small `DM Sans 600` uppercase label above a `Barlow Condensed` heading, separated by a short terracotta rule line.

```
  ── THE COURSE ──
  PLAY THE BAY
```

Use this pattern for all major section entries. The "──" are short horizontal rules in `--color-terracotta`.

---

## Spacing Scale

Base unit: `8px`

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 4px | Micro (icon padding, tight gaps) |
| `--space-2` | 8px | Small (inline gaps, label padding) |
| `--space-3` | 12px | Component internals |
| `--space-4` | 16px | Default padding unit |
| `--space-5` | 24px | Card padding, form groups |
| `--space-6` | 32px | Section sub-elements |
| `--space-7` | 48px | Medium section rhythm |
| `--space-8` | 64px | Section padding (mobile) |
| `--space-9` | 80px | Section padding (tablet) |
| `--space-10` | 96px | Section padding (desktop) |
| `--space-11` | 128px | Large section separation |
| `--space-12` | 160px | Hero / feature section padding |

---

## Layout Grid

- **Max content width:** 1280px
- **Columns:** 12 (desktop), 8 (tablet), 4 (mobile)
- **Gutter:** 24px (desktop/tablet), 16px (mobile)
- **Page horizontal padding:** 80px (desktop), 40px (tablet), 20px (mobile)
- **Full-bleed:** hero, photo feature sections, footer — zero horizontal padding, full viewport width

---

## Border & Shape Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 2px | Buttons, small chips |
| `--radius-md` | 4px | Cards, form inputs |
| `--radius-lg` | 8px | Large cards, modals |
| `--radius-none` | 0 | Tables, hero overlays, full-bleed |
| `--border-light` | 1px solid `--color-cream-dark` | Dividers on light BG |
| `--border-dark` | 1px solid rgba(255,255,255,0.15) | Dividers on dark BG |
| `--border-accent` | 2px solid `--color-terracotta` | Decorative rules, overline markers |

**Rule:** Default border-radius is minimal (2–4px). This is not a round-corners design. The heritage feel comes from structure, not softness.

---

## Component Specs

### Navigation

**Structure:** Logo left, links center (or right), CTA button far right.

**States:**
- **Hero overlay state:** Transparent background, `--color-white` text and links, subtle border-bottom `rgba(255,255,255,0.1)`
- **Scrolled state:** `--color-cream` or `--color-off-white` background, `--color-dark` text, 1px bottom border in `--color-cream-dark`
- **Transition:** 200ms ease on background-color and text color

**Nav links:** `DM Sans 500`, 15px, no underline, `text-transform: none`. Letter-spacing 0.02em. Hover: `--color-terracotta`.

**CTA button in nav:** Primary button style (see Buttons). Smaller padding variant: 10px 20px.

---

### Buttons

**Primary:**
- Background: `--color-green`
- Text: `--color-white`
- Font: DM Sans 600, 15px, uppercase, letter-spacing 0.06em
- Padding: 14px 28px
- Border-radius: 2px
- Border: none
- Hover: Background `--color-green-dark`, 150ms ease

**Secondary:**
- Background: transparent
- Text: `--color-green`
- Font: DM Sans 600, 15px, uppercase, letter-spacing 0.06em
- Padding: 13px 27px
- Border-radius: 2px
- Border: 1px solid `--color-green`
- Hover: Background `--color-green`, text `--color-white`, 150ms ease

**Ghost (on dark backgrounds):**
- Background: transparent
- Text: `--color-white`
- Font: DM Sans 600, 15px, uppercase, letter-spacing 0.06em
- Padding: 13px 27px
- Border-radius: 2px
- Border: 1px solid rgba(255,255,255,0.6)
- Hover: Background rgba(255,255,255,0.1), border rgba(255,255,255,0.9), 150ms ease

**Sizing:**
- Large: 16px 36px (hero CTAs)
- Default: 14px 28px
- Small: 10px 20px (nav, inline)

**Rule:** Never use rounded (pill) buttons. 2px radius maximum — this is a heritage brand.

---

### Cards

**Feature Card (photo + content):**
- Border-radius: 4px
- Background: `--color-off-white`
- No shadow — use border instead: 1px solid `--color-cream-dark`
- Padding: 32px
- Overline label: `DM Sans 600`, 12px, uppercase, letter-spacing 0.1em, `--color-terracotta`
- Heading: `--text-h4` (Barlow Condensed)
- Body: `--text-body`
- Optional: accent rule (2px terracotta, 32px wide) between overline and heading

**Stat Card:**
- Dark variant: `--color-green-dark` BG, `--color-white` text
- Light variant: `--color-cream` BG, `--color-dark` text
- Stat number: `--text-h2` (Barlow Condensed), `--color-terracotta` on dark / `--color-green` on light
- Stat label: `DM Sans 500`, 14px, uppercase, letter-spacing 0.08em

**Rate Card:**
- Background: `--color-off-white`
- Border-top: 3px solid `--color-green`
- Padding: 32px
- Price: Barlow Condensed 700, 48px, `--color-green`
- Round label: DM Sans 500, 14px, uppercase

---

### Section Dividers / Rule Lines

The overline pattern with flanking rule lines is a recurring decorative element:

```
————  SECTION LABEL  ————
```

Implementation:
- `DM Sans 600`, 12–13px, uppercase, letter-spacing 0.12em, `--color-text-muted`
- Flanking lines: 1px or 2px, `--color-terracotta` or `--color-cream-dark` depending on context
- Center-aligned, used above section headings and at content transitions
- Width of flanking lines: 40–60px

---

### Forms

**Input fields:**
- Border: 1px solid `--color-cream-dark`
- Border-radius: 4px
- Background: `--color-white`
- Padding: 12px 16px
- Font: DM Sans 400, 15px
- Focus: Border 1px solid `--color-green`, no box-shadow
- Placeholder: `--color-text-muted`

**Labels:**
- DM Sans 600, 13px, uppercase, letter-spacing 0.06em, `--color-dark`
- Positioned above input, margin-bottom 6px

**Rule:** No floating labels. No rounded pill inputs. Clean, structured form feel.

---

## Photo Treatment Rules

### Hero Photos

- **Overlay:** `--color-green-dark` (`#122519`) at **50–60% opacity** over image
- **Gradient variant:** Linear gradient from `rgba(18,37,25,0.7)` at bottom to `rgba(18,37,25,0.3)` at top — use when text is bottom-aligned
- **Aspect ratio:** 16:9 minimum, full viewport width. Hero should be full-screen height (100vh) or close to it
- **Object-fit:** `cover`, centered — prioritize the lake horizon and green fairways

### Feature / Section Photos

- **No overlay** — show full color, no treatment
- **Aspect ratios:** 3:2 landscape (preferred), 4:3 acceptable, never crop to portrait unless explicitly needed
- **Positioning:** Prioritize compositions with sky, water, or tree line visible — avoid tight crops that lose the sense of place

### Photo Grid / Gallery

- **Grid structure:** Asymmetric — one large hero image (2/3 width) + two stacked smaller images (1/3 width) preferred over uniform grids
- **No borders, no rounded corners** on photos — edge-to-edge within their container
- **No filters, no B&W, no vignette** — the natural colors of the course and bay are the brand

### Photo Selection Priority

1. Lake / Bay de Noc views with fairway in foreground
2. Course aerial or elevated views showing the full setting
3. Clubhouse exterior, especially warm-weather shots
4. Players on course (lifestyle/candid preferred over posed)
5. Green/hole close-ups showing the classic dish-shaped green style

### What to Avoid

- Photos with overcast flat light (prioritize golden hour / summer sun)
- Heavy shadows obscuring the course
- Compressed or low-res images (minimum 1400px wide for hero use)

---

## Iconography

- **Style:** Simple line icons. 1.5–2px stroke weight. No fill icons.
- **Size:** 20px standard, 16px compact, 24px feature
- **Library:** Lucide Icons (free, consistent stroke weight)
- **Color:** Always `currentColor` — inherits from parent text color
- **Rule:** Use sparingly. Icons support labels — they do not replace them. Always pair with text.

---

## Motion / Animation

**Philosophy:** Minimal. Heritage brands do not animate aggressively. Motion should feel like a slow page-turn, not a tech product launch.

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Nav scroll state | Background + text color | 200ms | ease |
| Button hover | Background color | 150ms | ease |
| Image reveal (on scroll) | Fade in + translate 12px up | 500ms | ease-out |
| Section entrance | Fade in | 400ms | ease |
| No parallax on mobile | — | — | — |

**Rule:** No bounce easing. No spring physics. No animated counters. No hover scale effects. The brand does not dance.

---

## Logo Guidance

Logo is in progress as of May 2026. Design system should accommodate it when finalized.

**Placeholder treatment:**
- Use wordmark "NAHMA GOLF CLUB" in Barlow Condensed Bold as logo placeholder
- Wrap in a simple enclosed composition: text between two short horizontal rules
- Reverse (white) version for dark backgrounds, standard (green) for light

**When logo arrives:**
- Minimum clear space: 16px on all sides
- Reverse version required (white / cream on dark)
- Do not distort, recolor, or add effects

---

## Accessibility

- **Color contrast:** All text must meet WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
  - `--color-dark` on `--color-cream`: ✓ passes
  - `--color-white` on `--color-green-dark`: ✓ passes
  - `--color-terracotta` on `--color-cream`: verify — use `--color-dark` for body text near terracotta accents
- **Focus states:** All interactive elements need visible focus rings (2px solid `--color-green`, 2px offset)
- **Alt text:** All course and lifestyle photos require descriptive alt text
- **Touch targets:** Minimum 44px height for all interactive elements

---

## Design Don'ts

- No drop shadows (except where strictly needed for legibility, e.g. text on photo)
- No gradients except dark overlay on hero images
- No distressed, grunge, or texture effects
- No pill-shaped buttons or inputs
- No bright green (`#00FF00` territory) — the palette is earthy and deep
- No comic sans, script fonts, or novelty typefaces
- No stock-photo-generic imagery (generic golfers, fake smiles, clipart clubs)
- No "modern SaaS" design patterns — no glassmorphism, no floating cards with heavy shadows, no gradient mesh backgrounds
- No animations faster than 150ms or slower than 600ms
