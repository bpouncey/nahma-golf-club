# Nahma Golf Club — Project Instructions

## Repo Overview

This repo is the website project for Nahma Golf Club, a 9-hole public golf course in Nahma, Michigan.

---

## Current Build State (as of May 16, 2026)

The site design is complete. Claude Design (claude.ai/design) produced pixel-perfect HTML/CSS prototypes for 4 pages. A handoff bundle was exported and extracted to `_handoff_tmp/nahma-golf-club/project/`.

**Tech stack decision: Static HTML/CSS.** No framework, no build tooling. The Claude Design output is production-quality HTML — we implement it directly.

**Deployment target: TBD.** Build the files; hosting decision comes later (likely Netlify).

---

## The Build Plan

### Site structure (target)

```
/site/
  index.html              ← Homepage
  about/index.html        ← About page
  the-course/index.html   ← Hole by Hole
  golf-near-escanaba/index.html  ← SEO landing page
  css/
    main.css              ← Shared design system CSS (extracted from prototypes)
  photos/                 ← All site photos (copied from handoff)
```

### What's designed (implement these)

All 4 source prototypes live at `_handoff_tmp/nahma-golf-club/project/`:

| File | Target URL | Notes |
|------|-----------|-------|
| `Homepage.html` | `/` | Full-bleed hero with photo, 9 sections |
| `About.html` | `/about/` | Green hero, mission section, facts bar, contact |
| `Hole by Hole.html` | `/the-course/` | 9 hole cards with photos, stats, tips |
| `Golf Near Escanaba.html` | `/golf-near-escanaba/` | SEO page, hand-drawn SVG maps inline |

### CSS extraction strategy

All 4 prototype files have near-identical CSS. The shared design system should be extracted into `site/css/main.css`. Page-specific styles (if any) can live in `<style>` blocks or page-level CSS files.

**Design tokens (from prototypes):**
```css
--color-green: #1C3829
--color-green-dark: #122519
--color-green-light: #E6EDE8
--color-terracotta: #B85C38
--color-terracotta-light: #F2D5C8
--color-cream: #F4EFE6
--color-cream-dark: #E8E0D4
--color-off-white: #FAFAF8
--color-dark: #1A1A18
--color-text-muted: #6B7264
--color-white: #FFFFFF
--maxw: 1280px
--pad-x: 80px
--font-head: "Barlow Condensed" (700, Google Fonts)
--font-body: "DM Sans" (400/500/600, Google Fonts)
--font-mono: "JetBrains Mono" (400/500, Google Fonts)
```

### Photos

Photos are in `_handoff_tmp/nahma-golf-club/project/photos/`. Copy all of them to `site/photos/` unchanged — the HTML references them by these exact filenames:

- `hero-aerial-bay.jpg` — homepage hero
- `setting-vintage-1922.jpg` — homepage "The Setting" section
- `clubhouse-bar-interior.jpg` — homepage clubhouse section + about page
- `clubhouse-exterior.jpg`
- `course-flag-bay.jpg`
- `outings-fairway-bay.jpg` — homepage outings section
- `hole-01.jpg` through `hole-09.jpg` — hole cards on The Course page

### Internal link cleanup

The prototypes use `Homepage.html`, `About.html`, `Hole by Hole.html` as hrefs. Update all internal links to use clean paths:

| Old | New |
|-----|-----|
| `Homepage.html` | `/` |
| `About.html` | `/about/` |
| `Hole by Hole.html` | `/the-course/` |
| `Golf Near Escanaba.html` | `/golf-near-escanaba/` |
| `Homepage.html#rates` | `/#rates` |
| `Homepage.html#leagues` | `/#leagues` |
| `Homepage.html#outings` | `/#outings` |
| `Homepage.html#clubhouse` | `/#clubhouse` |

### Navbar active state

Each page has `is-active` on the current nav link. Preserve this per page.

### Homepage nav scroll behavior

The homepage nav starts transparent (over the hero photo) and adds `.is-scrolled` on scroll. All other pages start with the solid cream nav. This JS is already in the prototype — preserve it.

---

## Pages Still to Design (future Claude Design sessions)

These were in the original roadmap but not yet designed:
- `/rates/` — Full rates page (the homepage has a section; this would be a standalone page)
- `/outings/` — Group outings booking page

Do not build these pages yet. Implement only what's designed.

---

## Active Resources (use these)

- `_handoff_tmp/nahma-golf-club/project/` — The Claude Design prototypes. **Source of truth for the build.**
- `_seo/` — SEO research and content briefs. Reference for meta descriptions and copy questions.
- `MLS Listing/` — Property photos. Secondary source if more imagery is needed.
- `photo-scrapes/` — Scraped photos. Secondary source.

## Archive (do not use)

- `_archive/` — Previous React/Vite prototype and Relume wireframe work. **Do not reference or build on anything here.**
- `_design/` — Claude Design prep work (design system, copy briefs, prompt). Reference only; the prototypes supersede it.

---

## Agent Instructions

If you are a sub-agent implementing this build:

1. **Read the source prototype first** before writing any HTML. The prototype is the spec.
2. **Do not paraphrase or rewrite copy.** Use the exact copy from the prototype.
3. **Do not alter the design.** Colors, spacing, typography — all locked. Implement pixel-perfect.
4. **CSS goes in `site/css/main.css`.** Extract shared styles; don't duplicate across pages.
5. **Photos reference path is `../photos/` from a page subfolder** (e.g., `about/index.html` references `../photos/clubhouse-bar-interior.jpg`). Homepage at root uses `photos/`.
6. **Test internal links.** Every `href` should resolve correctly relative to the page's location in the folder structure.
7. **Commit after each page is complete**, not at the end of the whole build.
