# Nahma Golf Club — Claude Design Prompt

**Version:** 1.0 (May 2026)  
**Instructions:** Paste this entire document into Claude Design as the opening prompt for the homepage build. Do not summarize it. The level of detail is intentional — it prevents iteration loops.

---

## DESIGN BRIEF: Nahma Golf Club Homepage

I want you to design the homepage for **Nahma Golf Club**, a 9-hole public golf course established in 1922 on the shore of Big Bay de Noc in the Upper Peninsula of Michigan.

This is not a luxury resort. It is a historic, affordable, walk-in public course where the setting — a working-class town on the edge of Lake Michigan — is the entire selling point. The design should feel like a **modern vintage country club**: heritage precision with contemporary clarity, rooted in 1960s–70s club culture, not a modern SaaS product or a boutique resort.

---

## BRAND CONCEPT

**"Modern Vintage Country Club"**

Three rules that govern every design decision:
1. **Nostalgic Layout Formats** — condensed stacked headings, overline + rule line patterns, mid-century collegiate geometry
2. **Clean Vector Execution** — no gradients (except dark hero overlay), no distressed textures, no drop shadows, no glassmorphism
3. **Enclosed Compositions** — section headers feel framed, not floating; tight typographic containment signals heritage

---

## COLORS

Use these exact values. No substitutions.

| Token | Hex | Role |
|-------|-----|------|
| Course Green | `#1C3829` | Primary: nav, buttons, headers, accents |
| Terracotta | `#B85C38` | Accent: overline labels, hover states, decorative rules (use sparingly, max 1–2× per section) |
| Warm Cream | `#F4EFE6` | Primary background |
| Off-White | `#FAFAF8` | Alternating section background |
| Near-Black | `#1A1A18` | Body text |
| Muted Green-Gray | `#6B7264` | Secondary text, captions |
| Deep Green | `#122519` | Dark section backgrounds (footer, hero overlays) |
| Light Green Tint | `#E6EDE8` | Subtle hover backgrounds |
| White | `#FFFFFF` | Text on dark backgrounds |

**Accent rule:** Terracotta is an accent, never a fill. Do not use it as a section background or large area fill.

---

## TYPOGRAPHY

**Two fonts only:**
- **Barlow Condensed Bold (700)** — All headings. Always uppercase. Letter-spacing 0.05–0.08em. Line-height 1.0–1.1.
- **DM Sans (400/500/600)** — All body, UI, labels. Sentence case (except where uppercase is specified).

**Import:**
```
https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:wght@400;500;600
```

**Type scale:**
- Display (hero H1): 96px Barlow Condensed 700
- H1 (page titles): 72px
- H2 (section headers): 52px
- H3 (sub-section): 36px
- H4 (card titles): 24px
- Overline: 13px DM Sans 600, uppercase, letter-spacing 0.1em
- Body large: 18px DM Sans 400, line-height 1.65
- Body: 16px DM Sans 400, line-height 1.6
- Button text: 15px DM Sans 600, uppercase, letter-spacing 0.06em

**Overline pattern (use above every major section heading):**
```
————  SECTION LABEL  ————
```
The "————" are short horizontal rules (40–60px wide) in `#B85C38` (terracotta). The label is DM Sans 600, 12–13px, uppercase, letter-spacing 0.12em, color `#6B7264`. The whole unit is centered.

---

## BUTTONS

**Primary:**
- Background `#1C3829`, text white, DM Sans 600 15px uppercase, letter-spacing 0.06em
- Padding 14px 28px, border-radius 2px (not rounded, never pill)
- Hover: background `#122519`

**Secondary (outline):**
- Transparent background, `#1C3829` text and border, same font
- Padding 13px 27px, border-radius 2px
- Hover: fill green, text white

**Ghost (on dark backgrounds):**
- Transparent background, white text, border `rgba(255,255,255,0.6)`
- Same font, padding 13px 27px, border-radius 2px
- Hover: background `rgba(255,255,255,0.1)`, border `rgba(255,255,255,0.9)`

**Rule:** Border-radius maximum 2px. No pill buttons anywhere.

---

## LAYOUT

