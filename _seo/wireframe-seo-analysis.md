# Nahma Golf Club: Wireframe SEO Analysis

**Version:** 1.0 (May 2026)
**Scope:** React/Vite wireframe prototype at `/Users/bradpouncey/Desktop/nahma-golf-club/`
**Reference docs:** `nahma-golf-club_info-and-strategy.md`, `nahma-golf-club_gbp-optimization.md`, `local-seo-guide_golf-course.md`

---

## Executive Summary

The wireframe is structurally sound. The sitemap is complete, the URL architecture matches the approved plan, the messaging hierarchy is followed on the homepage, and the NAP is consistent across all pages where it appears. The primary gaps are all technical: the site currently has no per-page `<title>` or `<meta description>` tags, no JSON-LD schema, no image optimization infrastructure, and no canonical tag strategy. These are expected for a wireframe-stage prototype, but they represent the entire SEO implementation workload before launch. None of the strategic or content-layer decisions require correction.

---

## 1. Site Architecture

### Sitemap Coverage

All approved pages from the strategy doc (Section 8) are present and routed.

| Page | URL | Status |
|---|---|---|
| Home | `/` | Implemented |
| The Course | `/the-course/` | Implemented |
| Hole-by-Hole | `/the-course/hole-by-hole/` | Implemented |
| Scorecard | `/the-course/scorecard/` | Implemented |
| Rates | `/rates/` | Implemented |
| Tee Times | `/tee-times/` | Implemented |
| Leagues | `/leagues/` | Implemented |
| Clubhouse | `/clubhouse/` | Implemented |
| Cart Rentals | `/rentals/` | Implemented |
| Group Outings | `/outings/` | Implemented |
| History | `/history/` | Implemented |
| About | `/about/` | Implemented |
| Contact | `/contact/` | Implemented |
| Golf Near Escanaba | `/golf-near-escanaba/` | Implemented |
| Golf Near Rapid River | `/golf-near-rapid-river/` | Implemented |
| Golf Near Gladstone | `/golf-near-gladstone/` | Implemented |
| Golf Near Garden | `/golf-near-garden/` | Implemented |
| Golf Near Manistique | `/golf-near-manistique/` | Implemented |
| Blog Index | `/blog/` | Implemented |
| Blog Post (dynamic) | `/blog/:slug/` | Implemented |

One bonus route: `/memberships/` is currently aliased to the Rates page. This is appropriate for the wireframe stage, but a dedicated `/memberships/` page would capture the "golf club membership upper peninsula" keyword cluster more cleanly and allow for membership-specific content and schema.

### URL Structure

All URLs use lowercase, trailing slashes, and match the approved slugs exactly. No issues.

---

## 2. On-Page SEO

### Title Tags

**Critical gap.** The `index.html` has a single static title tag:

```html
<title>Nahma Golf Club | Public Golf Course | Rapid River, MI</title>
```

This title is used for every page in the app. In a React SPA without a head management library, every route renders with the same title. This means the Rates page, History page, Leagues page, and all location pages will share a generic homepage title when Google crawls them.

**Fix required before launch:** Install `react-helmet-async` (or equivalent) and add unique `<title>` and `<meta name="description">` tags to each page component. Templates for every page are provided in Section 5 below.

### Meta Descriptions

**Critical gap.** No `<meta name="description">` tag exists anywhere in the current prototype. Meta descriptions are the single biggest lever for CTR from both organic search and GBP click-throughs. The strategy doc (Section 5, Messaging Hierarchy) explicitly calls out pricing in meta descriptions as the fix for the high-impressions, low-CTR pattern in GBP data.

### SeoBanner Component

The `SeoBanner` component is a wireframe annotation tool (visible gray bar showing page name and target keywords). It is not an SEO implementation. It will need to be removed before launch and replaced with proper `<head>` tag injection.

**The keywords listed in each SeoBanner are useful as implementation reference:**

| Page | SeoBanner Keywords |
|---|---|
| Home | `upper peninsula golf courses, golf courses near escanaba mi` |
| Contact | `nahma golf club contact, rapid river michigan golf` |
| Hole-by-Hole | `nahma golf club holes, 9 hole course upper peninsula` |
| Scorecard | `nahma golf club scorecard, course yardage` |
| Location pages | `golf near [city] michigan, [city] golf courses, upper peninsula golf` |

