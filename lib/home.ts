import { brand } from "@/lib/brand";
import { education, site } from "@/lib/site";

export const campaignHashtag = "#OurTimeOurState";

export const officialPortrait = brand.portraits.official;

/** Kezie (IVA-45): keep exactly these 3 slides. The two John-portrait slides are gone. */
export const heroSlides = [
  {
    src: "/media/2026/787657CB-F514-46F6-8681-CD05DA7AEF84-1_11zon.webp",
    alt: "Winding highland road through green Cross River hills",
    kicker: brand.sloganLead,
    kickerClass: "text-brand-white",
    title: "ONE PEOPLE,\nONE CROSS RIVER",
    lede: "",
    align: "right",
    captionY: "center",
    objectClass: "object-center",
  },
  {
    src: "/media/2026/E9BA618D-2E0A-4F15-A893-E86858069DA0-1_11zon.webp",
    alt: "Welcome to Cross River: The Nation’s Paradise monument against a blue sky",
    kicker: "THE NEXT CHAPTER",
    kickerClass: "text-brand-white",
    title: "NOT JUST A BETTER\nCROSS RIVER\nA GREATER ONE",
    lede: "…built on opportunity, innovation and shared prosperity.",
    align: "left",
    captionY: "center",
    objectClass: "object-center",
  },
  {
    src: "/media/2026/AFA4FC12-2414-4B4E-A96D-62B98BD104D2-1_11zon.webp",
    alt: "Crowd forming the words A NEW CRS around the elephant at Cross River National Park",
    kicker: "ENOUGH OF WHAT IS",
    kickerClass: "text-brand-white",
    title: "LET'S BUILD WHAT\nCAN BE",
    lede: campaignHashtag.toUpperCase(),
    align: "left",
    captionY: "center",
    objectClass: "object-center",
    signature: "John Upan Odey",
  },
] as const;

const heroSlideCount: 3 = heroSlides.length;
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
 * IVA-46 Kezie lock: numbered strip stays blue + white type.
 * 01–03 primary Royal Blue; 04–06 same hue, one shade deeper.
 */
export const homePillars = [
  {
    number: "01",
    title: "Economic Transformation",
    lead: "Jobs, skills, entrepreneurship and innovation.",
    body: "Creating opportunities for young people through startup funding, technology hubs, creative industries and tourism development.",
    tone: "primary",
  },
  {
    number: "02",
    title: "Agriculture Revolution",
    lead: "Turning agriculture into a modern engine for prosperity.",
    body: "Supporting farmers, agro-processing and rural enterprise across all districts.",
    tone: "primary",
  },
  {
    number: "03",
    title: "Education For The Future",
    lead: "Preparing students for the economy of tomorrow.",
    body: "Smart schools, technical education and digital learning.",
    tone: "primary",
  },
  {
    number: "04",
    title: "Infrastructure & Connectivity",
    lead: "Roads, markets, and digital links that connect farms and families.",
    body: "From Calabar to Obudu, every local government deserves a path to market.",
    tone: "deep",
  },
  {
    number: "05",
    title: "Healthcare & Social Protection",
    lead: "Accessible healthcare and stronger support systems.",
    body: "Clinics, care, and protection for families and vulnerable communities.",
    tone: "deep",
  },
  {
    number: "06",
    title: "Governance Reform",
    lead: "Open budgets. Transparent contracts. Citizen participation.",
    body: "Accountable government that Cross Riverians can see and measure.",
    tone: "deep",
  },
] as const;

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
