# Nahma Golf Club — Website

Live site: [nahmagolfclub.com](https://nahmagolfclub.com) *(once deployed)*
Repo: GitHub — `nahma-golf-club`
Hosting: Netlify (auto-deploys from `main` branch)

---

## For the Client: Making Simple Edits

The website is built from plain HTML files. Any text editor can open them. The files that matter are all inside the `site/` folder.

### Finding the right file

Every page on the site corresponds to one HTML file:

| Page | File |
|------|------|
| Homepage | `site/index.html` |
| About | `site/about/index.html` |
| Hole by Hole | `site/the-course/hole-by-hole/index.html` |
| Course Overview | `site/the-course/index.html` |
| Rates | `site/rates/index.html` |
| Leagues | `site/leagues/index.html` |
| Outings | `site/outings/index.html` |
| Clubhouse | `site/clubhouse/index.html` |
| Rentals | `site/rentals/index.html` |
| Tee Times | `site/tee-times/index.html` |
| History | `site/history/index.html` |
| Contact | `site/contact/index.html` |
| Golf Near Escanaba | `site/golf-near-escanaba/index.html` |
| Golf Near Gladstone | `site/golf-near-gladstone/index.html` |
| Golf Near Garden | `site/golf-near-garden/index.html` |
| Golf Near Rapid River | `site/golf-near-rapid-river/index.html` |
| Golf Near Manistique | `site/golf-near-manistique/index.html` |

### Editing text

Open the file in any text editor (TextEdit on Mac, Notepad on Windows, or a code editor like VS Code). Text content sits between HTML tags — for example:

```html
<p>We're open May through October, 7 days a week.</p>
```

Change only the words between the `>` and `<` — don't alter the tags themselves.

### Swapping a photo

Photos live in `site/photos/`. To replace a photo, save your new image with the **exact same filename** and drop it into that folder, overwriting the old one. The site will pick it up automatically on the next deploy.

Current photos:

| Filename | Used on |
|----------|---------|
| `hero-aerial-bay.jpg` | Homepage hero |
| `setting-vintage-1922.jpg` | Homepage "The Setting" section |
| `clubhouse-bar-interior.jpg` | Homepage + About |
| `clubhouse-exterior.jpg` | About |
| `course-flag-bay.jpg` | Course pages |
| `outings-fairway-bay.jpg` | Homepage Outings section |
| `hole-01.jpg` – `hole-09.jpg` | Hole by Hole page |

### What not to touch

- `_archive/` — old prototype work, not part of the live site
- `_handoff_tmp/` — original design files, for reference only
- `_seo/` — SEO research documents
- `site/css/main.css` — the shared stylesheet; editing this affects every page at once

---

## For the Developer

### Stack

No build tools. No framework. Pure HTML and CSS.

- **HTML files** in `site/` — one per page, self-contained
- **Shared CSS** in `site/css/main.css` — design system extracted from prototypes
- **Photos** in `site/photos/`
- **Sitemap** at `site/sitemap.xml`

### Local development

No install step. Open any HTML file directly in a browser, or run a simple static server from the `site/` folder:

```bash
cd site
npx serve .
# or
python3 -m http.server 8080
```

### Design system

Design tokens (defined in `main.css`):

```css
--color-green: #1C3829
--color-green-dark: #122519
--color-green-light: #E6EDE8
--color-terracotta: #B85C38
--color-cream: #F4EFE6
--color-off-white: #FAFAF8
--color-dark: #1A1A18

--font-head: "Barlow Condensed" (700) — Google Fonts
--font-body: "DM Sans" (400/500/600) — Google Fonts
--font-mono: "JetBrains Mono" (400/500) — Google Fonts

--maxw: 1280px
--pad-x: 80px
```

### Nav behavior

- **Homepage only**: nav starts transparent over the hero photo, adds `.is-scrolled` class on scroll (JS is inline in `site/index.html`)
- **All other pages**: nav starts solid cream
- Each page marks its nav link with `class="is-active"`

### Source prototypes

The original Claude Design prototypes are in `_handoff_tmp/nahma-golf-club/project/`. These are the design source of truth. If something looks off on a page, compare it to the corresponding prototype file.

---

## Deployment (Netlify)

### How it works

Netlify watches the `main` branch of this repo. Every time a commit is pushed to `main`, Netlify automatically pulls the latest code and publishes it. There is no build step — Netlify serves the `site/` folder directly.

**Publish directory setting in Netlify:** `site`

### Deploy flow

```
Edit file → commit → push to main → Netlify deploys automatically (~1 min)
```

### Making a change

1. Edit the relevant file in `site/`
2. Commit: `git add . && git commit -m "describe what you changed"`
3. Push: `git push origin main`
4. Check Netlify dashboard to confirm the deploy succeeded

### Rollback

If a deploy breaks something, go to the Netlify dashboard → Deploys → click any previous deploy → "Publish deploy." Instant rollback, no git required.

---

## Repo structure

```
nahma-golf-club/
├── site/                   ← Everything that gets published
│   ├── index.html          ← Homepage
│   ├── css/
│   │   └── main.css        ← Shared design system
│   ├── photos/             ← All site images
│   ├── about/
│   ├── the-course/
│   │   ├── index.html
│   │   └── hole-by-hole/
│   ├── rates/
│   ├── leagues/
│   ├── outings/
│   ├── clubhouse/
│   ├── rentals/
│   ├── tee-times/
│   ├── history/
│   ├── contact/
│   ├── golf-near-escanaba/
│   ├── golf-near-gladstone/
│   ├── golf-near-garden/
│   ├── golf-near-rapid-river/
│   ├── golf-near-manistique/
│   ├── blog/
│   └── sitemap.xml
├── _handoff_tmp/           ← Original design prototypes (reference only)
├── _seo/                   ← SEO research and content briefs
├── _archive/               ← Old prototype work (ignore)
└── README.md               ← This file
```
