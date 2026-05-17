# Nahma Golf Club — v1 Site SEO Audit

**Date:** May 16, 2026
**Scope:** All 20 pages in `/site/` audited against `_seo/nahma-golf-club_info-and-strategy.md`
**Verdict:** Site is client-ready with one content fix required and a clear schema roadmap for Phase 2.

---

## Executive Summary

The v1 site is in strong shape. All 20 pages are live. Footer NAP is consistent across every page. Meta descriptions, H1s, and body copy follow the lake-first and 1922 messaging hierarchy on 90%+ of pages. The blog post deploys Article schema correctly. The contact page deploys GolfCourse schema correctly.

The one issue that should be fixed before client delivery: the `/rates/` page body copy never mentions Big Bay de Noc or 1922, which directly violates the strategy's "always lead with the lake" and "1922 in first 100 words" rules. Every other page complies. This is a one-paragraph fix.

The bigger gap is schema coverage: only 2 of 20 pages have JSON-LD markup. This is the right call for v1 (schema is invisible to the client and can be added cleanly in a Phase 2 pass), but it should be documented so it doesn't get lost.

---

## Page-by-Page Findings

### Homepage (/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Nahma Golf Club \| Public Golf Course on Big Bay de Noc \| Est. 1922" |
| Meta description | ✓ | Includes lake, 1922, $18, no tee time, May–September |
| H1 | ✓ | "Where the Fairway Meets the Bay" — lake-first |
| Big Bay de Noc | ✓ | Extensive — hero, multiple sections |
| 1922 mention | ✓ | Overline, trust bar, multiple sections — well within first 100 words |
| Pricing | ✓ | $18/$28 green fees, $14/$24 carts, full membership range |
| Footer NAP | ✓ | 8588 Ll Rd, Rapid River, MI 49878 / (906) 644-2648 |
| GolfCourse schema | ✗ | Missing — strategy Section 11 requires this on homepage |
| Event schema | ✗ | Missing — 2026 calendar events should have Event schema |

**Notes:** Strong execution. The schema gap is the only issue and belongs in Phase 2.

---

### The Course (/the-course/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | Includes "9 Holes on Big Bay de Noc \| Est. 1922" |
| Meta description | ✓ | Par 36, 2,875 yards, $18, walk-ins |
| H1 | ✓ | "The Course" |
| Big Bay de Noc | ✓ | Extensive throughout |
| 1922 mention | ✓ | Title, intro, multiple body sections |
| Pricing | ✓ | $18/$28 displayed |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | None |

**Notes:** Solid. Internal links to /hole-by-hole/ and /scorecard/ support content hierarchy.

---

### Hole-by-Hole (/the-course/hole-by-hole/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Hole-by-Hole Guide \| Nahma Golf Club \| Big Bay de Noc" |
| Meta description | ✓ | Yardages, par, handicap, descriptions, playing tips |
| H1 | ✓ | "Nahma Golf Club: Hole by Hole" |
| Big Bay de Noc | ✓ | In introduction |
| 1922 mention | ✓ | In intro metadata section |
| Pricing | — | None — appropriate for informational intent |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | None |

**Notes:** This is the long-tail keyword asset the strategy calls out. Individual hole entries with yardage and tips fulfill the unique-query-per-hole opportunity. Good.

---

### Scorecard (/the-course/scorecard/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Scorecard \| Nahma Golf Club — Par 36, 2,875 Yards" |
| Meta description | ✓ | Includes Big Bay de Noc reference |
| H1 | ✓ | "Nahma Golf Club Scorecard" |
| Big Bay de Noc | ✓ | In meta and body |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | None — not critical for this navigational page |

**Notes:** Navigational intent served correctly. No issues.

---

### Rates & Fees (/rates/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Rates & Fees \| Nahma Golf Club — Golf from $18 in Michigan's Upper Peninsula" |
| Meta description | ✓ | Includes Big Bay de Noc, $18, no tee time |
| H1 | ✓ | "Rates & Fees" |
| Big Bay de Noc | **✗** | **Mentioned in meta only — absent from body copy** |
| 1922 mention | **✗** | **Absent from body copy entirely** |
| Pricing | ✓ | Full: $18/$28 green fees, $14/$24 carts, $50 trail fee, $150 storage, all memberships |
| Footer NAP | ✓ | Consistent |
| Offer schema | ✗ | Missing — would enhance commercial intent per Section 11 |

