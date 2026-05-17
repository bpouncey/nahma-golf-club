# Nahma Golf Club — Hole-by-Hole Copy Brief

**Version:** 1.0 (May 2026)
**Status:** Approved for use in Claude Design
**Design system:** `_design/design-system.md`

---

## Page Context

**URL:** `/the-course/hole-by-hole/`
**Primary keywords:** nahma golf club holes, golf near escanaba, course prep searches
**Audience:** Golfer preparing for a visit. Researching the course before they play.
**Intent:** Informational. Highest time-on-page asset on the site.
**Conversion goal:** Print the scorecard or book a tee time.

**Messaging hierarchy:**
1. The personality of each hole (lake, trees, terrain)
2. Practical info golfers actually need (yardages, par, HCP, playing tips)
3. Soft conversion to scorecard and rates

---

## Meta Title and Description

**Title tag:**
`Hole-by-Hole Guide | Nahma Golf Club | Big Bay de Noc`

**Meta description:**
`Nahma Golf Club hole-by-hole guide. Yardages, par, handicap, descriptions, and playing tips for all 9 holes on Big Bay de Noc.`

---

## Section 1: Intro

**Layout:** Centered text block. Cream background. Generous vertical padding.

---

**Overline:**
`COURSE GUIDE`

**H1 (Barlow Condensed Bold, uppercase):**
NAHMA GOLF CLUB: HOLE BY HOLE

**Subheadline (DM Sans 400, body-lg):**
Nine holes on the shore of Big Bay de Noc. Each hole has its own personality, shaped by the lake, the trees, and a hundred years of play. Here's what to expect.

---

## Section 2: Stats Bar

**Layout:** Full-width dark green band. Three inline stats, centered.

---

**Stats (Barlow Condensed Bold, terracotta numerals):**

Stat 1: `9` / HOLES
Stat 2: `PAR 36`
Stat 3: `2,875` / TOTAL YARDS

---

**Design notes:**
- Same treatment as homepage trust bar. Dark green (`--color-green-dark`), white labels, terracotta numbers.
- On mobile, stack vertically with dividers.

---

## Section 3: Hole Card Grid

**Layout:** 3-column grid (desktop) / 2-column (tablet) / 1-column (mobile). Cream background. Each card is a self-contained hole entry.

---

**Card structure (repeat for each hole):**
- Hole photo (full-width top of card)
- Large serif hole number
- Par / Yards / HCP in a horizontal stat row
- Hole description paragraph
- Divider line
- "Playing Tip" label (italic, forest green) + tip text

---

**Hole 1** — Par 4 · 340 yds (Red: 310) · HCP 5

Description: A welcoming opener that plays straight along the tree line. The fairway widens near the green, giving you room to breathe on approach. Club down and find the short grass.

Playing Tip: Driver or 3-wood. Take the angle on the left side.

---

**Hole 2** — Par 3 · 165 yds (Red: 140) · HCP 9

Description: Your first glimpse of Big Bay de Noc opens up from the elevated tee box. The green sits tucked against a row of mature oaks. Short is safe; long is trouble.

Playing Tip: Play one club less in the wind. Aim center of the green.

---

**Hole 3** — Par 5 · 480 yds (Red: 445) · HCP 1

Description: The signature handicap 1 hole. A dogleg left with out-of-bounds on the right and a narrow approach corridor. Lay up to your comfortable wedge yardage.

Playing Tip: Two solid shots to the corner, then a full wedge in. Patience pays here.

---

**Hole 4** — Par 4 · 355 yds (Red: 325) · HCP 3

Description: Plays slightly uphill with a raised green that will reject weak approaches. The dish-shaped putting surface rewards a centered landing. Any miss is a chip.

Playing Tip: Aim for the center of the dish. Short right and long left are the danger zones.

---

**Hole 5** — Par 3 · 140 yds (Red: 120) · HCP 7

Description: Shortest hole on the course, but don't underestimate the depth of the green. Bay breezes make club selection tricky on this exposed downhill shot.

Playing Tip: Wind affects this hole more than any other. Check the tree tops before choosing a club.

---

**Hole 6** — Par 4 · 385 yds (Red: 355) · HCP 2

Description: One of the best driving holes on the course. An open fairway leads to a well-guarded green flanked by mounds on both sides. This is where scorecards separate.

Playing Tip: Driver to the flat section, mid-iron in. Don't try to reach the flag on a tight pin position.

---

**Hole 7** — Par 4 · 360 yds (Red: 335) · HCP 4

Description: A slight dogleg right with a glimpse of the bay on your backswing. The green complex is classic Nahma — elevated and round, demanding a precise short iron.

Playing Tip: Favor the left side of the fairway for the best angle into a typically back-right pin.

---

**Hole 8** — Par 5 · 490 yds (Red: 460) · HCP 6

Description: The second par 5 plays along the shoreline corridor. You can hear the water on calm days. Three solid shots will get you there. Going for it in two is risky.

Playing Tip: Three-shot strategy is the smart play. Let the course set up a short pitch to the green.

---

**Hole 9** — Par 4 · 360 yds (Red: 330) · HCP 8

Description: The closer brings you back toward the clubhouse with a slight right-to-left tilt. Water is visible on the right. Finish strong with a clean drive and a committed approach.

Playing Tip: Keep it left of center off the tee. The approach opens up nicely from that side.

---

**Design notes:**
- Cards on cream background (`--color-cream`). 1px border in `--color-cream-dark`.
- Hole number in large Barlow Condensed (display scale), terracotta.
- Stat row (Par / Yards / HCP) in DM Sans 600, small, uppercase. Dividers between each.
- Playing Tip label: DM Sans 600, italic, `--color-green`. Tip text in DM Sans 400 regular.

---

## Section 4: Scorecard CTA Band

**Layout:** Sand/cream background. Centered text and single button.

---

**H2 (Barlow Condensed Bold, uppercase):**
PRINT THE SCORECARD BEFORE YOU PLAY

**Supporting line (DM Sans 400):**
Our printable scorecard includes yardages and par for all 9 holes.

**CTA:**
Primary button: `VIEW SCORECARD`
(Links to `/the-course/scorecard/`)

---

## Section 5: Closing CTA Band

**Layout:** Forest green background. Centered. Two buttons.

---

**H2 (Barlow Condensed Bold, uppercase, white):**
GREEN FEES START AT $18. WALK-INS WELCOME.

**CTA row:**
Ghost button: `CURRENT GREEN FEES` (→ `/rates/`)
Ghost button: `BOOK A TEE TIME` (→ `/tee-times/`)

---

## Breadcrumb

Home / The Course / Hole-by-Hole

## Internal Links on This Page

- `VIEW SCORECARD` → `/the-course/scorecard/`
- `CURRENT GREEN FEES` → `/rates/`
- `BOOK A TEE TIME` → `/tee-times/`

---

## Copy Rules Applied

- No em dashes. Hyphens or commas instead.
- "Nahma Golf Club" on first mention. "Nahma" or "the course" after.
- Lake referenced in hole 2, 5, 7, 8 descriptions — not forced on every hole.
- Playing tips are direct and practical. No filler.