These match the strategy doc targeting. They just need to be translated into actual `<meta>` tags.

### H1 Tags

Every page has exactly one `<h1>`. The homepage H1 is:

> Golf on the Shore of Big Bay de Noc.

This is the correct implementation of the messaging hierarchy rule ("lead with the lake"). The lake appears before the brand name, before the location, and before any pricing. This is a pass.

Other pages with well-formed H1s:
- Contact: "Contact Nahma Golf Club"
- Location pages: "Golf Near [City], Michigan" (correct keyword format)
- Hole-by-Hole: "Nahma Golf Club: Hole-by-Hole Guide"
- Scorecard: "Nahma Golf Club Scorecard"

### Content Quality and Messaging Hierarchy

The strategy doc (Section 5) defines a five-level messaging hierarchy. The wireframe follows it on the homepage:

1. **Lake setting** — H1 leads with Big Bay de Noc. Pass.
2. **1922 founding** — Appears in the H1 subhead ("A public course since 1922") and in the three-column strip below the hero. Pass.
3. **Affordable pricing** — "$18 Green Fees" appears in the hero pill strip and in a dedicated rates callout section. Pass.
4. **Full-day experience** — Clubhouse, leagues, and private outings all appear as feature cards in the homepage experience section. Pass.
5. **Community and calendar** — Leagues and events referenced on the homepage. Pass.

**Location pages:** Each implements the required content structure: distance from city, Big Bay de Noc and 1922 differentiators, NAP, hours, map placeholder, and "Why Nahma" highlight cards. The city-specific `description` and `directions` props passed from `App.jsx` provide the localized context required by the strategy doc.

**Operational accuracy:** The content correctly avoids the prohibited assumptions listed in the strategy doc (Section 12). No implied club rentals, no implied driving range, no implied year-round operation, no implied separate 18-hole layout. The 18-hole experience is described as replaying the 9-hole course. This is a pass.

**"Nahma Golf Course" vs "Nahma Golf Club":** The wireframe consistently uses "Nahma Golf Club" in H1s, headers, and the footer NAP block. "Nahma Golf Course" does not appear in any heading or structural element. The scorecard component uses "Nahma Golf Club" in the printable card header. This is correct.

---

## 3. Technical SEO

### Schema Markup

**Critical gap.** No JSON-LD schema is implemented anywhere in the prototype. The strategy doc (Section 11) and the GBP doc (Section 8) both specify:

- `GolfCourse` schema on the homepage
- `Event` schema per calendar event (or on the events page)

The complete, production-ready JSON-LD for both schema types is already written in `nahma-golf-club_gbp-optimization.md` (Section 8). It only needs to be placed into the `<head>` of the homepage. For events, it should be placed on each event page or dynamically generated from the events calendar data.

**Validation reminder:** All JSON-LD must be tested at `search.google.com/test/rich-results` before deploying.

### Core Web Vitals Infrastructure

The wireframe uses Vite + React + Tailwind. This is a strong foundation for CWV compliance. However, several implementation constraints from the strategy doc (Section 11) are not yet addressed:

| Directive | Status | Notes |
|---|---|---|
| Image format: WebP or AVIF | Not applicable yet | All images are `ImagePlaceholder` components. Must be enforced when real photos are added. |
| Hero images under 100kb | Not applicable yet | No real images in prototype. |
| `fetchpriority="high"` on above-fold image | Not implemented | Must be added to the hero `<img>` tag when the real aerial photo is placed. |
| `width` and `height` on all `<img>` tags | Not implemented | `ImagePlaceholder` components don't set dimensions. Must be enforced when real images are added to prevent CLS. |
| Tee-time widget deferred | Not applicable yet | No booking widget exists. When added, it must use `defer` or lazy-load to protect INP. |
| LCP target: under 2.5s | Not measurable yet | Dependent on real image implementation. |
| INP target: under 200ms | Not measurable yet | No heavy widgets currently. |
| CLS target: under 0.1 | At risk | Image dimensions must be set when real photos replace placeholders. |

### Canonical Tags

No canonical tags are currently implemented. The strategy doc (Section 11) specifically flags the `/tee-times/` URL as needing a self-referencing canonical to prevent duplicate content issues when dynamic booking URLs are introduced. This is not urgent for the wireframe stage but must be in the implementation spec before the tee-time system is connected.

### Google Fonts Loading