**Notes:** This is the one page that needs a fix before client delivery. The strategy explicitly requires the lake and 1922 in the first 100 words of every primary page (Section 5 and Section 12). A two-sentence intro paragraph ("Nahma Golf Club sits on the shore of Big Bay de Noc...") would resolve both gaps. Pricing display itself is excellent.

---

### Tee Times (/tee-times/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Tee Times \| Nahma Golf Club — No Reservation Required" |
| Meta description | ✓ | Hours for all 3 days, May–September |
| H1 | ✓ | "No Reservation Required" — exactly right |
| Big Bay de Noc | ✓ | "Established in 1922 on the shore of Big Bay de Noc" |
| 1922 mention | ✓ | Present |
| Footer NAP | ✓ | Consistent |
| Self-referencing canonical | ✗ | Missing — required per Section 11 for future booking widget |
| OpeningHours schema | ✗ | Missing |

**Notes:** Walk-in messaging is correctly the centerpiece. The self-referencing canonical should be added before any booking widget goes live, but it's not urgent for client review.

---

### Golf Leagues (/leagues/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | Includes "Weekly Leagues in Michigan's Upper Peninsula" |
| Meta description | ✓ | All 3 leagues, all days/times, phone number |
| H1 | ✓ | "Golf Leagues" |
| Big Bay de Noc | ✓ | Present |
| 1922 mention | ✓ | "Established in 1922" |
| Footer NAP | ✓ | Consistent |
| Event schema | ✗ | Missing — Men's/Women's/All Scramble are recurring events |

**Notes:** Retention messaging is correctly prioritized. Event schema for the three weekly leagues would meaningfully enhance visibility.

---

### Clubhouse (/clubhouse/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Clubhouse \| Nahma Golf Club — Food & Bar After Your Round" |
| Meta description | ✓ | Full menu scope + Big Bay de Noc |
| H1 | ✓ | "The Clubhouse" |
| Big Bay de Noc | ✓ | Extensive |
| 1922 mention | ✓ | "Since 1922" |
| Footer NAP | ✓ | Consistent |
| Restaurant schema | ✗ | Missing — would support Restaurant GBP category per Section 9 |

**Notes:** Segment B messaging (experience before yardage) correctly executed. Restaurant schema in Phase 2 supports the GBP category expansion strategy.

---

### Cart Rentals (/rentals/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Cart Rentals \| Nahma Golf Club — Gas Carts from $14" |
| Meta description | ✓ | Includes "no club rentals" warning per critical operational fact |
| H1 | ✓ | "Cart Rentals" |
| Pricing | ✓ | $14/$24 carts, $50 trail fee, $150 storage |
| "No club rentals" clarification | ✓ | Present — critical per Section 4 |
| Footer NAP | ✓ | Consistent |
| Schema | — | None needed |

**Notes:** Transactional page focused correctly. No issues.

---

### Group Outings (/outings/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Private Golf Outings in Michigan's UP" |
| Meta description | ✓ | Clubhouse experience, full bar, food, phone CTA |
| H1 | ✓ | "Private Golf Outings on Big Bay de Noc" — lake-first |
| Big Bay de Noc | ✓ | Extensive — lake-first approach throughout |
| 1922 mention | ✓ | "Welcomes groups since 1922" |
| Pricing | ✓ | $18 green fees mentioned |
| Social proof (past outings) | ✓ | All 5: Manistique Paper, Geno Open, Mallach, LaLonde, Stonington Booster |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | None — Event schema for outings series recommended Phase 2 |

**Notes:** Strong Segment B execution. All 5 required social proof outings present per Section 8.

---

### History (/history/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Est. 1922, Michigan's Upper Peninsula" |
| Meta description | ✓ | Second oldest in Delta County, Big Bay de Noc, over a century |
| H1 | ✓ | "Our History" |
| Big Bay de Noc | ✓ | Extensive |
| 1922 mention | ✓ | Dominant theme throughout |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | None — LocalBusiness with foundingDate would help topical authority |

**Notes:** Tier 4 "historic golf courses michigan" targeting correctly executed. No issues.

