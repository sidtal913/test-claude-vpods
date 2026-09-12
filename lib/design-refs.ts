/**
 * Photo-only crops sourced from the mockup blueprint at
 * /design-refs/ChatGPT-Image-Sep-7-2026-01_27_23-PM.png
 *
 * These paths wire section photography to design-refs assets.
 * Full mockup PNG is reference only — never used as a page wallpaper.
 */
export const MOCKUP_BLUEPRINT =
  "/design-refs/ChatGPT-Image-Sep-7-2026-01_27_23-PM.png";

export const designRefPhotos = {
  hero: "/design-refs/hero-marble-crop.jpg",
  sustainability: "/design-refs/sustainability-plantation-crop.jpg",
  collections: {
    signature: "/design-refs/collection-signature-crop.jpg",
    singleOrigin: "/design-refs/collection-single-origin-crop.jpg",
    espressoIntenso: "/design-refs/collection-espresso-intenso-crop.jpg",
    flavored: "/design-refs/collection-flavored-crop.jpg",
  },
} as const;