The `index.html` loads two Google Fonts families (Playfair Display, Source Sans 3) via standard `<link>` tags with `preconnect` hints. This is the correct approach. No issues.

### JavaScript Rendering

The site is a client-side React SPA. This means Googlebot must execute JavaScript to see the page content. Google handles JavaScript rendering, but there is a crawl delay between discovery and full indexing. For a local golf course with modest crawl budget, this is an acceptable tradeoff. If page-by-page SEO performance matters at launch, consider prerendering key pages (home, rates, contact, location pages) using a static generation or SSG approach.

---

## 4. NAP Consistency

The canonical NAP from the strategy doc is:

> **Name:** Nahma Golf Club
> **Address:** 8588 Ll Rd, Rapid River, MI 49878
> **Phone:** (906) 644-2648
> **Email:** nahmagolfclub@gmail.com

**Footer (Footer.jsx):** All four fields are present. Address format matches canonical exactly. Phone links to `tel:+19066442648`. Email links to `mailto:nahmagolfclub@gmail.com`. Pass.

**Contact page:** Name, address, phone, and email are all present and match canonical. The `<address>` tag is used correctly with `not-italic`. Hours are included. The Google Place ID (`ChIJ1WB78T5ITE0RqiPAKAn2RtE`) is referenced in the map placeholder comment. Pass.

**Location pages:** Each includes the canonical address (`8588 Ll Rd, Rapid River, MI 49878`) and phone number in the NAP block section. Pass.

**Scorecard component:** The scorecard header includes the address and phone in the printable card. Pass.

**One discrepancy to flag:** The `index.html` title tag includes "Rapid River, MI" which is correct. However, the homepage's Location section displays the address as `8588 Ll Rd, Rapid River, MI 49878` — this matches the canonical format. No issues.

---

## 5. Per-Page Title and Meta Description Templates

These are ready to implement using `react-helmet-async`. Install via `npm install react-helmet-async`, wrap the app in `<HelmetProvider>`, and add `<Helmet>` blocks to each page component.

### Core Pages

**Home (`/`)**
```
Title: Golf on Big Bay de Noc | Nahma Golf Club | Rapid River, MI
Meta: Public 9-hole golf course on Lake Michigan's Big Bay de Noc. Established 1922. Green fees from $18. Walk-ins welcome. Rapid River, Michigan.
```

**The Course (`/the-course/`)**
```
Title: The Course | Nahma Golf Club | Upper Peninsula Golf
Meta: 9 holes, par 36, 2,875 yards on the shore of Big Bay de Noc. Historic dish-shaped greens. Flat and walkable. Public course in Rapid River, MI.
```

**Hole-by-Hole (`/the-course/hole-by-hole/`)**
```
Title: Hole-by-Hole Guide | Nahma Golf Club | Rapid River, MI
Meta: A complete guide to all 9 holes at Nahma Golf Club. Par, yardage, playing tips, and course notes for every hole on Big Bay de Noc.
```

**Scorecard (`/the-course/scorecard/`)**
```
Title: Scorecard | Nahma Golf Club | 9 Holes, Par 36
Meta: Download or print the Nahma Golf Club scorecard. 9-hole par 36, 2,875 yards. White and Red tee yardages for all holes. Rapid River, MI.
```

**Rates (`/rates/`)**
```
Title: Rates & Fees | Nahma Golf Club | Green Fees from $18
Meta: Green fees from $18 for 9 holes. Cart rentals from $14. Membership options from $75/season. Affordable public golf in Michigan's Upper Peninsula.
```

**Tee Times (`/tee-times/`)**
```
Title: Tee Times | Nahma Golf Club | Walk-Ins Welcome
Meta: No reservation required at Nahma Golf Club. Walk in and play. Open May through September. Call (906) 644-2648 for large groups. Rapid River, MI.
```

**Leagues (`/leagues/`)**
```
Title: Golf Leagues | Nahma Golf Club | Rapid River, Michigan
Meta: Three weekly leagues at Nahma Golf Club. Men's League Tuesdays, Women's League Thursdays, All Scramble Wednesdays. 6 PM start. All skill levels welcome.
```

**Clubhouse (`/clubhouse/`)**
```
Title: Clubhouse | Nahma Golf Club | Food, Bar & More
Meta: The Nahma Golf Club clubhouse serves food, pizza, sandwiches, and a full bar. Open during course hours. The perfect spot after 9 holes on the bay.
```

