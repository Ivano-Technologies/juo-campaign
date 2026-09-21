import { education, site } from "@/lib/site";
import { mediaBase, placeholderById } from "@/lib/placeholders";

export const campaignHashtag = "#OurTimeOurState";

export const circularMark = `${mediaBase}/Frame-1171274791.png`;
export const voteBadge = `${mediaBase}/vote2-removebg-preview.png`;

export const heroSlides = [
  {
    src: `${mediaBase}/Group-1171274746.png`,
    alt: "John Upan Odey with clergy, community leaders and supporters at a Cross River gathering",
    kicker: "JOHN UPAN ODEY",
    kickerClass: "text-cyan",
    title: "BUILDING OPPORTUNITIES\nFOR EVERY\nCROSS RIVERIAN",
    lede: "",
    align: "right",
    captionY: "end",
    objectClass: "object-[center_38%]",
  },
  {
    src: `${mediaBase}/3370015E-218A-48B2-8B5E-29D8F4450A6C_11zon.webp`,
    alt: "John Upan Odey seated with young people in a Cross River classroom",
    kicker: "JOHN UPAN ODEY",
    kickerClass: "text-cyan",
    title: "A NEW VISION\nFOR A STRONGER\nCROSS RIVER",
    lede: "",
    align: "right",
    captionY: "end",
    objectClass: "object-center",
  },
  {
    src: `${mediaBase}/787657CB-F514-46F6-8681-CD05DA7AEF84-1_11zon.webp`,
    alt: "Winding highland road through green Cross River hills",
    kicker: "OUR TIME, OUR STATE",
    kickerClass: "text-cyan",
    title: "CROSS RIVER\nCAN DO BETTER",
    lede: "…through jobs, innovation and opportunity for every young person.",
    align: "right",
    captionY: "center",
    objectClass: "object-center",
    overlay: {
      src: `${mediaBase}/9C79A72F-DCCC-4AEB-9F19-428670710578-Background-Removed.png`,
      alt: "John Upan Odey Jnr smiling in a striped campaign shirt",
      wrapClass:
        "absolute bottom-0 left-[-4%] z-[1] h-[92%] w-[52%] sm:left-0 sm:w-[44%]",
    },
  },
  {
    src: `${mediaBase}/E9BA618D-2E0A-4F15-A893-E86858069DA0-1_11zon.webp`,
    alt: "Welcome to Cross River — The Nation’s Paradise monument against a blue sky",
    kicker: "THE NEXT CHAPTER",
    kickerClass: "text-brand-white",
    title: "NOT JUST A BETTER\nCROSS RIVER\nA GREATER ONE",
    lede: "…built on opportunity, innovation and shared prosperity.",
    align: "left",
    captionY: "center",
    objectClass: "object-center",
    overlay: {
      src: `${mediaBase}/D992271D-2B3E-45B2-A598-C63843DD7C18-Background-Removed.png`,
      alt: "John Upan Odey Jnr in a navy suit",
      wrapClass:
        "absolute right-[2%] bottom-0 z-[1] h-[95%] w-[48%] sm:right-[6%] sm:w-[40%]",
    },
  },
  {
    src: `${mediaBase}/AFA4FC12-2414-4B4E-A96D-62B98BD104D2-1_11zon.webp`,
    alt: "Crowd forming the words A NEW CRS around the elephant at Cross River National Park",
    kicker: "ENOUGH OF WHAT IS",
    kickerClass: "text-brand-white",
    title: "LET'S BUILD WHAT\nCAN BE",
    lede: campaignHashtag.toUpperCase(),
    align: "left",
    captionY: "center",
    objectClass: "object-center",
    overlay: {
      src: `${mediaBase}/79769D2E-4947-401C-A754-2487319076F8_11zon-Background-Removed.png`,
      alt: "John Upan Odey Jnr standing with arms crossed",
      wrapClass:
        "absolute right-[-2%] bottom-0 z-[1] h-[92%] w-[50%] sm:right-[4%] sm:w-[38%]",
    },
    vote: true,
    signature: "John Upan Odey",
  },
] as const;

export const heroStats = [
  { value: 5, suffix: "M+", label: "Citizens", icon: "people" },
  { value: 18, suffix: "", label: "Local Government Areas", icon: "briefcase" },
  { value: 20, suffix: "", label: "Median Age", icon: "leaf" },
] as const;

export const statsBackdrop = `${mediaBase}/814EA178-8DCD-4369-9FD7-D94EE6904D49_11zon.webp`;

