/**
 * Mockup blueprint at public/design-refs/ — layout reference only.
 * Runtime photography is served from /images/ (photo-only crops).
 * Never render the full PNG or design-refs paths as a viewport wallpaper.
 */
export const MOCKUP_BLUEPRINT =
  "/design-refs/ChatGPT-Image-Sep-7-2026-01_27_23-PM.png";

/** Section photography (photo-only crops derived from blueprint, served via /images/) */
export const sectionPhotos = {
  hero: "/images/hero-marble.jpg",
  sustainability: "/images/sustainability-plantation.jpg",
  collections: {
    signature: "/images/collection-signature.jpg",
    singleOrigin: "/images/collection-single-origin.jpg",
    espressoIntenso: "/images/collection-espresso-intenso.jpg",
    flavored: "/images/collection-flavored.jpg",
  },
} as const;