**Cart Rentals (`/rentals/`)**
```
Title: Cart Rentals | Nahma Golf Club | Gas Carts from $14
Meta: Gas cart rentals for 9 or 18 holes at Nahma Golf Club. From $14 per round. Annual trail fee and cart storage available. Club rentals not offered.
```

**Outings (`/outings/`)**
```
Title: Group Golf Outings | Nahma Golf Club | Upper Peninsula
Meta: Book a private golf outing at Nahma Golf Club. Lakeside course with a full-service clubhouse. Scrambles, corporate outings, family tournaments. Rapid River, MI.
```

**History (`/history/`)**
```
Title: Club History | Nahma Golf Club | Est. 1922
Meta: Nahma Golf Club was established in 1922, making it the second oldest golf course in Delta County. Over a century of public golf on Big Bay de Noc.
```

**About (`/about/`)**
```
Title: About | Nahma Golf Club | Public Golf, Upper Peninsula
Meta: Learn about Nahma Golf Club, a public 9-hole course on Big Bay de Noc in Rapid River, Michigan. Open May through September since 1922.
```

**Contact (`/contact/`)**
```
Title: Contact | Nahma Golf Club | Rapid River, Michigan
Meta: Contact Nahma Golf Club. 8588 Ll Rd, Rapid River, MI 49878. Call (906) 644-2648 or email nahmagolfclub@gmail.com. Walk-ins always welcome.
```

### Location Pages

**Golf Near Escanaba (`/golf-near-escanaba/`)**
```
Title: Golf Near Escanaba, MI | Nahma Golf Club | 20 Miles Away
Meta: Nahma Golf Club is 20 miles from Escanaba. Public 9-hole golf on Big Bay de Noc. Green fees from $18. Walk-ins welcome, no tee time required.
```

**Golf Near Rapid River (`/golf-near-rapid-river/`)**
```
Title: Golf Near Rapid River, MI | Nahma Golf Club
Meta: Nahma Golf Club is under 5 miles from Rapid River. Historic public golf on Big Bay de Noc since 1922. Green fees from $18. Walk-ins welcome.
```

**Golf Near Gladstone (`/golf-near-gladstone/`)**
```
Title: Golf Near Gladstone, MI | Nahma Golf Club | 25 Miles
Meta: Nahma Golf Club is approximately 25 miles from Gladstone. Public golf on Big Bay de Noc. Green fees from $18. No tee time required. Rapid River, MI.
```

**Golf Near Garden (`/golf-near-garden/`)**
```
Title: Golf Near Garden, MI | Nahma Golf Club | 20 Miles
Meta: Nahma Golf Club is about 20 miles from Garden, Michigan. Historic lakeside public golf since 1922. Green fees from $18. Walk-ins welcome.
```

**Golf Near Manistique (`/golf-near-manistique/`)**
```
Title: Golf Near Manistique, MI | Nahma Golf Club | 45 Miles
Meta: Nahma Golf Club is approximately 45 miles from Manistique. Public golf on Lake Michigan's Big Bay de Noc. Green fees from $18. Rapid River, MI.
```

---

## 6. GBP Content Alignment

The wireframe's content maps cleanly to the GBP optimization strategy. Key alignment points:

**Business description alignment:** The GBP description copy in `nahma-golf-club_gbp-optimization.md` (Section 1) and the homepage wireframe lead with the same differentiators in the same order: Big Bay de Noc, 1922, price, walk-ins. The website will reinforce what users encounter first on GBP.

**Services alignment:** Every service listed in the GBP optimization doc (Section 3) is represented on the wireframe. Rates page covers green fees and cart rentals. Leagues page covers all three weekly leagues. Rentals page covers trail fee and storage. Outings page covers private events and scrambles. Clubhouse page covers food and bar. The /memberships/ route (aliased to Rates) covers all membership tiers.

**Q&A alignment:** The 14 seeded Q&As from `nahma-golf-club_gbp-optimization.md` (Section 5) are answered accurately by the wireframe content. No page contradicts any Q&A answer. Specific checks:
- "No reservations required" — confirmed on Home, TeeTimes, and Location pages.
- "Club rentals not available" — stated on Rentals page. No page implies otherwise.
- "No driving range" — not mentioned elsewhere in the site as available.
- "Open May through September" — stated in footer, Contact page, and every Location page.
- "18-hole play = replaying the 9" — stated on the Rates page ("18 holes means playing the 9-hole course twice"). Aligned.

