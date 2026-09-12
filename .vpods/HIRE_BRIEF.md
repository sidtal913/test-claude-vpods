# Hire brief
Project: Self-hosted .NET web application Anthropic
Hire agent: rae
Jira: AT-4
Task id: task_3ab30883
Title: Homepage — hero + primary sections (mockup-faithful)
Shape: page → app/page.tsx
## Description
Build the ARÔMA homepage first viewport and primary sections exactly per the attached mockup. This is the brand's first impression — treat fidelity to the mockup as the top priority, above adding anything not shown in it.

**Brand / visual tokens** *(stated explicitly — do not rely on Brand Kit auto-injection for this ticket):*

- Palette: deep black/near-black background (hero + sustainability bands), warm muted gold accent (buttons, icon strokes), cream/off-white background for the "Our Collections" band
- Gold CTA buttons use dark text on a warm gold fill
- Heading font: elegant serif (used for "AROMA" wordmark, main headlines, "Our Collections")
- Label/body font: clean sans-serif, wide letter-spacing on small uppercase labels (eyebrow text, trust-strip labels)
- Overall tone: luxury editorial, dense boutique feel — not a generic ecommerce template look

**Sections shown in mockup** *(top to bottom):*

1. **Hero** — full-width dark background, real photography of a marble countertop with coffee cup, product box, and 5 capsules in different colors. Left-aligned: small uppercase eyebrow, large serif headline, supporting paragraph, gold CTA button
2. **Trust strip** — 4-icon row directly under hero text, each with icon + 2-line uppercase label
3. **"Our Collections" band** — cream background, centered eyebrow + serif heading + subtitle, then a 4-column grid of collection cards (photo + heading + tagline + "SHOP NOW" link) for: Signature Blends, Single Origin, Espresso Intenso, Flavored Editions
4. **Sustainability band** — dark, full-width photography of a coffee plantation at golden hour. Left: eyebrow + serif heading + paragraph + gold CTA. Right: italic serif pull-quote

**Navigation** *(exact items, left to right):*

- Logo: "AROMA" wordmark with "A HIGHER STANDARD" subtext
- Nav links: Home, Shop, Collections, Discover, Sustainability, Gifts
- Right icons: search, account, cart (with item-count badge)

**Explicitly out of scope:**

- No additional homepage sections beyond the three described above
- No animations beyond standard hover states
- No placeholder/gradient/illustration substitutes for photography — must match the mockup's real-photography style

**Acceptance Criteria:**

- Matches attached mockup composition on desktop and mobile
- Real photographic imagery in all three sections
- All sections present, in order, with copy/labels as listed above
- Nav matches exactly, including cart badge
- Colors/fonts match tokens stated above
- Done = rendered Preview visually matches the mockup — not just "compiles"
- PR merged into integration branch and visible in Studio Preview before considered complete — a green "Done" status alone is not sufficient confirmation

**Attachment:** attach the ARÔMA homepage mockup image directly to this ticket (required — this is the only way it reaches the hire's vision input)

*ChatGPT Image Sep 7, 2026, 01_27_23 PM.png*
## Rules
- Read `.vpods/FRONTEND_AGENT.md` (frontend), `.vpods/PROJECT.md`, `.vpods/CRAFT_*.md` (packed craft grammar), `.vpods/DESIGN_PACK.md` when present, and Brand Kit when present before writing code.
- Stay on this ticket's lane. Do not rewrite sibling hire pages/APIs unless required for integration.
- Ship a complete artifact for this shape — not a stub or question.
- Frontend: replicate attached mockups under `public/design-refs/` (composition, photography, bands). Labels on the mockup are direction, not a copy deck.
