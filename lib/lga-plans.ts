import { pageSeoTitle } from "@/lib/brand-seo";

/**
 * ODEY-ARCHIBONG 2027 OOH LGA plans.
 * Copy is locked from the approved OOH LGA plans PDF — do not invent
 * headlines or supporting lines. Designs arrive later; visualCue is a
 * placeholder label only.
 */

export const lgaPlansPath = "/lga-plans" as const;

export const lgaPlansPageTitle = pageSeoTitle("LGA Plans");

export const lgaPlansPageDescription =
  "Eighteen local government plans for Cross River under Odey Archibong 2027: A Fresh Start. One People. One Cross River. I Come To Serve.";

export const lgaPlansHeroLede =
  "Every local government has its own promise. Pick your LGA to read the board message written for your community.";

export const lgaPlansSelectLabel = "Choose your local government";

/** Consistent OOH footer lock-up on every plan card (exact PDF wording). */
export const lgaPlanFooterLockup = [
  "ODEY-ARCHIBONG 2027",
  "A FRESH START",
  "ONE PEOPLE. ONE CROSS RIVER.",
  "I COME TO SERVE.",
] as const;

export type LgaPlan = {
  slug: string;
  name: string;
  headline: string;
  supportingLine: string;
  /** Placeholder cue for future design art — not public marketing copy. */
  visualCue: string;
};

export const lgaPlans = [
  {
    slug: "abi",
    name: "Abi",
    headline: "ABI, YOUR FARM MUST FEED YOUR FAMILY, NOT JUST THE MARKET.",
    supportingLine: "Better roads. Better markets. Better livelihoods.",
    visualCue: "Farming communities",
  },
  {
    slug: "akamkpa",
    name: "Akamkpa",
    headline: "AKAMKPA DESERVES ROADS THAT CONNECT OPPORTUNITY.",
    supportingLine: "Let our farms, communities and businesses move forward.",
    visualCue: "Roads and opportunity",
  },
  {
    slug: "akpabuyo",
    name: "Akpabuyo",
    headline: "AKPABUYO MUST PROSPER WHERE ITS PEOPLE LIVE.",
    supportingLine: "Better infrastructure. Stronger livelihoods. A Fresh Start.",
    visualCue: "Local prosperity",
  },
  {
    slug: "bakassi",
    name: "Bakassi",
    headline: "BAKASSI IS NOT FORGOTTEN.",
    supportingLine: "Secure communities. Stronger livelihoods. Shared prosperity.",
    visualCue: "Coastal communities",
  },
  {
    slug: "bekwarra",
    name: "Bekwarra",
    headline: "BEKWARRA DESERVES THE BASICS THAT WORK.",
    supportingLine: "Roads. Water. Healthcare. Opportunity.",
    visualCue: "Basics that work",
  },
  {
    slug: "biase",
    name: "Biase",
    headline: "BIASE FEEDS CROSS RIVER. LET'S PROTECT ITS FARMERS.",
    supportingLine: "Resilient communities. Better agriculture. Better incomes.",
    visualCue: "Farming communities",
  },
  {
    slug: "boki",
    name: "Boki",
    headline: "BOKI'S COCOA SHOULD CREATE BOKI'S WEALTH.",
    supportingLine: "Better roads. Agro-processing. More jobs at home.",
    visualCue: "Cocoa",
  },
  {
    slug: "calabar-municipal",
    name: "Calabar Municipal",
    headline: "CALABAR MUST WORK FOR EVERYONE.",
    supportingLine: "Cleaner streets. Better infrastructure. More opportunities.",
    visualCue: "Urban infrastructure",
  },
  {
    slug: "calabar-south",
    name: "Calabar South",
    headline: "CALABAR SOUTH DESERVES TO LIVE ABOVE THE FLOODS.",
    supportingLine: "Better drainage. Better communities. A Fresh Start.",
    visualCue: "Urban infrastructure",
  },
  {
    slug: "etung",
    name: "Etung",
    headline: "ETUNG HAS MORE TO OFFER, AND OUR PEOPLE MUST BENEFIT.",
    supportingLine: "Agriculture. Trade. Jobs. Opportunity.",
    visualCue: "Agriculture and trade",
  },
  {
    slug: "ikom",
    name: "Ikom",
    headline: "IKOM SHOULD BE A COMMERCIAL POWERHOUSE.",
    supportingLine: "Better connectivity. Stronger businesses. More jobs.",
    visualCue: "Commerce and connectivity",
  },
  {
    slug: "obanliku",
    name: "Obanliku",
    headline: "OBANLIKU'S BEAUTY SHOULD CREATE PROSPERITY.",
    supportingLine: "Tourism. Agriculture. Jobs for our people.",
    visualCue: "Tourism and beauty",
  },
  {
    slug: "obubra",
    name: "Obubra",
    headline: "OBUBRA DESERVES DEVELOPMENT THAT REACHES THE FARMER.",
    supportingLine: "Better infrastructure. Better healthcare. Better opportunity.",
    visualCue: "Farming communities",
  },
  {
    slug: "obudu",
    name: "Obudu",
    headline: "OBUDU'S POTENTIAL MUST BECOME OUR PEOPLE'S PROSPERITY.",
    supportingLine: "Tourism. Agriculture. Jobs. A Fresh Start.",
    visualCue: "Mountains and tourism",
  },
  {
    slug: "odukpani",
    name: "Odukpani",
    headline: "ODUKPANI MUST BE MORE THAN A COMMUNITY WE PASS THROUGH.",
    supportingLine: "Better roads. Stronger communities. Greater opportunity.",
    visualCue: "Roads and communities",
  },
  {
    slug: "ogoja",
    name: "Ogoja",
    headline: "OGOJA MUST NO LONGER FEEL FAR FROM GOVERNMENT.",
    supportingLine: "Better roads. Better services. More opportunity.",
    visualCue: "Services and connection",
  },
  {
    slug: "yakurr",
    name: "Yakurr",
    headline: "YAKURR'S LAND. YAKURR'S CULTURE. YAKURR'S PROSPERITY.",
    supportingLine: "Agriculture. Enterprise. Tourism. Jobs.",
    visualCue: "Farming and culture",
  },
  {
    slug: "yala",
    name: "Yala",
    headline: "YALA, YOUR FUTURE MUST BE BUILT HERE.",
    supportingLine: "Better roads. Stronger agriculture. More opportunities for our youth.",
    visualCue: "Youth and agriculture",
  },
] as const satisfies readonly LgaPlan[];

export type LgaPlanSlug = (typeof lgaPlans)[number]["slug"];

export const lgaPlanSlugs: readonly LgaPlanSlug[] = lgaPlans.map(
  (plan) => plan.slug,
);

const lgaPlanBySlug = new Map<string, (typeof lgaPlans)[number]>(
  lgaPlans.map((plan) => [plan.slug, plan]),
);

export function getLgaPlan(
  slug: string,
): (typeof lgaPlans)[number] | undefined {
  return lgaPlanBySlug.get(slug);
}

export function lgaPlanPath(slug: string): `/lga-plans/${string}` {
  return `/lga-plans/${slug}`;
}

export function lgaPlanSeoTitle(name: string): string {
  return pageSeoTitle(`${name} LGA Plan`);
}

export function lgaPlanSeoDescription(plan: LgaPlan): string {
  return `${plan.headline} ${plan.supportingLine}`;
}

/** Compile-time guard: Cross River has eighteen LGAs in this OOH set. */
const lgaPlanCount: 18 = lgaPlans.length;
void lgaPlanCount;