---

### About (/about/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Public Golf Since 1922 \| Upper Peninsula, MI" |
| Meta description | ✓ | Lake, 1922, $18, no dress code, no reservation |
| H1 | ✓ | "About Nahma Golf Club" |
| Big Bay de Noc | ✓ | Multiple sections |
| 1922 mention | ✓ | Extensive |
| Pricing | ✓ | $18 mentioned |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | Organization schema with foundingDate would support branded queries |

**Notes:** Branded/navigational intent correctly served. No issues.

---

### Contact & Directions (/contact/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Contact & Directions \| Nahma Golf Club — Rapid River, MI" |
| Meta description | ✓ | Full phone, address, hours, May–September |
| H1 | ✓ | "Contact & Directions" |
| GolfCourse schema | ✓ | **Present** — name, URL, phone, email, address, geo coordinates, opening hours |
| NAP in schema | ✓ | Rapid River as locality (correct) |
| Geo coordinates | ✓ | 45.85630 N, -86.63740 W (matches strategy) |
| Map embed | ✓ | Place ID ChIJ1WB78T5ITE0RqiPAKAn2RtE (correct per strategy Section 8) |
| Footer NAP | ✓ | Consistent |

**Notes:** Currently the only page with GolfCourse schema deployed. Schema is correct and complete. Good execution — this is the local intent page where schema matters most.

---

### Blog Index (/blog/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Golf Blog \| Nahma Golf Club — Upper Peninsula Golf Stories" |
| Meta description | ✓ | Big Bay de Noc and 1922 both present |
| H1 | ✓ | "Golf Tips & Stories from Nahma" |
| Footer NAP | ✓ | Consistent |
| Schema | ✗ | None |

**Notes:** Content hub correctly positioned. Sidebar links support retention.

---

### Blog Post: Best Golf Courses in Michigan's UP (/blog/best-golf-courses-michigans-up/)

| Signal | Status | Notes |
|--------|--------|-------|
| Title tag | ✓ | "Best Golf Courses in Michigan's Upper Peninsula \| Nahma Golf Club" |
| Meta description | ✓ | Editorial framing — "honest course notes," UP-wide scope |
| H1 | ✓ | "The Best Golf Courses in Michigan's Upper Peninsula" |
| Article schema | ✓ | **Present** — headline, description, image, author, publisher, datePublished 2026-05-16 |
| Big Bay de Noc | ✓ | Hero image caption and introduction |
| 1922 mention | ✓ | "Est. 1922" in hero image caption |
| Editorial approach | ✓ | Genuine roundup including other UP courses — not self-promotion |
| Footer NAP | ✓ | Consistent |

**Notes:** This is the Tier 1 keyword capture vehicle. Article schema is correctly deployed. The editorial approach (honest, inclusive roundup) matches the strategy exactly.

---

### Location Pages (5 pages)

All five location pages follow the same template. Summary:

| Page | Title | Distance | Lake | 1922 | Pricing | NAP |
|------|-------|----------|------|------|---------|-----|
| /golf-near-escanaba/ | ✓ | 20 miles | ✓ | ✓ | $18 | ✓ |
| /golf-near-rapid-river/ | ✓ | Under 5 miles | ✓ | ✓ | $18 | ✓ |
| /golf-near-gladstone/ | ✓ | 25 miles | ✓ | ✓ | $18 | ✓ |
| /golf-near-garden/ | ✓ | Closest course | ✓ | ✗ | $18 | ✓ |
| /golf-near-manistique/ | ✓ | 45 miles on US-2 | ✓ | ✓ | $18 | ✓ |

**Garden page note:** 1922 is absent from the meta description. Minor — worth adding in a pass.

All five pages correctly:
- Target a single Tier 2 keyword per the strategy table
- Include the approximate driving distance
- Lead with Big Bay de Noc
- Show $18 pricing
- Use canonical NAP in the footer

---

## Cross-Site Findings

### Footer NAP Consistency

**Result: 100% consistent across all 20 pages.**

Every page shows:
- `8588 Ll Rd, Rapid River, MI 49878`
- `(906) 644-2648`

This matches the canonical NAP in Section 1 exactly.

---

### Schema Coverage

