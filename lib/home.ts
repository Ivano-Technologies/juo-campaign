import { brand } from "@/lib/brand";
import { education, site } from "@/lib/site";

export const campaignHashtag = "#OurTimeOurState";

export const officialPortrait = brand.portraits.official;

/** Per-slide caption lockups. Hero maps these to flex alignment. */
export type HeroCaptionAlign = "left" | "center" | "right";
export type HeroCaptionY = "top" | "center" | "bottom";

/**
 * IVA-93: Brand-treated homepage stills (4). Supersedes the IVA-45
 * three-slide lock now that Chris delivered print-resolution hero art.
 * Vertical 1920×2713 WebP — object-cover with per-slide crop bias.
 *
 * IVA-95 caption framing: sit writeups in the cleanest region of each
 * still (avoid pale sky, pale monument lettering, busy flag stripes).
 * Outline is Royal Blue only — see `.hero-caption-outline`.
 */
export const heroSlides = [
  {
    src: "/media/2026/hero-still-1-monument.webp",
    alt: "Destination Cross River roundabout monument, The Nation’s Paradise, under a blue sky",
    kicker: "THE NEXT CHAPTER",
    kickerClass: "text-brand-white",
    title: "NOT JUST A BETTER\nCROSS RIVER\nA GREATER ONE",
    lede: "…built on opportunity, innovation and shared prosperity.",
    // Still 1 — monument. Restored pre-#106 order (captions stay bound
    // to this still). PASS lock from #103 / 909f121: bottom-left over
    // carved plinth + lawn. object-[center_68%] — do not use the tighter
    // Destination crops (28% etc). Do not swap with the flags slide.
    align: "left",
    captionY: "bottom",
    objectClass: "object-[center_68%]",
  },
  {
    src: "/media/2026/hero-still-2-flags.webp",
    alt: "Rows of Cross River blue, white, and blue flags on a lawn",
    kicker: brand.sloganLead,
    kickerClass: "text-brand-white",
    title: "ONE PEOPLE,\nONE CROSS RIVER",
    lede: "",
    // Still 2 — flags. Bottom-right over lawn/trees (clear of stripes).
    // Do not swap with the monument slide.
    align: "right",
    captionY: "bottom",
    objectClass: "object-center",
  },
  {
    src: "/media/2026/hero-still-3-memorial.webp",
    alt: "Landscaped memorial garden with a white pillar and cannon under a blue sky",
    kicker: "ENOUGH OF WHAT IS",
    kickerClass: "text-brand-white",
    title: "LET'S BUILD WHAT\nCAN BE",
    lede: campaignHashtag.toUpperCase(),
    // Lower-left over hedges/lawn. IVA-93 lock: object-[center_30%] so the
    // cannon stays in the upper-right of the desktop frame. Do not nudge
    // toward 46% — that crops the cannon out. Contrast is the Royal Blue
    // outline + bottom-left garden lockup, not a deeper crop.
    align: "left",
    captionY: "bottom",
    objectClass: "object-[center_30%]",
    signature: "John Upan Odey",
  },
  {
    src: "/media/2026/hero-still-4-arch.webp",
    alt: "Stone park entrance arch with a bull-head sculpture on a road through green Cross River hills",
    kicker: "A FRESH START",
    kickerClass: "text-brand-white",
    title: campaignHashtag.toUpperCase(),
    lede: "One People, One Cross River",
    // Still 4 — arch. Restored pre-#106 order (captions stay bound to
    // this still). Caption bottom-center on the road (IVA-95 PASS lock).
    // Crop at 36% so the bull horns/head on the arch beam stay fully in
    // frame — 50% clipped the sculpture at the top.
    align: "center",
    captionY: "bottom",
    objectClass: "object-[center_36%]",
  },
] as const;

/** IVA-93: Brand delivered 4 treated stills for the homepage hero. */
const heroSlideCount: 4 = heroSlides.length;
void heroSlideCount;

/**
 * Homepage glance counters. Only ship stats with a verified volume.
 * WP's empty Citizens (0M+) placeholder is omitted — do not invent a replacement.
 * Published values must appear in the first HTML (crawl-safe), not only after JS.
 */
export const heroStats = [
  { value: 18, suffix: "", label: "Local Government Areas", icon: "briefcase" },
  { value: 20, suffix: "", label: "Median Age", icon: "leaf" },
] as const;

export type HeroStat = (typeof heroStats)[number];

export function isPublishedHeroStat(stat: { value: number }): boolean {
  return Number.isFinite(stat.value) && stat.value > 0;
}

/**
 * WP 2×2 challenge tiles. The live site duplicates the youth line in the
 * fourth cell; keep that 2×2 framing (not the concatenated “disconnected”
 * copy bug).
 */
export const challenges = [
  {
    id: "youth-1",
    title: "Youth opportunity",
    body: "For too long, young people have struggled to find opportunities.",
  },
  {
    id: "trust",
    title: "Declining trust",
    body: "Public trust in governance has declined.",
  },
  {
    id: "communities",
    title: "Disconnected communities",
    body: "Communities remain disconnected.",
  },
  {
    id: "youth-2",
    title: "Youth opportunity",
    body: "For too long, young people have struggled to find opportunities.",
  },
] as const;

export const opportunityCards = [
  {
    title: "Tourism",
    body: "World-class destinations, rich heritage, and untapped opportunities that can drive jobs and economic growth.",
  },
  {
    title: "Agriculture",
    body: "Fertile land and hardworking farmers positioned to feed the nation and power local industries.",
  },
  {
    title: "Youth talent",
    body: "A young, energetic population ready to innovate, create, and lead the future.",
  },
  {
    title: "Culture",
    body: "A vibrant identity rooted in diversity, creativity, and traditions celebrated across the world.",
  },
  {
    title: "Technology",
    body: "Digital innovation that can transform governance, education, business, and everyday life.",
  },
  {
    title: "Strategic location",
    body: "A gateway to regional trade, investment, tourism, and economic expansion.",
  },
] as const;

/**
 * IVA-46 BA lock: five Brand pillars only (not policy sectors).
 * Numbered strip stays blue + white type.
 * 01–03 primary Royal Blue; 04–05 same hue, one shade deeper.
 */
export { brandPillars as homePillars } from "@/lib/brand-pillars";

export const futureHighlights = [
  "Schools are digitally connected",
  "Roads connect communities and markets",
  "Government spending is transparent",
  "10,000+ new jobs have been created",
  "Every ward has functional healthcare",
  "Young founders can build here",
] as const;

/** Campaign words only — never the WP “DEVELOPER” demo remnant. */
export const futureCyclerWords = ["SECURE", "AWESOME", "FOR US"] as const;

export const meetEducationLine = education
  .map((item) => `${item.school} (${item.credential})`)
  .join(" · ");

export const meetBio = [
  `A professional with over 25 years of experience across Finance, Fintech, Infrastructure Finance, Public Sector Transformation, and Digital Innovation.`,
  `${site.name} believes governance should be driven by competence, transparency and measurable results.`,
  "Rather than politics as usual, he offers a practical vision for a New Cross River.",
] as const;

export const meetQuote =
  "Our state has the talent. What we need are the systems, leadership and opportunities that allow our people to thrive.";

export const challengesLockup = [
  { word: "I", emphasis: false },
  { word: "Come", emphasis: false },
  { word: "To", emphasis: false },
  { word: "Serve", emphasis: true },
] as const;

export const togetherHeadline = "A Fresh Start";
export const togetherSubhead = "One People, One Cross River";

export const footerBlurb =
  "A Fresh Start for Cross River: one people, one Cross River, putting service to the people at the centre of governance, together.";