- Max content width: 1280px
- 12-column grid (desktop), 8-column (tablet), 4-column (mobile)
- Gutter: 24px
- Page horizontal padding: 80px desktop, 40px tablet, 20px mobile
- Hero, photo feature sections, and footer are full-bleed (zero horizontal padding, full viewport width)

---

## PHOTO TREATMENT

**Hero photos:**
- Overlay: `rgba(18,37,25,0.55)` over the image (Deep Green at ~55% opacity)
- Gradient variant: `linear-gradient(to top, rgba(18,37,25,0.7), rgba(18,37,25,0.3))` — use when text is bottom-aligned
- Full viewport height (100vh), object-fit cover

**Section photos:**
- No overlay treatment — full natural color
- Preferred aspect ratio: 3:2 landscape
- No borders, no rounded corners, no filters, no B&W, no vignette

**Photo grid:**
- Asymmetric: one large image (2/3 width) + two stacked smaller (1/3 width)
- Not uniform grids

---

## HOMEPAGE SECTIONS — BUILD ALL OF THESE

Build the homepage with the following 10 sections in this exact order.

---

### SECTION 1: Hero

Full-screen (100vh). Single photo with deep green overlay. Text centered or left-aligned depending on image composition.

**Overline (above H1):**
`NAHMA, MICHIGAN — EST. 1922`

**H1 (96px Barlow Condensed, uppercase, white):**
WHERE THE FAIRWAY MEETS THE BAY

**Subheadline (18px DM Sans 400, white, below H1):**
Nine holes on the shore of Big Bay de Noc. Public course. Walk-ins welcome.

**CTA row (below subheadline):**
- Primary button: `SEE RATES`
- Ghost button: `GET DIRECTIONS`

**Photo description:** A wide shot of the golf course with Big Bay de Noc (Lake Michigan) visible in the background. Green fairway in the foreground, lake horizon behind. If using a placeholder, describe it as: aerial or elevated golf course with lake backdrop.

---

### SECTION 2: Trust Bar

Full-width horizontal strip. Dark section: `#122519` background.

Four equal columns, each with a large stat number and a label below it. Stat numbers in `#B85C38` (terracotta), Barlow Condensed Bold H2 scale. Labels in white, DM Sans 500 13px uppercase, letter-spacing 0.08em. Dividers between columns: 1px `rgba(255,255,255,0.15)`. On mobile: 2×2 grid.

| Number | Label |
|--------|-------|
| 1922 | YEAR ESTABLISHED |
| 4.8★ | GOOGLE RATING |
| $18 | GREEN FEES FROM |
| 2,875 YDS | PAR 36 |

No overline. No heading. Just the stat strip. Vertically padded 48px top and bottom.

---

### SECTION 3: The Setting

Two-column. Photo on left (55–60% width), text on right. Section background: `#F4EFE6`.

**Overline pattern above heading:** `THE SETTING`

**H2 (Barlow Condensed, uppercase):**
ON THE SHORE OF BIG BAY DE NOC

**Body (18px DM Sans 400, two paragraphs with visible spacing between):**

Paragraph 1:
Some golf courses have a view. Nahma Golf Club sits on the shore.

Paragraph 2:
Big Bay de Noc stretches out behind the fairways. On a clear summer day in the Upper Peninsula, there is no backdrop like it. You can hear the water from the green.

We have been here since 1922. The second oldest course in Delta County. Nine holes of golf the way it was meant to be played, on the edge of Lake Michigan.

No reservations required. Show up, pay at the clubhouse, and play.

**Link CTA (below body, no button box):**
`Learn about the course →`  
DM Sans 600, `#1C3829`, small arrow suffix. No button styling.

**Photo description:** Course photo with lake visible. Not a tight crop — show the setting. Warm light.

---

### SECTION 4: Course Details

Full-width. Background: `#1C3829` (primary green). All text white or cream.

**Overline pattern (centered):** `THE COURSE`

**H2 (centered, Barlow Condensed, uppercase, white):**
NINE HOLES. ONE UNFORGETTABLE SETTING.

**Four stat cards below (centered row, white card backgrounds with subtle border or dark card variant):**