| Schema Type | Pages Needed | Pages Deployed | Gap |
|-------------|-------------|----------------|-----|
| GolfCourse | Homepage + Contact | Contact only | Homepage missing |
| Article | Blog posts | /blog/best-golf-courses-michigans-up/ | ✓ Complete |
| Event | Leagues, Events calendar | None | Phase 2 priority |
| Offer | /rates/ | None | Phase 2 priority |
| OpeningHoursSpecification | /tee-times/ | Contact page (within GolfCourse schema) | Phase 2 |
| Restaurant/LocalBusiness | /clubhouse/ | None | Phase 2 |

Overall schema deployment rate: **2 of 20 pages (10%)**

This is the clearest Phase 2 opportunity.

---

### Image Filenames

Photos in `/site/photos/` use the descriptive naming convention from the project spec:
- `hero-aerial-bay.jpg`
- `setting-vintage-1922.jpg`
- `clubhouse-bar-interior.jpg`
- `hole-01.jpg` through `hole-09.jpg`
- etc.

No `IMG_XXXX` patterns detected. Consistent with Section 9 photo naming rules.

---

### Pages Built vs. Strategy Sitemap

| Page | In Strategy | Built |
|------|-------------|-------|
| / | ✓ | ✓ |
| /the-course/ | ✓ | ✓ |
| /the-course/hole-by-hole/ | ✓ | ✓ |
| /the-course/scorecard/ | ✓ | ✓ |
| /rates/ | ✓ | ✓ |
| /tee-times/ | ✓ | ✓ |
| /leagues/ | ✓ | ✓ |
| /clubhouse/ | ✓ | ✓ |
| /rentals/ | ✓ | ✓ |
| /outings/ | ✓ | ✓ |
| /history/ | ✓ | ✓ |
| /about/ | ✓ | ✓ |
| /contact/ | ✓ | ✓ |
| /golf-near-escanaba/ | ✓ | ✓ |
| /golf-near-rapid-river/ | ✓ | ✓ |
| /golf-near-gladstone/ | ✓ | ✓ |
| /golf-near-garden/ | ✓ | ✓ |
| /golf-near-manistique/ | ✓ | ✓ |
| /blog/ | ✓ | ✓ |
| /blog/best-golf-courses-michigans-up/ | ✓ | ✓ |
| /memberships/ | Mentioned in Section 8 | **Not built** |
| /blog/golf-courses-near-escanaba-mi/ | Section 8 approved | **Not built** |
| Events calendar | Referenced Sections 8–9, 14 | **Not built** |

The three unbuilt pages are all v2 scope and not blockers for client delivery.

---

## Prioritized Action List

### Fix Before Client Delivery

1. **Rates page body copy** — Add a short intro paragraph mentioning Big Bay de Noc and the 1922 founding. This is the only strategy violation on the site.

### Phase 2: Schema Pass (Post-Delivery)

2. **GolfCourse schema on homepage** — Copy the correct schema from /contact/ and add to /
3. **Event schema for weekly leagues** — Men's (Tuesdays 6 PM), Women's (Thursdays 6 PM), All Scramble (Wednesdays 6 PM)
4. **Offer schema on /rates/** — Structured pricing data for green fees and memberships
5. **Restaurant/LocalBusiness schema on /clubhouse/** — Supports GBP Restaurant category expansion
6. **Self-referencing canonical on /tee-times/** — Required before any booking widget is introduced
7. **1922 in /golf-near-garden/ meta description** — Minor consistency fix

### Phase 2: Content (Post-Delivery)

8. **Blog post: Golf Courses Near Escanaba, MI** — Approved Tier 2 Tier 4 target from strategy
9. **Blog post: What to Know Before Golfing in Michigan's UP** — Segment A informational capture
10. **/memberships/ page** — Segment D conversion path (Section 8 specifies this)
11. **Events calendar page** — Infrastructure for GBP posts strategy (Section 14)

---

## Overall Verdict

The site is ready for client review. The messaging hierarchy, NAP consistency, meta optimization, and content voice are all solid across the board. The rates page body copy is the only issue to fix before sending.

Schema is the biggest technical gap, but it's invisible to the client and has no bearing on the design review. Document it as a clear Phase 2 deliverable and move on.
