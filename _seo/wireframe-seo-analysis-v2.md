# Nahma Golf Club: Wireframe SEO Analysis v2

**Version:** 2.0 (May 2026)
**Scope:** On-page structure audit — heading hierarchy, content depth, anchor text, duplication, and internal linking
**Prior analysis:** `wireframe-seo-analysis.md` covers meta tags, schema, technical SEO, and NAP consistency. This document does not repeat that work.

---

## Executive Summary

The structural fundamentals are mostly sound. 14 of 15 pages have correct heading hierarchies. Content depth is strong on the pages that matter most for organic visibility (HoleByHole, History, BlogPost, Outings). The problems that require attention before launch fall into three buckets: one significant heading violation on the homepage, a pattern of generic anchor text repeated across nearly every page, and several thin pages that need either real content or a clear rationale for staying short. None of these are difficult to fix, but the anchor text issue is pervasive and needs a systematic pass.

---

## 1. Heading Hierarchy

### The Rule

Headings must descend without skipping levels: H1 → H2 → H3. Jumping from H1 directly to H3, or from H2 to H4, tells crawlers that content is either disorganized or marked up carelessly. One H1 per page.

### Status by Page

| Page | H1 Count | Hierarchy | Issues |
|---|---|---|---|
| Home | 1 | H1 → H3 → H2 | **FAIL — see below** |
| The Course | 1 | H1 → H2 → H3 | Pass |
| Hole-by-Hole | 1 | H1 → H2 | Pass |
| Scorecard | 1 | H1 → H2 | Pass |
| Rates | 1 | H1 → H2 | Pass |
| Tee Times | 1 | H1 → H2 → H3 → H2 | Minor — see below |
| Leagues | 1 | H1 → H2 | Pass |
| Clubhouse | 1 | H1 → H2 | Pass |
| Cart Rentals | 1 | H1 → H2 | Pass |
| Group Outings | 1 | H1 → H2 | Pass |
| History | 1 | H1 → H2 → H3 | Pass |
| About | 1 | H1 → H2 → H3 | Pass |
| Contact | 1 | H1 → H2 | Pass |
| Location Pages | 1 | H1 → H2 | Pass |
| Blog Index | 1 | H1 → H2 | Pass |
| Blog Post | 1 | H1 → H2 → H3 | Pass |

---

### Issue 1 — Home.jsx: H3 Before Any H2 (High Priority)

**File:** `src/pages/Home.jsx`, lines 77–78

The three-column intro strip beneath the hero uses `<h3>` tags rendered from a `.map()` call. These are the first subheadings on the page after the H1. At the time they appear in the DOM, no `<h2>` has been rendered. The first `<h2>` on the page ("Play One of Michigan's Oldest Public Courses") appears at line 90 — after the H3s.

Rendered heading sequence on Home:

```
H1: "Golf on the Shore of Big Bay de Noc."
H3: "Established 1922"          ← skips H2
H3: "On Big Bay de Noc"         ← skips H2
H3: "Public Course, No Tee Times Required"  ← skips H2
H2: "Play One of Michigan's Oldest Public Courses"
H2: "Green Fees Starting at $18."
H2: "The Full Nahma Experience"
H3: "The Clubhouse"
H3: "Weekly Leagues"
H3: "Private Outings"
H2: "4.8 stars on Google"
H2: "Rapid River, Michigan"
```

**Fix options:**

Option A — Add a visually hidden H2 above the three-column strip. The strip is currently introduced with no heading at all. A visually hidden `<h2 className="sr-only">Why Nahma Golf Club</h2>` above the map gives the H3s a proper parent without changing the design.

Option B — Demote the three H3s to `<p>` tags with bold styling, since they function more like captions under icon/stat elements than true document headings. The icon + bold caption pattern doesn't require a heading tag.

Option B is structurally cleaner given what the three columns actually are (icon callouts, not sections). Option A is safer if the three items are intended to carry keyword weight ("Established 1922" and "On Big Bay de Noc" both do).

---

### Issue 2 — Tee Times: H3 Resuming to H2 (Low Priority)

**File:** `src/pages/TeeTimes.jsx`, line 63

Sequence in Tee Times:

```
H1: "Tee Times at Nahma Golf Club"
H2: "No reservation required. Show up and play."
H2: "Course Hours"
H3: "Season Notice"   ← correct, child of prior H2
H2: "Large group? Private outing?"
```

The H3 "Season Notice" is correctly placed as a child of "Course Hours" — that's fine. The issue is minor: "Season Notice" uses an H3 tag for a short seasonal callout that reads more like a label or badge. It doesn't need a heading tag. Changing it to a `<p>` with `font-semibold` or a styled `<span>` removes the structural noise without affecting the design.

