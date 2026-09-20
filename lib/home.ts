import { education, site } from "@/lib/site";
import { placeholderById } from "@/lib/placeholders";

export const campaignHashtag = "#OurTimeOurState";

export const heroStats = [
  { value: 5, suffix: "M+", label: "Citizens" },
  { value: 18, suffix: "", label: "Local Government Areas" },
  { value: 20, suffix: "", label: "Median Age" },
] as const;

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
    body: "Jobs, skills, entrepreneurship and innovation. Creating opportunities for young people through startup funding, technology hubs, creative industries and tourism development.",
  },
  {
    number: "02",
    title: "Agriculture Revolution",
    body: "Turning agriculture into a modern engine for prosperity. Supporting farmers, agro-processing and rural enterprise across all districts.",
  },
  {
    number: "03",
    title: "Education For The Future",
    body: "Preparing students for the economy of tomorrow. Smart schools, technical education and digital learning.",
  },
  {
    number: "04",
    title: "Infrastructure & Connectivity",
    body: "Roads, markets, and digital links that connect farms and families in every local government — from Calabar to Obudu.",
  },
  {
    number: "05",
    title: "Healthcare & Social Protection",
    body: "Accessible healthcare and stronger support systems for families and vulnerable communities.",
  },
  {
    number: "06",
    title: "Governance Reform",
    body: "Open budgets. Transparent contracts. Citizen participation. Accountable government.",
  },
] as const;

export const futureStats = [
  { value: "10,000+", label: "New jobs" },
  { value: "500+", label: "Startups" },
  { value: "FOR US", label: "A future built" },
] as const;

export const futureHighlights = [
  "Every ward has functional healthcare",
  "Schools are digitally connected",
  "Roads connect communities and markets",
  "Government spending is transparent",
] as const;

export const futureInitiatives = [
  {
    title: "Youth Skills & Startup Fund",
    body: "Training, funding and mentorship for the next generation of entrepreneurs.",
  },
  {
    title: "Tourism 2.0",
    body: "Unlocking the economic potential of Obudu, Ikom, Boki, Calabar and beyond.",
  },
  {
    title: "Smart Schools Initiative",
    body: "Digital classrooms and future-ready education for Cross Riverians.",
  },
  {
    title: "Citizens Dashboard",
    body: "Track projects, monitor budgets and hold government accountable.",
  },
] as const;

export const meetCutouts = [
  placeholderById("meet-cutout-1"),
  placeholderById("meet-cutout-2"),
  placeholderById("meet-cutout-3"),
] as const;

export const meetEducationLine = education
  .map((item) => `${item.school} (${item.credential})`)
  .join(" · ");

export const meetBio = [
  `${site.name} is a professional with more than 25 years across finance, fintech, infrastructure finance, public-sector transformation, and digital innovation.`,
  "He believes governance should be driven by competence, transparency, and measurable results — a practical Fresh Start, not politics as usual.",
  "Our state has the talent. What we need are the systems, leadership, and opportunities that allow our people to thrive.",
] as const;
