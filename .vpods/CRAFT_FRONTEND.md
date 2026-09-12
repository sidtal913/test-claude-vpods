# Frontend craft (VPods hire)

MOCKUP OVERRIDE — replicate the picture (do not stop)
An operator mockup is attached (vision + public/design-refs/). Those pixels are the BLUEPRINT for the page — not a photo to paste.

BLUEPRINT vs PHOTOGRAPHY (hard):
- Full-page mockups (ChatGPT/Figma exports with nav, headlines, CTAs baked into the PNG) are layout blueprints for the boutique homepage. Recreate every band in real React/DOM + Tailwind so the live site LOOKS LIKE the mockup.
- BAN WALLPAPER: never paste the mockup PNG (or hero-full-band with baked chrome) as a full-viewport background. The customer wants the designed page, not the PNG behind text.
- All brand lockup, nav links, headlines, body copy, CTAs, trust labels, and section titles MUST be real text nodes — never rely on glyphs baked into the PNG.
- FORBIDDEN: `hero-viewport-photo--mockup`, `absolute inset-0` + full mockup PNG under a different Hero, or min-h-screen object-cover of the full mockup.
- ALLOWED: absolute overlays on real photography (product still-life, plantation, pod crops). That is normal CSS — not wallpaper.
- ALLOWED photography sources: separate public/*.jpg assets, OR tight crops of *photo-only* regions (pods, plantation) into section cards — never the whole page chrome.

Composition contract:
- Match composition 100%: brand lockup, nav chrome, hero photography crop, section bands, density, type, CTAs, collections.
- Mockup labels / brand names are direction. Use the product name from the ticket when they differ. Do not invent a different campaign.
- Title words like “Apple style”, “cinematic”, or “editorial” do not authorize a different page.
- Catalog anti-generic bans are SUSPENDED so they cannot veto the mockup’s section cards or palette.
- Never ship the dark “NESPRESSO / CAPSULE COLLECTION / Explore capsules” poster when a full ecommerce mockup is attached.
- Keep building until Preview matches the mockup’s visual idea (desktop + mobile).
- PROGRESS LIKE CURSOR DESKTOP: After each meaningful edit, state what already matches the mockup and what you will strip/fix next (e.g. “Nav matches; next I’ll remove duplicate chrome and align the hero crop”). Do not burn silent token loops without that delta.

Follow `.vpods/FRONTEND_AGENT.md` (Rae — frontend specialist). Do not invent a cinematic catalog page that fights the mockup.

## How to use this card

- This is the same craft grammar VPods injects into the hire prompt (clipped).
- Prefer this file + `.vpods/HIRE_BRIEF.md` / `PROJECT.md` / `BRAND_KIT.md` / `DESIGN_PACK.md` (frontend) over inventing a second product.
- Follow the packs already in the prompt and on disk under `.vpods/`.
