# Nahma Golf Club — Project Memory

This file persists cross-session context that isn't obvious from the code or git history. Read it alongside `CLAUDE.md` at the start of every session. Keep it updated as the project evolves.

---

## Project State

**Phase:** Maintenance & growth. The site is fully built and live. No build phase instructions needed.

**Live site:** `https://www.nahmagolfclub.com`  
**Repo:** `github.com/bpouncey/nahma-golf-club`  
**Hosting:** Netlify free tier, connected to GitHub CI/CD (as of June 2026). Every push to `main` auto-deploys. Deploy previews enabled on PRs.  
**Netlify CLI:** Installed and linked locally (`netlify-cli` v26+).

**Completed work (June 2026):**
- LCP performance fixes: Google Fonts moved to `<link>` tags sitewide, hero `fetchpriority`, lazy loading, WebP image conversion (~1.1MB saved)
- GitHub connected to Netlify CI/CD (was previously manual drag-and-drop)
- Netlify `_redirects` file live (old WordPress URL redirects)
- Membership form mobile fix

---

## Workflow Preferences

**Claude owns all git operations.** Brad describes what he wants — Claude handles branching, committing, pushing, and opening PRs. Never ask Brad "should I branch?" — just do it when scope warrants it.

- Branch for anything touching 3+ files or with real scope
- Direct to `main` only for trivial single-file changes (typo, one number, one meta tag)
- Branch naming: `feat/`, `fix/`, `content/`, `chore/` + short kebab description
- Commit after each logical unit, not at the end of everything
- Open a PR when a branch is ready — Netlify auto-generates a preview URL

---

## Brand Decisions (locked — do not re-open)

**Aesthetic:** "Modern Vintage Country Club" — mid-century club culture (1960s–70s Après-Golf era). Not rustic, not athletic, not minimalist-modern.

**Typography:**
- Headings: Barlow Condensed Bold — always uppercase, letter-spacing 0.05–0.08em
- Body: DM Sans (400/500/600)
- Mono: JetBrains Mono (400/500)
- The move away from serif headings to bold condensed sans was an explicit decision. Do not re-open it.

**Colors:** Full token set in `CLAUDE.md`. Primary green `#1C3829`, accent terracotta `#B85C38`, background cream `#F4EFE6`.

**Logo:** Not finalized as of June 2026. Logo files in `_design/logo/`.

---

## Key Resources

| File | What it's for |
|------|--------------|
| `CLAUDE.md` | Instructions, design tokens, git rules, sub-agent guidance |
| `FIXES_INTAKE.md` | Client feedback tracker — check before starting fix work |
| `COPY-AUDIT.md` | Per-page copy findings — reference when editing copy |
| `_seo/nahma-golf-club_info-and-strategy.md` | **Master SEO reference** — course facts, keywords, NAP, content voice |
| `_seo/seo-audit-2026-05-30.md` | Technical SEO audit, some items pending |
| `_design/design-system.md` | Full design system — reference when building new pages |
| `_design/copy-briefs/` | Approved copy briefs per page |
| `nahma-hole-by-hole.csv` | Authoritative scorecard data (yardages, HCPs, pars) |
| `site/css/main.css` | Shared CSS — all pages reference this |
| `site/sitemap.xml` | Live indexable pages only — update when pages are added/removed |