/**
 * WP 2×2 challenge tiles. The live site duplicates the youth line in the
 * fourth cell; Kezie asked to keep that 2×2 framing (not the concatenated
 * “disconnected” copy bug).
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

export const challengesCutout = placeholderById("challenges-cutout");

export const togetherCompare = {
  before: {
    src: "/media/together/destination-cross-river-monument-day.webp",
    alt: "Daytime Destination Cross River monument — The Nation’s Paradise, lawn and tiled walkway",
  },
  after: {
    src: "/media/together/destination-cross-river-monument-night.webp",
    alt: "Night vision of the Destination Cross River monument with buses, drones, and a prosperous-future board",
  },
} as const;

export const opportunityCards = [
  {
    title: "Tourism",
    body: "World-class destinations, rich heritage, and untapped opportunities that can drive jobs and economic growth.",
    image: placeholderById("vision-tourism"),
  },
  {
    title: "Agriculture",
    body: "Fertile land and hardworking farmers positioned to feed the nation and power local industries.",
    image: placeholderById("vision-agriculture"),
  },
  {
    title: "Youth talent",
    body: "A young, energetic population ready to innovate, create, and lead the future.",
    image: placeholderById("vision-youth-talent"),
  },
  {
    title: "Culture",
    body: "A vibrant identity rooted in diversity, creativity, and traditions celebrated across the world.",
    image: placeholderById("vision-culture"),
  },
  {
    title: "Technology",
    body: "Digital innovation that can transform governance, education, business, and everyday life.",
    image: placeholderById("vision-technology"),
  },
  {
    title: "Strategic location",
    body: "A gateway to regional trade, investment, tourism, and economic expansion.",
    image: placeholderById("vision-strategic-location"),
  },
] as const;

export const homePillars = [
  {
    number: "01",
    title: "Economic Transformation",
    lead: "Jobs, skills, entrepreneurship and innovation.",
    body: "Creating opportunities for young people through startup funding, technology hubs, creative industries and tourism development.",
    tone: "navy",
  },
  {
    number: "02",
    title: "Agriculture Revolution",
    lead: "Turning agriculture into a modern engine for prosperity.",
    body: "Supporting farmers, agro-processing and rural enterprise across all districts.",
    tone: "blue",
  },
  {
    number: "03",
    title: "Education For The Future",
    lead: "Preparing students for the economy of tomorrow.",
    body: "Smart schools, technical education and digital learning.",
    tone: "red",
  },
  {
    number: "04",
    title: "Infrastructure & Connectivity",
    lead: "Roads, markets, and digital links that connect farms and families.",
    body: "From Calabar to Obudu, every local government deserves a path to market.",
    tone: "navyDeep",
  },
  {
    number: "05",
    title: "Healthcare & Social Protection",
    lead: "Accessible healthcare and stronger support systems.",
    body: "Clinics, care, and protection for families and vulnerable communities.",
    tone: "blueDeep",
  },
  {
    number: "06",
    title: "Governance Reform",
    lead: "Open budgets. Transparent contracts. Citizen participation.",
    body: "Accountable government that Cross Riverians can see and measure.",
    tone: "maroon",
  },
] as const;

export const futureBackdrop = `${mediaBase}/5F0EB210-D0AB-4146-8029-EBEF2AC63C00_11zon.webp`;

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

export const futureInitiatives = [
  {
    title: "Youth Skills & Startup Fund",
    body: "Training, funding and mentorship for the next generation of entrepreneurs.",
    kind: "text",
  },
  {
    title: "Tourism 2.0",
    body: "Unlocking the economic potential of Obudu, Ikom, Boki, Calabar and beyond.",
    kind: "photo",
    image: placeholderById("vision-tourism"),
  },
  {
    title: "Tourism 2.0",
    body: "Unlocking the economic potential of Obudu, Ikom, Boki, Calabar and beyond.",
    kind: "text",
  },
  {
    title: "Smart Schools Initiative",
    body: "Digital classrooms and future-ready education for Cross Riverians.",
    kind: "photo",
    image: placeholderById("vision-youth-talent"),
  },
  {
    title: "Featured Initiatives",
    body: "Smart schools, technical education and a public dashboard Cross Riverians can actually use.",
    kind: "label",
  },
  {
    title: "Citizens Dashboard",
    body: "Track projects, monitor budgets and hold government accountable.",
    kind: "photo",
    image: placeholderById("vision-technology"),
  },
] as const;

export const meetPortrait = placeholderById("meet-cutout-3");

export const meetCutouts = [
  placeholderById("meet-cutout-1"),
  placeholderById("meet-cutout-2"),
  placeholderById("meet-cutout-3"),
] as const;

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

export const footerBlurb =
  "Cross River stands at a defining moment. Together, we can unlock our state’s immense potential, create opportunities for every citizen, and build a future rooted in prosperity, accountability, and shared progress.";
