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
    title: "BUILDING OPPORTUNITIES FOR EVERY CROSS RIVERIAN",
    lede: "",
  },
  {
    src: `${mediaBase}/F6FA4786-A1FE-415C-9980-199A9F25ACEF_11zon.webp`,
    alt: "John Upan Odey Jnr walking with supporters at a Cross River campaign gathering",
    kicker: "JOHN UPAN ODEY",
    title: "CROSS RIVERIAN",
    lede: "",
  },
  {
    src: `${mediaBase}/JUO-IMAGES_11zon-1.webp`,
    alt: "John Upan Odey Jnr greeting delegates at an NDC gathering",
    kicker: "CROSS RIVER",
    title: "CAN DO BETTER",
    lede: "…through jobs, innovation and opportunity for every young person.",
  },
  {
    src: `${mediaBase}/AFA4FC12-2414-4B4E-A96D-62B98BD104D2_11zon.webp`,
    alt: "Crowd forming the words A NEW CRS at Cross River National Park",
    kicker: "THE NEXT CHAPTER",
    title: "NOT JUST A BETTER CROSS RIVER — A GREATER ONE",
    lede: "",
  },
  {
    src: `${mediaBase}/FB_IMG_1782401363465.jpg`,
    alt: "John Upan Odey with community members in a Cross River village",
    kicker: "JOHN UPAN ODEY",
    title: campaignHashtag,
    lede: "",
  },
] as const;

export const heroStats = [
  { value: 5, suffix: "M+", label: "Citizens", icon: "people" },
  { value: 18, suffix: "", label: "Local Government Areas", icon: "briefcase" },
  { value: 20, suffix: "", label: "Median Age", icon: "leaf" },
] as const;

export const statsBackdrop = `${mediaBase}/814EA178-8DCD-4369-9FD7-D94EE6904D49_11zon.webp`;

/** Three unique WP challenges — duplicates from the live site are not ported. */
export const challenges = [
  {
    title: "Youth opportunity",
    body: "For too long, young people have struggled to find opportunities.",
  },
  {
    title: "Declining trust",
    body: "Public trust in governance has declined.",
  },
  {
    title: "Disconnected communities",
    body: "Communities remain disconnected.",
  },
] as const;

export const challengesCutout = placeholderById("challenges-cutout");

export const togetherCompare = {
  before: placeholderById("together-collage-1"),
  after: placeholderById("together-collage-2"),
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
    tone: "navy",
  },
  {
    number: "05",
    title: "Healthcare & Social Protection",
    lead: "Accessible healthcare and stronger support systems.",
    body: "Clinics, care, and protection for families and vulnerable communities.",
    tone: "blue",
  },
  {
    number: "06",
    title: "Governance Reform",
    lead: "Open budgets. Transparent contracts. Citizen participation.",
    body: "Accountable government that Cross Riverians can see and measure.",
    tone: "red",
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