---

## 2. Content Depth and Word Count

Estimates below are for visible body text — paragraph copy, list items, and substantive callout text. They exclude headings, button labels, icon captions, table headers, and navigation.

### Strong Pages (600+ words of body text)

These pages have the content depth to rank for competitive or long-tail queries.

| Page | Est. Word Count | Notes |
|---|---|---|
| Hole-by-Hole | ~2,000 | Per-hole descriptions, playing tips, yardage notes |
| Blog Post (featured) | ~1,500 | Full course comparison article with planning guidance |
| Home | ~900 | Multiple substantive sections; well-structured |
| History | ~800 | Narrative sections cover founding, greens character, timeline |
| Outings | ~750 | Benefit list, what's included, events calendar |
| The Course | ~700 | Setting, course character, quick facts, CTA |

### Adequate Pages (300–600 words)

Acceptable depth for their intent. No immediate action required.

| Page | Est. Word Count | Notes |
|---|---|---|
| Rates | ~500 | Pricing tables account for much of the content; the explanatory copy is thin |
| Leagues | ~400 | Three league cards, community section, membership CTA |
| Clubhouse | ~350 | Menu categories, hours, group CTA |
| About | ~300 | Three callout boxes + course stats + contact CTA |
| Blog Index | ~300 | Post excerpts make up most of the copy |
| Location Pages | ~300–400 | Per-city description and directions prose (varies by city) |
| Contact | ~250 | NAP block, hours table, form; the page legitimately doesn't need more |

### Thin Pages (under 250 words of body text)

These pages are at risk of being evaluated as low-quality or treated as near-duplicates of other pages.

**Tee Times** (~200 words)

The Tee Times page is the second most common transactional destination on a golf course site — right behind Rates. The current page accurately answers "do I need a reservation?" but doesn't provide anything else a user would want to read. There are no follow-up questions answered, no context for the walk-in experience, and no content distinguishing Nahma from other walk-in courses. Adding 300–400 words of prose in one or two sections ("What to Expect When You Arrive" and "Playing Conditions and Pace") would meaningfully improve the page without changing its design.

**Scorecard** (~100 words, excluding the scorecard table itself)

The scorecard page is appropriately minimal — it's a functional tool, not a content page. The table itself carries the keyword load (yardages, par, handicaps, tee names). No major action required; the content doesn't need to be padded. One thing missing: a brief intro paragraph above the scorecard explaining how to read it (white vs. red tees, 9 vs. 18 holes, slope/rating context) would add real utility and ~100 natural words.

**Cart Rentals** (~200 words)

The Rentals page states that club rentals are not available (correct) and then covers cart pricing in a table. The content is accurate but the page reads like a disambiguation page rather than a sales page for a real service. 200 words explaining the cart rental experience — what's included, condition of the fleet, how trail fee works, seasonal storage context — would make this a self-contained page instead of a table wrapper.

**Blog Post (non-featured)** — Placeholder Only

**File:** `src/pages/BlogPost.jsx`, lines 118–121

Non-featured blog posts display "This article is under development." These are indexed placeholders with no content. Before launch, either write the posts or add a `noindex` directive to all blog post routes that don't have real content. Indexed empty pages are actively harmful and should be treated as a launch blocker at the same priority as missing meta tags.

---

## 3. Duplicate and Near-Duplicate Content

### The Acceptable Kind

Several blocks of information repeat across pages and this is correct behavior: the NAP (name, address, phone, email), course specifications (9 holes, par 36, 2,875 yards), green fee pricing, and operating season. These repetitions support NAP consistency, reinforce key differentiators, and are expected on a local business site. Google is not confused by these.

### The Problematic Kind

**1. Value proposition copy — near-duplicate phrasing across pages**

The three-column intro strip on the homepage ("Established 1922," "On Big Bay de Noc," "Public Course, No Tee Times Required") contains the same core language that reappears on the About page, the Location pages, and the Course page. This is acceptable in principle — these are the site's three main differentiators and they should appear site-wide. The issue is that the phrasing is sometimes lifted verbatim. For example:

- Home.jsx (line 65): "The bay is your backdrop on nearly every hole."
- LocationPage.jsx (line 27, props-dependent): "on the shore of Big Bay de Noc"
- TheCourse.jsx: similar phrasing

Vary the language enough that each page's version reads as unique. Google is capable of detecting near-duplicate boilerplate and can discount the content weight of pages that appear to be recycling the same passages.

**2. "Why Nahma" section — appears on four pages**

