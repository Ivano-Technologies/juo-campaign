/**
 * IVA-45 imagery inventory. Live routes may only wire official Brand assets
 * plus the three Kezie-kept hero slides.
 */

export const officialAssetsWired = [
  {
    path: "/brand/juo-official-3.jpg",
    role: "Brand 22 Sep preferred official portrait: traditional attire, facing camera (Challenges / I COME TO SERVE).",
  },
  {
    path: "/brand/candidate-mark-1.png",
    role: "JO monogram — compact nav and Challenges mark",
  },
  {
    path: "/brand/candidate-mark-2.png",
    role: "Horizontal JO lock-up — footer, Vision hero, Meet, Manifesto/Join",
  },
  {
    path: "/brand/official-poster-1.png",
    role: "Official poster — Home gallery, /posters, OG image",
  },
  {
    path: "/brand/ndc-logo.jpg",
    role: "NDC logo — Manifesto and Join only",
  },
] as const;

export const officialAssetsReserved = [
  {
    path: "/brand/juo-official-1.jpg",
    reason: "Western-suit portrait — reserved after Brand preferred trad facing camera",
  },
  {
    path: "/brand/juo-official-2.jpg",
    reason: "Traditional attire looking aside — not the facing-camera preference",
  },
  {
    path: "/brand/madam-deputy-1.jpg",
    reason: "Deputy photo — Meet Your Reps has no announced slate",
  },
  {
    path: "/brand/madam-deputy-2.jpg",
    reason: "Deputy photo — Meet Your Reps has no announced slate",
  },
] as const;

/** Circular campaign badges removed sitewide (Kezie / IVA-45). */
export const circularLogosRemoved = [
  {
    path: "/media/2026/Frame-1171274791.png",
    where: "Nav badge, footer circle, Vision hero circle",
  },
  {
    path: "/media/2026/vote2-removebg-preview.png",
    where: "Hero vote spin + Meet section circular badge",
  },
  {
    path: "/media/2026/vote-removebg-preview.png",
    where: "Unused circular vote graphic in public/media",
  },
  {
    path: "/media/2026/vote-removebg-preview-1.png",
    where: "Unused circular vote graphic in public/media",
  },
] as const;

export const unapprovedMediaRemoved = [
  "/media/2026/Frame-1171274791.png",
  "/media/2026/vote2-removebg-preview.png",
  "/media/2026/vote-removebg-preview.png",
  "/media/2026/vote-removebg-preview-1.png",
  "/media/2026/3370015E-218A-48B2-8B5E-29D8F4450A6C_11zon.webp",
  "/media/2026/Group-1171274746.png",
  "/media/2026/1F60D230-79DB-45BC-AC19-1911823C1C02-Background-Removed-Background-Removed.png",
  "/media/2026/9C79A72F-DCCC-4AEB-9F19-428670710578-Background-Removed.png",
  "/media/2026/D992271D-2B3E-45B2-A598-C63843DD7C18-Background-Removed.png",
  "/media/2026/79769D2E-4947-401C-A754-2487319076F8_11zon-Background-Removed.png",
  "/media/2026/47618FAD-5069-4350-BC38-C4278E0B58CE_11zon-Background-Removed.png",
  "/media/together/destination-cross-river-monument-day.webp",
  "/media/together/destination-cross-river-monument-night.webp",
  "/vision/destination-cross-river.webp",
  "/vision/a-new-crs.webp",
  "/placeholders/*",
] as const;

export const heroSlidesRemoved = [
  {
    title: "A NEW VISION FOR A STRONGER CROSS RIVER",
    image: "/media/2026/3370015E-218A-48B2-8B5E-29D8F4450A6C_11zon.webp",
    overlay:
      "John cutout overlay was not on this slide; group/black-shirt photo + writeup removed entirely",
  },
  {
    title: "BUILDING OPPORTUNITIES FOR EVERY CROSS RIVERIAN",
    image: "/media/2026/Group-1171274746.png",
    overlay: "Group shot + writeup removed entirely",
  },
] as const;
