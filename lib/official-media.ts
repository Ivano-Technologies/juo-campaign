/**
 * IVA-45 imagery inventory. Live routes may only wire official Brand assets
 * plus the three Kezie-kept hero slides.
 */

export const officialAssetsWired = [
  {
    path: "/brand/juo-come-to-serve-portrait-front.jpg",
    role: "Kezie/CoS lock — Challenges / I COME TO SERVE gradient front portrait (01), plus /odey-archibong John portrait and hero watermark. Not white-bg 02, BA page-1, 04 profile, or 07 close.",
  },
  {
    path: "/images/people/odey-archibong-stella-official.jpg",
    role: "Stella Archibong portrait — /odey-archibong hero watermark only (MADAM_DEPUTY_OFFICIAL, yellow head wrap).",
  },
  {
    path: "/images/people/odey-archibong-stella-official-4x5.jpg",
    role: "Stella Archibong body portrait — /odey-archibong photo stack, exact 4:5, centered, full head tie.",
  },
  {
    path: "/images/brand/jo-keyline-transparent.png",
    role: "JO keyline mark — site header nav only. No white box.",
  },
  {
    path: "/brand/juo-branded-1.jpg",
    role: "Kezie branded portrait — Home official imagery and /posters (patterned traditional, red cap, facing camera).",
  },
  {
    path: "/brand/juo-branded-2.jpg",
    role: "Kezie branded portrait — Home official imagery and /posters (white traditional, red cap, facing camera).",
  },
  {
    path: "/brand/juo-branded-3.jpg",
    role: "Kezie branded portrait — Home official imagery and /posters (traditional attire, glasses, looking up).",
  },
  {
    path: "/brand/juo-branded-4.jpg",
    role: "Kezie branded suit portrait — Who is John / Meet John / profile OG, plus Home official imagery and /posters.",
  },
  {
    path: "/images/brand/jo-mark-watermark-white.png",
    role: "White single-colour JO mark — /vision hero decorative watermark only",
  },
  {
    path: "/brand/candidate-mark-1.png",
    role: "JO monogram — Challenges compact mark only (header now uses jo-keyline-transparent.png)",
  },
  {
    path: "/brand/candidate-mark-2.png",
    role: "Horizontal JO lock-up — footer (Vision hero no longer uses this mark)",
  },
  {
    path: "/brand/ba-poster-cross-river-rising.png",
    role: "BA poster — Home gallery and /posters (Cross River Rising)",
  },
  {
    path: "/brand/ba-poster-one-people-one-cross-river.png",
    role: "BA poster — Home gallery and /posters (One People, One Cross River)",
  },
  {
    path: "/brand/official-poster-1.png",
    role: "Kit poster — Home gallery, /posters, OG image",
  },
  {
    path: "/brand/community/connecting-with-cross-rivers-youth.png",
    role: "Community post — Home Campaign gallery and /news (Connecting with Cross River’s Youth)",
  },
  {
    path: "/brand/community/engagement-with-ward-leaders.png",
    role: "Community post — Home Campaign gallery and /news (Engagement with Ward Leaders)",
  },
  {
    path: "/brand/community/a-meeting-of-purpose.png",
    role: "Community post — Home Campaign gallery and /news (A Meeting of Purpose)",
  },
  {
    path: "/brand/community/ndc-cross-river-listening-tour.png",
    role: "Community post — Home Campaign gallery and /news (NDC Cross River Listening Tour)",
  },
  {
    path: "/brand/ndc-logo.jpg",
    role: "NDC logo — Manifesto and Join only",
  },
] as const;

export const officialAssetsReserved = [
  {
    path: "/brand/juo-come-to-serve-from-ba-page-1.png",
    reason: "Previous Challenges crop from BA page-1 — replaced by juo-come-to-serve-portrait-front.jpg",
  },
  {
    path: "/brand/ba-poster-a-fresh-start.png",
    reason: "BA A Fresh Start red-cap poster — removed from home + /posters per Kezie; other BA posters stay",
  },
  {
    path: "/brand/juo-official-1.jpg",
    reason: "Western-suit portrait — reserved after Brand preferred trad facing camera",
  },
  {
    path: "/brand/juo-official-2.jpg",
    reason: "Traditional attire looking aside — not the facing-camera preference",
  },
  {
    path: "/brand/juo-official-3.jpg",
    reason: "Previous Who is JUO / profile OG trad portrait — replaced by juo-branded-4.jpg",
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
