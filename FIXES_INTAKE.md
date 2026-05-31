# Nahma Site Fixes — Intake Doc

Fill out this doc, then hand it back to start a new session to deploy all fixes.

---

## 1. Correct Email Address

**Appears on:** Rates, Outings, About, History, Blog, Contact, Golf Near Manistique (8 pages total)  
**Current value:** `nahmagolfclub@gmail.com`

**Correct email:**

```
info@nahmagolfclub.com
```

---

## 2. Payment Methods

**Appears on:** Rates page, Rentals page  
**Current copy:** "Credit cards, debit cards, and NFC mobile payments accepted."

**Is this accurate? If not, what should it say?**

```
[YOUR ANSWER]
```

---

## 3. Homepage Hero CTA

**Current CTAs:** "See Rates" (primary) + "Get Directions" (secondary)  
**Comment 10:** "Swap for Call to Book; or add Call to Book and put See Rates as secondary CTA"

**Which option?**

- Swap — replace "See Rates" with "Call to Book" (phone number only, no See Rates button)
- Add — make "Call to Book" primary, keep "See Rates" as secondary (removes "Get Directions")

**Phone number to link:** (906) 644-2648 ← confirm this is correct for the CTA  

```
Swap for Call to Book
(906) 644-2648
```

---

## 4. Reservations / Tee Time Language (Comment 11)

**Current copy on homepage:**

- "No reservations required. Show up, pay at the clubhouse, and play."
- "Walk-ins welcome. No tee time required."

**Is this accurate? If not, what should the correct language be?**

```
[YOUR ANSWER — or write "confirmed" if correct]
```

---

## 5. "Confirm Language" — Comment 12

Comment 12 just says "Confirm language" on the homepage at a wide viewport (1512px). Without the screenshot I can't tell which specific text block it's flagging.

**What section or copy is this referring to?**

```
I think this is about tee time language. See answer on #4.
```

---

## 6. Food Policy — Confirm the Direction

Multiple comments across homepage, rates, outings, and clubhouse all point the same direction. Want to confirm before a sub-agent rewrites ~15 text blocks:

**Keep:** snacks, cold drinks, full bar / beer / spirits / wine  
**Remove:** hot food, sandwiches, pizza, "pizza by the slice," "whole pizza pies," "made-to-order sandwiches"

**Is this correct? Any exceptions?**

```
Remove mentions of hot food, sandwiches, pizza, etc. The only thing available is the snacks (like chips, candy, crackers, etc.), cold drinks, and full bar.
```

---

## 7. Second Memberships (Comment 7 — Rates Page)

**Current membership types listed:** Single ($450), Couple ($525), Family ($550), Senior Single ($425), Senior Couple ($500), College Student ($125), HS Student ($75)

**What info about "second memberships" should be added?**  
*(e.g., a second membership for an additional household member, a discount for adding a second annual pass, etc.)*

```
Disregard for now.
```

---

## 8. Rates Page Layout — Comments 17 & 18

Two separate comments both say "Move to right column above bulleted list" on the Rates page.  
Current layout: left column = intro text + membership note | right column = Green Fees and Cart Rental rate tables.

**Without the screenshots, I can't tell which elements these refer to. What should move to the right column?**

```
Done.
```

---

## 9. The-Course Page — Missing 2nd Column (Comment 15)

**Comment:** "Fix missing 2nd column. Add image?"

My code review found the HTML structure intact, so this is likely a rendering/CSS bug at ~1212px wide. It may be a responsive breakpoint issue.

**If the column is restored, should an image be added to it — or just fix the layout so existing content displays correctly?**

```
I basically just want a photo right next to the Explore Hole by Hole card with no padding or gap in between those 2 columns of the grid.
```

---

## 10. League Info — Comment 22 (Leagues Page)

**Comment:** "Confirm all of this information and logistics"

**Current content on the Leagues page:**


| League         | Day       | Time    | Status |
| -------------- | --------- | ------- | ------ |
| Men's League   | Tuesday   | 6:00 PM | ?      |
| All Scramble   | Wednesday | 6:00 PM | Open   |
| Women's League | Thursday  | 6:00 PM | ?      |


**How to join** currently says: "Call ahead at (906) 644-2648 (not required but helps). Show up on league night by 6 PM."

Per Andrew's comment (#6): Tuesday and Thursday registration is closing soon; Wednesday is fully open. Alternates/subs can sign up for Tuesday and Thursday.

**What changes are needed?** (days/times correct? registration language? alternate/sub signup process?)

```
Make updates based on Andrew's comments. Working on forms and signups for leagues and events.
```

---

## 11. Google Business Profile Map Embed (Comment 37 — Contact Page)

**Comment:** "Update to GBP map embed"

The contact page currently has a generic Google Maps iframe.

**Paste your GBP embed code here:**

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.751445107885!2d-86.63740530000001!3d45.856273599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4c483ef17b60d5%3A0xd146f60928c023aa!2sNahma%20Golf%20Course!5e0!3m2!1sen!2sus!4v1780194177001!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

---

## 12. Andrew's Copy Suggestion — Comment 4 (Homepage)

Andrew suggested: *"Right for a quick 9 holes or you can make a day out of it."*  
Brad replied asking if this replaces an existing sentence or adds to one. No answer yet.

**What's the call?**

- Skip for now

---

## 13. Events & Online Registration — Comment 1 (Andrew)

Andrew asked for an Events Schedule page + online registration for events and memberships.  
Brad asked about data flow (Google Sheet, Airtable, etc.) — no answer yet.

**Is this in scope for this fix batch?**

- No — defer to a later session

---

## 14. Outings Page Hero Padding (Comment 14)

**Comment:** "Increase padding in hero"

No info needed — this is a CSS fix. But: how much more padding do you want?

- Match other pages hero sections

---

## Reference: Fixes That Need No Input

These will be deployed automatically in the next session — no decisions required:


| #                | Page                                | Fix                                                              |
| ---------------- | ----------------------------------- | ---------------------------------------------------------------- |
| 13               | Homepage                            | Soften "show up when you want" → warmer, less blunt phrasing     |
| 29               | Clubhouse                           | Remove sandwiches, pizza content; keep snacks + bar              |
| 32               | Rentals                             | Add "but limited" qualifier to club rental availability          |
| 34               | Blog                                | Fix featured image width on blog card                            |
| Food (all pages) | Homepage, Rates, Outings, Clubhouse | Strip pizza/hot food/sandwich copy per food policy above         |
| 3                | Homepage                            | Andrew's membership note — no action yet (he said it may change) |