The "Why Nahma" highlight cards appear on the homepage, the About page, the Course page, and every Location page. On the Location pages this is intentional and correct — the section is localized and serves a distinct purpose on those pages. On the About page, the same three selling points repeat in a different layout. Consider whether the About page's version adds anything that isn't already on the homepage and Location pages. If not, the About page would be stronger with unique content (the club's backstory, management, community role) rather than a reformatted version of the homepage pitch.

---

## 4. Anchor Text

### The Problem Pattern

The same destination is linked with identical generic text across multiple pages. The worst offenders:

| Anchor Text | Destination | Occurrences |
|---|---|---|
| "View Rates" | `/rates/` | Home (line 35), About (line 75), TheCourse (line 127) |
| "View Full Pricing" | `/rates/` | TeeTimes (line 103) |
| "See Rates" | `/rates/` | Scorecard (line 115), LocationPage (line 134) |
| "Learn About Memberships" | `/memberships/` | Rates (line 177) — page doesn't exist |
| "Read More" | `/blog/:slug/` | Blog index (line 94), all post cards |
| "Contact Us" | `/contact/` | About (line 71) |

Google uses anchor text as a signal for what the destination page is about. When every page links to `/rates/` with a different generic label, that signal is noisy and weak. The fix isn't to use identical text every time — it's to write anchor text that reflects what the user will find: "Green Fees Starting at $18," "Cart Rental Pricing," "Membership Rates," or "See All Rates and Fees." Vary by context.

### Specific Fixes by Page

**Home.jsx**
- Line 35: "View Rates" → "Green Fees Starting at $18" (or use the pricing pill strip above to provide context, so the link can stay shorter)
- Line 39: "Book a Tee Time" → acceptable; action-oriented and accurate since the page is the tee time destination

**About.jsx**
- Line 71: "Contact Us" → "Get in Touch" or "Contact Nahma Golf Club"
- Line 75: "View Rates" → "Rates and Green Fees"

**TheCourse.jsx**
- Line 127: "See Rates" → "Green Fees and Memberships"

**Scorecard.jsx**
- Line 115: "See Rates" → "Current Green Fees"

**TeeTimes.jsx**
- Line 103: "View Full Pricing" → "See Green Fees and Cart Rates"

**LocationPage.jsx**
- Line 134: "See Rates" → "Green Fees from $18"

**Blog.jsx (line 94)**
- "Read More" → each post card should use the post title as the link, not a generic label. This is a standard blog UX pattern: wrap the post title in the `<Link>` instead of (or in addition to) the "Read More" text. If "Read More" is kept for design reasons, supplement it with an `aria-label` containing the post title.

**Rates.jsx (line 177)**
- "Learn About Memberships" links to `/memberships/` which is currently aliased to the Rates page. The link is a self-referential loop. Either build the memberships page (noted as P1 in the v1 analysis), or change the anchor to "See Membership Tiers" and link to the `#memberships` anchor on the Rates page itself.

### What's Working Well

The primary navigation anchor text is strong throughout: "The Course," "Hole-by-Hole," "Rates & Fees," "Tee Times," "Leagues" — all descriptive, all specific. The Footer navigation follows the same pattern. The homepage experience section CTAs ("Visit the Clubhouse," "Join a League," "Plan an Outing") are all contextually accurate. The internal links within the Blog Post template use post titles as anchors in the related posts sidebar — correct behavior.

---

## 5. Internal Linking Gaps

These are pages or topics that logically connect to each other but have no link between them in the current wireframe.

| From | To | Rationale |
|---|---|---|
| History | The Course | After reading a century of history, the natural next step is the course itself. No link exists. |
| History | Hole-by-Hole | The "dish-shaped greens" mentioned in History are explained on HoleByHole. Connect them. |
| Blog Post (featured) | The Course | The featured post describes Nahma's course in detail alongside competitors but doesn't link to the course page. A natural "Play Here" or "Course Details" link at the point where Nahma is described would capture intent. |
| Blog Post (featured) | Rates | The post mentions affordability as a Nahma differentiator but doesn't link to the Rates page where pricing is detailed. |
| Hole-by-Hole | The Course | The hole guide stands alone. A link back to the parent course page would support crawl flow. |
| Cart Rentals | Outings | Group outings almost always involve cart rentals. No cross-link exists. |
| Clubhouse | Outings | The clubhouse is a key part of the outing value proposition. The pages don't link to each other. |

---

## 6. Structural Observations by Page

Issues not covered above.

**Home.jsx — H2 "4.8 stars on Google" (line 200)**

Using a price, rating, or metric as an H2 heading is unusual. "4.8 stars on Google" is a social proof callout, not a document section. Consider using a more descriptive H2 for the reviews section ("What Golfers Say About Nahma" or "Recent Reviews") and displaying the 4.8 stat as a styled element below it. This also gives the reviews section a clearer keyword anchor.

**Home.jsx — H2 "Rapid River, Michigan" (line 221)**

"Rapid River, Michigan" as a standalone H2 is weak from both a content and keyword standpoint. This appears to be a location/map section heading. Consider "Find Nahma Golf Club" or "Getting Here from Escanaba, Gladstone, and the UP" — something that incorporates directional context rather than just naming the city.

**Leagues.jsx — No heading over the league cards section**

The three league cards (Men's, Women's, All Scramble) are the centerpiece of the Leagues page but they have no H2 heading above them. After the H1, the first content is the cards themselves with no structural label. Adding an H2 like "Three Leagues, All Season Long" or "Join a Weekly League" before the cards gives the section context and a crawlable heading.

**Outings.jsx — H1 ends with period**

**File:** `src/pages/Outings.jsx`, line 73

H1: "Private Golf Outings on Big Bay de Noc."

Trailing periods in H1 tags are unconventional. Other H1s across the site also use periods (Home.jsx). This is a stylistic choice, not a technical error — Google ignores punctuation in headings. Flag it here in case the decision was accidental rather than intentional.

**Blog Index — H2 on post titles**

**File:** `src/pages/Blog.jsx`, line 88

Post titles in the blog index are rendered as `<h2>` tags. This is correct and expected on a blog index page. Each post card has one H2 (the post title), which is the correct implementation for an article listing. No action needed.

---

## 7. Summary: Issues by Priority

### Fix Before Launch

| # | Issue | File | Lines |
|---|---|---|---|
| 1 | Home heading sequence: H3s appear before any H2 | `src/pages/Home.jsx` | 77–78 |
| 2 | Indexed blog posts with "under development" content | `src/pages/BlogPost.jsx` | 118–121 |
| 3 | Rates page links to `/memberships/` (page doesn't exist, creates loop) | `src/pages/Rates.jsx` | 177 |

### Fix Before or Shortly After Launch

| # | Issue | File | Lines |
|---|---|---|---|
| 4 | Generic anchor text: "View Rates" / "See Rates" / "View Full Pricing" used 6+ times | Multiple | See Section 4 |
| 5 | "Read More" anchor text on all blog post cards | `src/pages/Blog.jsx` | 94 |
| 6 | Tee Times page thin on body content (~200 words for a transactional page) | `src/pages/TeeTimes.jsx` | Whole page |
| 7 | Cart Rentals page thin — table wrapper without substantive prose | `src/pages/Rentals.jsx` | Whole page |
| 8 | No internal links from History to course content | `src/pages/History.jsx` | Bottom of page |
| 9 | Featured blog post has no internal links to Nahma course/rates pages | `src/pages/BlogPost.jsx` | 92–101, 153 |
| 10 | Leagues page has no H2 before the three league cards | `src/pages/Leagues.jsx` | ~48 |

### Low Priority / Nice to Have

| # | Issue | File | Lines |
|---|---|---|---|
| 11 | H2 "4.8 stars on Google" should use a more descriptive section heading | `src/pages/Home.jsx` | 200 |
| 12 | H2 "Rapid River, Michigan" should be more descriptive for the map section | `src/pages/Home.jsx` | 221 |
| 13 | "Season Notice" uses H3 for a label-level callout; styled `<p>` is sufficient | `src/pages/TeeTimes.jsx` | 63 |
| 14 | About page "Why Nahma" section is near-duplicate of homepage intro strip | `src/pages/About.jsx` | 29–41 |
| 15 | Scorecard intro paragraph missing (explains white vs. red tees, 9 vs. 18) | `src/pages/Scorecard.jsx` | ~31 |
| 16 | No Clubhouse ↔ Outings cross-link; no Rentals → Outings cross-link | Multiple | — |

---

## 8. What's Working Well

- 14 of 15 pages have correct H1 → H2 → H3 heading hierarchy
- Every page has exactly one H1
- All H1s are keyword-targeted, descriptive, and unique across the site
- HoleByHole and History are genuinely strong content pages that should perform well for long-tail queries
- Navigation and footer anchor text is descriptive throughout
- Homepage experience section CTAs ("Visit the Clubhouse," "Join a League," "Plan an Outing") are well-written
- Blog post card H2 implementation is correct
- Location pages include all the structural elements required for local SEO pages of this type

---

*Audit based on wireframe commit `fd9046c`. Update after content revisions and before launch.*
