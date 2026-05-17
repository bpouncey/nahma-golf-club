# Nahma Golf Club — Rates Copy Brief

**Version:** 1.0 (May 2026)
**Status:** Approved for use in Claude Design
**Design system:** `_design/design-system.md`

---

## Page Context

**URL:** `/rates/`
**Primary keywords:** affordable golf upper peninsula michigan, green fees upper peninsula, golf course rates upper peninsula michigan
**Audience:** Golfer ready to commit. Comparing price before showing up.
**Intent:** Transactional. Pricing must be visible above the fold on mobile.
**Conversion goal:** Visit or book a tee time.

**Messaging hierarchy:**
1. Pricing (visible immediately, no scrolling required)
2. Cart rentals
3. Seasonal memberships
4. Weekly leagues (secondary — gateway to leagues page)

---

## Meta Title and Description

**Title tag:**
`Rates and Green Fees | Nahma Golf Club | From $18`

**Meta description:**
`Nahma Golf Club rates: 9 holes from $18, 18 holes from $28. Seasonal memberships, cart rentals, and league info. Public course, Rapid River, MI. Walk-ins welcome.`

---

## Section 1: Hero

**Layout:** Forest green background. Centered text. Compact — do not pad this section heavily. Pricing needs to appear fast.

---

**H1 (Barlow Condensed Bold, uppercase):**
NAHMA GOLF CLUB RATES AND FEES

**Subheadline (DM Sans 400, body-lg, white):**
Public access. Walk-ins welcome. Green fees starting at $18.

---

## Section 2: Green Fees

**Layout:** Cream background. H2 and intro line above a clean pricing table.

---

**Overline:**
`GREEN FEES`

**H2 (Barlow Condensed Bold, uppercase):**
NO TEE TIME REQUIRED

**Supporting line (DM Sans 400):**
Walk-ins always welcome.

**Pricing table:**

| Round | Regular | UPGA Members |
|-------|---------|--------------|
| 9 Holes | $18.00 | $13.00 |
| 18 Holes | $28.00 | $23.00 |

**Note below table (DM Sans 400, small, muted):**
18-hole play means replaying the same 9-hole course. There is no separate 18-hole layout.

**UPGA note (DM Sans 400, small):**
UPGA (Upper Peninsula Golf Association) members receive reduced rates.

---

**Design notes:**
- Table header row in `--color-green-dark`, white text.
- Row dividers: 1px `--color-cream-dark`. No heavy borders.
- Notes below table in `rgba(0,0,0,0.5)`, DM Sans 400, 13px.

---

## Section 3: Cart Rentals

**Layout:** Sand background. Same table structure as green fees.

---

**Overline:**
`CART RENTALS`

**H2 (Barlow Condensed Bold, uppercase):**
RIDE OR WALK — YOUR CALL

**Pricing table:**

| Round | Regular | Members |
|-------|---------|---------|
| 9 Holes | $14.00 | $12.00 |
| 18 Holes | $24.00 | $20.00 |

**Three info cards below the table (3-column grid):**

Card 1 — Annual Trail Fee
$50.00 — Bring your own personal cart and pay one annual fee for the season.

Card 2 — Cart Shed Storage
$150.00 — 12-month storage for personal carts on site.

Card 3 — Important
No carry-ons allowed on the course.

---

**Design notes:**
- Info cards: `--color-off-white`, 1px border, 4px top border in `--color-green`.
- Card price in Barlow Condensed Bold (H3 scale), terracotta.
- Card body in DM Sans 400.

---

## Section 4: Seasonal Memberships

**Layout:** Cream background. Two membership tables side by side (desktop). Stack on mobile.

---

**Overline:**
`SEASONAL MEMBERSHIPS`

**H2 (Barlow Condensed Bold, uppercase):**
PLAY ALL SEASON FOR ONE PRICE

**Intro paragraph (DM Sans 400):**
Season runs May through September. Members play at UPGA green fee rates all season. Memberships pay for themselves quickly for regular players.

**Table 1 — Age 59 and Under:**

| Type | Price |
|------|-------|
| Single | $450 |
| Couple | $525 |
| Family (all children 17 and under) | $550 |
| College Student (25 and under) | $125 |
| High School Student (17 and under) | $75 |

**Table 2 — Senior Memberships (Age 60+):**

| Type | Price |
|------|-------|
| Single | $425 |
| Couple | $500 |

**Break-even callout (below tables, styled as a subtle highlight box):**
A single membership at $450 pays for itself in 18 rounds at the regular rate. Play twice a week and it's paid off in under two months.

---

**Design notes:**
- Table headers in `--color-green`, white text.
- Break-even callout: `--color-cream-dark` background, 1px border, DM Sans 400 italic, slightly larger than body text.

---

## Section 5: Weekly Leagues

**Layout:** Sand background. Three cards in a 3-column grid (desktop). Cards have forest green header area.

---

**Overline:**
`WEEKLY LEAGUES`

**H2 (Barlow Condensed Bold, uppercase):**
PLAY EVERY WEEK

**Intro line (DM Sans 400):**
Leagues run May through September. All skill levels welcome.

**League Card 1:**
Header label: TUESDAYS — 6:00 PM
Heading: MEN'S LEAGUE
Body: No pre-registration required for new players. Show up at 6 and find a group.
Link: `League Details →` (→ `/leagues/`)

**League Card 2:**
Header label: WEDNESDAYS — 6:00 PM
Heading: ALL SCRAMBLE
Body: Open to all skill levels. Walk-ins welcome. A great way to try league golf.
Link: `League Details →` (→ `/leagues/`)

**League Card 3:**
Header label: THURSDAYS — 6:00 PM
Heading: WOMEN'S LEAGUE
Body: All female golfers welcome. A welcoming group, all skill levels encouraged.
Link: `League Details →` (→ `/leagues/`)

---

**Design notes:**
- Card header area: `--color-green-dark`, white text.
- Header label in DM Sans 600, 12px, uppercase, `--color-terracotta`.
- Card heading in Barlow Condensed Bold (H4 scale), white.
- Card body area: `--color-off-white`, DM Sans 400.

---

## Section 6: Payment Note

**Layout:** Cream background. Centered. Small text. Minimal vertical padding.

---

**Body (DM Sans 400, small, centered, muted):**
We accept credit cards, debit cards, and NFC mobile payments.

---

## Section 7: Closing CTA Band

**Layout:** Forest green background. Centered text and single button.

---

**H2 (Barlow Condensed Bold, uppercase, white):**
READY TO GET OUT ON THE COURSE?

**Supporting line (DM Sans 400, white):**
Walk-ins are always welcome.

**CTA:**
Ghost button: `BOOK A TEE TIME` (→ `/tee-times/`)

---

## Internal Links on This Page

- `League Details` (x3) → `/leagues/`
- `BOOK A TEE TIME` → `/tee-times/`

---

## Copy Rules Applied

- No em dashes. Hyphens or commas instead.
- Pricing leads. It is the primary reason someone visits this page.
- 18-hole play clarified explicitly — same 9-hole course replayed.
- Membership break-even framed as a practical calculation, not a sales pitch.
- "Nahma Golf Club" on first mention. "Nahma" or "the club" after.