Card 1: Stat `9` / Label `HOLES` / Note: 18-hole play available by replaying the course
Card 2: Stat `PAR 36` / Label `COURSE PAR` / Note: 2,875 yards
Card 3: Stat `1922` / Label `ESTABLISHED` / Note: Second oldest in Delta County
Card 4: Stat `PUBLIC` / Label `ACCESS` / Note: Walk-ins welcome, no tee time required

Stat numbers in `#B85C38` (or cream if terracotta reads poorly on dark variant). Labels in white, DM Sans 500 uppercase. Note text in DM Sans 400, small, `rgba(255,255,255,0.7)`. On mobile: 2×2 grid.

---

### SECTION 5: Rates

Two-column. Intro text/heading on left. Rate information on right. Background: `#FAFAF8`.

**Overline pattern:** `RATES AND FEES`

**H2 (Barlow Condensed, uppercase):**
STRAIGHTFORWARD PRICING

**Intro paragraph (body):**
No membership required to play. Show up when you want, play what you can afford. Green fees start at $18 for nine holes.

**Rate tables on right column:**

GREEN FEES (label: DM Sans 600, 13px, uppercase)

|  | Regular | UPGA Member |
|---|---|---|
| 9 Holes | $18 | $13 |
| 18 Holes | $28 | $23 |

CART RENTAL (label: same style)

|  | Regular | Member |
|---|---|---|
| 9 Holes | $14 | $12 |
| 18 Holes | $24 | $20 |

**Membership callout (below tables):**
Memberships start at $75. Individual season membership from $450. UPGA members play at discounted rates all season.
Styled subtly: small DM Sans, slightly muted, separated with a top rule or light box — not hidden, not oversized.

**CTA (below callout):**
Primary button: `VIEW ALL RATES`

**Table styling:** Clean, no heavy borders. 1px row dividers in `#E8E0D4`. Column headers DM Sans 600 uppercase, small. No complex styling.

---

### SECTION 6: The Clubhouse

Full-width or two-column. Can be dark or light section — if using photo with people, dark overlay works well. If using exterior photo in good light, light treatment is fine.

**Overline pattern:** `THE CLUBHOUSE`

**H2 (Barlow Condensed, uppercase):**
STAY FOR A WHILE

**Body (two short paragraphs):**

Paragraph 1:
A round at Nahma is a half-day if you want it to be.

Paragraph 2:
The clubhouse has cold drinks, hot food (snacks, sandwiches, pizza), and a full bar. Pull up a chair after your round. It has a way of turning into an afternoon.

This is a public course. It does not feel like one.

**Photo description:** Clubhouse exterior in warm light, or interior showing bar and food. Inviting and social, not empty. If available, people at the bar or tables.

**Note:** Body copy is intentionally short. The photo carries the weight.

---

### SECTION 7: Leagues

Three-column card grid. Background: `#F4EFE6`.

**Overline pattern:** `THE LEAGUES`

**H2 (Barlow Condensed, uppercase):**
PLAY EVERY WEEK

**Intro paragraph:**
Three leagues run throughout the summer. You do not need a membership to join. You need to like golf.

**Three league cards:**

Each card has:
- Overline label in `#B85C38` (terracotta), DM Sans 600 12px uppercase
- Heading in Barlow Condensed Bold H4 scale
- Short body text in DM Sans 400

Card 1: Overline `TUESDAYS` / Heading `MEN'S LEAGUE` / Body: 6 PM tee time. Weekly season play, May through September. All skill levels.

Card 2: Overline `WEDNESDAYS` / Heading `ALL SCRAMBLE` / Body: 6 PM. Open to everyone, members and guests alike. The most social night of the week.

Card 3: Overline `THURSDAYS` / Heading `WOMEN'S LEAGUE` / Body: 6 PM tee time. Weekly season play, May through September. All skill levels.

**Card styling:** Background `#FAFAF8`, 1px border in `#E8E0D4`, 4px border-top in `#1C3829`. No drop shadows.

**Link CTA (below cards, centered):**
`Learn how to join →`  
DM Sans 600, Course Green. No button styling.

---

### SECTION 8: Group Outings

Full-width. Dark section. Background: `#122519`. Text white or cream.

**Overline pattern:** `GROUP OUTINGS` (in terracotta)