**Categories alignment:** The Restaurant category is supported by the Clubhouse page content (food, pizza, sandwiches, full bar). The Golf Club category is supported by Leagues and Rates/Memberships pages. This is correct.

**Photo strategy alignment:** The wireframe uses `ImagePlaceholder` components throughout. The priority upload order from the GBP doc (aerial drone as cover, clubhouse, lake-view hole, fairway, bar interior, food, golfers, pro shop) should inform which photos are placed in each placeholder slot when real images are available. The aerial image placeholder on the homepage hero is the highest-priority replacement.

**NAP/Schema alignment:** The GBP doc's JSON-LD (Section 8) uses `"Nahma Golf Club"` as the name, `"8588 Ll Rd"` as the street address, `"Rapid River"` as the city, and `"+19066442648"` as the phone. All of these match what the wireframe displays in the footer, Contact page, and Location pages. Schema can be dropped in as-is.

---

## 7. Issues Requiring Action Before Launch

Ranked by priority from the strategy doc (Section 13, Content Priority Order).

### P0: Blocking for Production (Launch Blockers)

| Issue | Location | Fix |
|---|---|---|
| No per-page `<title>` tags | All pages via `index.html` | Install `react-helmet-async`; add `<Helmet>` to each page using templates in Section 5 |
| No `<meta name="description">` tags | All pages | Same as above; use meta description templates in Section 5 |
| No GolfCourse JSON-LD schema | Homepage | Copy schema from GBP doc Section 8 into a `<Helmet>` block on `Home.jsx` |
| SeoBanner must be removed | All pages | Remove the component and its usage; it is visible text in production |

### P1: High Priority (Before or Shortly After Launch)

| Issue | Location | Fix |
|---|---|---|
| No Event JSON-LD schema | Events/outings | Add Event schema per-event using the template in GBP doc Section 8 |
| Image dimensions not set | All `ImagePlaceholder` replacements | When real images are added, all `<img>` tags must have explicit `width` and `height` attributes to prevent CLS |
| Hero image not optimized | Hero section | Convert to WebP/AVIF, compress under 100kb, add `fetchpriority="high"` |
| No canonical tag on `/tee-times/` | TeeTimes.jsx | Add `<link rel="canonical" href="https://nahmagolfclub.com/tee-times/" />` before booking widget is connected |
| `/memberships/` aliased to Rates page | App.jsx | Build a dedicated `/memberships/` page targeting "golf club membership upper peninsula" |
| Google Maps placeholders | Home, Contact, Location pages | Replace with real embedded maps using the confirmed Place ID: `ChIJ1WB78T5ITE0RqiPAKAn2RtE` |

### P2: Nice to Have (Post-Launch)

| Issue | Location | Fix |
|---|---|---|
| SPA rendering delay | All pages | Consider prerendering key pages (home, rates, contact, location pages) for faster indexing |
| Blog pages are placeholder only | `/blog/`, `/blog/:slug/` | No content exists yet. Blog posts should be developed per the strategy doc Section 8 priority: "Best Golf Courses in Michigan's UP" first, then "Golf Courses Near Escanaba, MI" |
| No `<html lang>` in page-level rendering | `index.html` | Currently `lang="en"` is set on the root `<html>` tag. This is correct and no action needed. |

---

## 8. What's Already Done Right

- Sitemap is 100% complete relative to the approved architecture
- URL slugs match strategy doc exactly
- H1 on every page; homepage H1 leads with the lake
- NAP is consistent and canonically correct across all pages
- "Nahma Golf Club" used correctly in all structural elements; "Golf Course" not used where it should not be
- Messaging hierarchy followed on homepage (lake, 1922, price, experience, community)
- Content accurately reflects operational reality (no rentals, no driving range, no year-round operation implied)
- Location pages include all required elements: distance, differentiators, NAP, hours, directions, map placeholder
- Hole-by-hole page provides unique per-hole content at the depth the strategy doc requires
- Rates are visible on the homepage, not buried
- Footer NAP uses `<address>` tag with `not-italic` (semantically correct)
- Google Map Place ID is noted in the Contact page placeholder for easy implementation

---

*Analysis based on wireframe commit `fd9046c`. Update this document after schema implementation, real image addition, and head tag integration.*