**H2 (Barlow Condensed, uppercase, white):**
BRING YOUR GROUP TO THE BAY

**Body (two paragraphs, white):**

Paragraph 1:
Private outings are available throughout the season. The Manistique Paper Outing. The Geno Open. The LaLonde Family Scramble. Groups have been choosing Nahma for years.

Paragraph 2:
The clubhouse handles food and drink for the group. The course handles the rest. Call or email to book a date.

**CTA (ghost button):**
`PLAN YOUR OUTING`

**Below button (small plain text, white, DM Sans 400):**
Or call us at (906) 644-2648

---

### SECTION 9: Footer CTA

Full-width closing section above the site footer. Background: `#F4EFE6` or `#FAFAF8`. Centered content.

**H3 (Barlow Condensed, uppercase):**
READY TO PLAY?

**Body:**
No tee time needed. Walk-ins welcome. Open May through September.

**CTA row:**
- Primary button: `SEE RATES`
- Secondary (outline) button: `GET DIRECTIONS`

**Below buttons, two lines plain text (DM Sans 400, muted):**
(906) 644-2648  
8588 Ll Rd, Rapid River, MI 49878

---

### SECTION 10: Footer

Full-width footer. Background: `#122519`. Text white.

**Required NAP (exact — do not alter):**
Nahma Golf Club  
8588 Ll Rd, Rapid River, MI 49878  
(906) 644-2648  
nahmagolfclub@gmail.com

Season: Open May through September

**Nav links:**
The Course / Rates / Leagues / Outings / Clubhouse / Contact

**Footer note (small, muted):**
No tee time required. Walk-ins welcome.

---

## NAVIGATION

Logo left (placeholder: wordmark "NAHMA GOLF CLUB" in Barlow Condensed Bold, in a simple enclosed composition between two short horizontal rules). Links center or right. CTA button far right: `BOOK A ROUND` or `SEE RATES`.

**Hero overlay state:** Transparent background, white text, subtle bottom border `rgba(255,255,255,0.1)`.

**Scrolled state:** `#F4EFE6` background, `#1A1A18` text, 1px bottom border in `#E8E0D4`. Transition 200ms ease.

---

## MOTION

Minimal only. No bounce, no spring, no animated counters, no hover scale effects.

| Element | Animation | Duration |
|---------|-----------|----------|
| Nav scroll state | Color transition | 200ms ease |
| Button hover | Background color | 150ms ease |
| Image reveal on scroll | Fade in + 12px translate up | 500ms ease-out |
| Section entrance | Fade in | 400ms ease |

No parallax on mobile. The brand does not animate aggressively.

---

## DESIGN DON'TS

**Never use:**
- Drop shadows (except text-on-photo legibility)
- Gradients (except hero dark overlay)
- Rounded or pill-shaped buttons or inputs
- Glassmorphism, floating cards with heavy shadows, gradient mesh backgrounds
- Distressed, grunge, or texture effects
- Script fonts or novelty typefaces
- Stock-photo-generic imagery
- Animations faster than 150ms or slower than 600ms
- "Modern SaaS" design patterns of any kind

---

## LAYOUT REFERENCE SUMMARY

For specific section layouts, use these references:
- **Hero + full-bleed photo treatment:** Cabot Cape Breton
- **Stat strip after hero:** Bandon Dunes
- **Section architecture (setting → course → rates → outings):** Bandon Dunes
- **Overline + rule typographic pattern:** Pinehurst Resort
- **Card structure with overline labels:** Malbon Golf
- **League card layout:** Eastside Golf
- **Enclosed composition aesthetic:** 1960s–70s country club printed programs
- **Group outings dark section:** Bandon Dunes

**The bay is the differentiator.** Every reference site sells a landscape. Nahma's landscape is more dramatic than most of them. The lake should be visible, implied, or referenced in every section that has a photo. Do not waste it.

---

## WHAT TO BUILD FIRST

Build the full homepage desktop layout. Use placeholder photos with accurate aspect ratios and the photo descriptions provided in each section. All copy is final — do not rewrite or simplify it.

Once the desktop layout is locked, adapt for mobile (primary breakpoint: 375px).
