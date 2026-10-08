import { pageSeoTitle } from "@/lib/brand-seo";

/** Approved manifesto PDF is live for Preview (IVA-17). */
export const manifestoPdfHref: string | null =
  "/media/manifesto-john-upan-odey.pdf";

export const manifestoPageTitle = pageSeoTitle("Manifesto");

export const manifestoPageDescription =
  "The manifesto of John Upan Odey: nine policy pillars and Ten Commitments to Cross Riverians for A Fresh Start.";

export const manifestoHeroLede =
  "Nine policy pillars and Ten Commitments to the people of Cross River.";

export const manifestoPillarsTitle = "Nine manifesto pillars";
export const manifestoPillarsIntro =
  "Nine policy pillars that set out how A Fresh Start will deliver for Cross River.";

export const manifestoPillars = [
  {
    number: "01",
    title: "PILLAR ONE: POWER FIRST, ENDING THE DARKNESS ECONOMY",
    slug: "power-first",
    blurb:
      "Reliable energy is the foundation of a productive Cross River: for homes, farms, clinics, schools, and enterprise. A Fresh Start treats power as an essential condition for growth.",
  },
  {
    number: "02",
    title: "PILLAR TWO: WEALTH THROUGH AGRICULTURE, FROM FARMS TO FACTORIES",
    slug: "wealth-through-agriculture",
    blurb:
      "Cross River’s land and farmers can anchor shared wealth when production is valued and connected to markets. We will make agriculture a path to prosperity for communities across the state.",
  },
  {
    number: "03",
    title: "PILLAR THREE: INFRASTRUCTURE THAT CREATES WEALTH",
    slug: "infrastructure-that-creates-wealth",
    blurb:
      "Roads, connectivity, and enabling works unlock farms, tourism, trade, and daily life. We will invest in infrastructure as the backbone of growth.",
  },
  {
    number: "04",
    title: "PILLAR FOUR: HEALTHCARE CLOSE TO HOME",
    slug: "healthcare-close-to-home",
    blurb:
      "Health underpins dignity and productivity. We will bring quality care within reach of families in Calabar, Obudu and every Local Government Area.",
  },
  {
    number: "05",
    title: "PILLAR FIVE: EDUCATION, SKILLS & THE 50,000 JOBS PLAN",
    slug: "education-skills-the-50000-jobs-plan",
    blurb:
      "Education and skills prepare young people, and workers already in the economy, for useful work in a changing Cross River. We will treat learning as an investment in a productive state, with enterprises that can start, grow and stay in Cross River.",
  },
  {
    number: "06",
    title: "PILLAR SIX: TOURISM, CULTURE & THE CREATIVE ECONOMY",
    slug: "tourism-culture-the-creative-economy",
    blurb:
      "Cross River’s hospitality, culture, and natural assets can sustain opportunity all year round, beyond a single season. We will grow tourism and the creative economy into a major source of jobs for the state.",
  },
  {
    number: "07",
    title: "PILLAR SEVEN: TRANSPARENT & DIGITAL GOVERNMENT",
    slug: "transparent-digital-government",
    blurb:
      "Public trust grows when government is open, accountable, and clear about how resources are used. Transparency and digital government will be the standard of Fresh Start governance.",
  },
  {
    number: "08",
    title: "PILLAR EIGHT: CLIMATE RESILIENCE, ENVIRONMENT & SUSTAINABLE DEVELOPMENT",
    slug: "climate-resilience-environment-sustainable-development",
    blurb:
      "We will protect our environment while creating green economic opportunities.",
  },
  {
    number: "09",
    title: "PILLAR NINE: SECURITY AS A FOUNDATION FOR PROSPERITY",
    slug: "security-as-a-foundation-for-prosperity",
    headline: "WE WILL BUILD / A CROSS RIVER WHERE / SECURITY IS NOT / A PRIVILEGE",
    blurb:
      "Because the security of Cross River is not only about stopping crime. It is about protecting life, livelihood, dignity and opportunity.",
  },
] as const;

export type ManifestoPillar = (typeof manifestoPillars)[number];

const manifestoPillarCount: 9 = manifestoPillars.length;
void manifestoPillarCount;

/** BA slash-separated lines are stacked headlines, not displayed punctuation. */
export function manifestoStackedHeadline(
  pillar: ManifestoPillar,
): string | null {
  if (!("headline" in pillar) || !pillar.headline) {
    return null;
  }
  return pillar.headline.split(" / ").join("\n");
}

export const tenCommitmentsTitle = "THE TEN COMMITMENTS TO CROSS RIVERIANS";
export const tenCommitmentsIntro =
  "Ten commitments to the people of Cross River.";

export const tenCommitments = [
  {
    number: "1",
    title: "A Productive Economy",
    body: "We will move Cross River from an economy based on consumption to a production and processing economy.",
  },
  {
    number: "2",
    title: "Reliable Power",
    body: "We will tackle electricity challenges because no economy grows in darkness.",
  },
  {
    number: "3",
    title: "Agricultural Transformation",
    body: "We will ensure our farmers become producers, processors and shareholders in the value chain.",
  },
  {
    number: "4",
    title: "Jobs Through Enterprise",
    body: "We will create opportunities for young people through technology, agriculture, tourism, manufacturing and entrepreneurship.",
  },
  {
    number: "5",
    title: "Quality Healthcare",
    body: "We will strengthen healthcare from the ward level upward because a healthy population is the foundation of prosperity.",
  },
  {
    number: "6",
    title: "Modern Education and Skills",
    body: "We will prepare our children and young people for the economy of the future.",
  },
  {
    number: "7",
    title: "Infrastructure for Growth",
    body: "We will prioritize roads and infrastructure that create economic value.",
  },
  {
    number: "8",
    title: "Tourism Beyond Carnival",
    body: "We will transform tourism from a seasonal event into an all year round economic industry.",
  },
  {
    number: "9",
    title: "Transparent Government",
    body: "Every naira must have a purpose, every project must have accountability, and every citizen must have access to information.",
  },
  {
    number: "10",
    title: "Sustainable Development",
    body: "We will protect our environment while creating green economic opportunities.",
  },
] as const;

export type TenCommitment = (typeof tenCommitments)[number];

const tenCommitmentCount: 10 = tenCommitments.length;
void tenCommitmentCount;

export const manifestoDownloadLabel = "Click to Download Manifesto";

export const manifestoExcerptsTitle = "From the Manifesto";

export const manifestoExcerpts = [
  {
    title: "ONE PEOPLE, ONE CROSS RIVER:",
    paragraphs: [
      "Cross River is more than North, Central or South. It is one people, with one shared future.",
      "From Calabar to Ogoja, from Ikom to Bakassi, the challenges may look different, but the aspirations are deeply connected: better roads, meaningful opportunities, stronger communities and an economy that allows people to build dignified lives.",
      "A Fresh Start is not just a slogan but presents a vision of Cross River where geography does not determine opportunity and where no community or citizen is left behind. It is built around the principle that development should reach every local government, every ward and every community.",
    ],
  },
  {
    title: "FROM WHAT WE HAVE TO WHAT WE CAN BECOME:",
    paragraphs: [
      "Cross River already has what it needs to create a stronger economy: fertile land, extraordinary tourism assets, deep cultural heritage and hardworking people.The challenge is turning these resources into sustained economic opportunity.",
      "A Fresh Start places emphasis on unlocking the productive capacity of the state, connecting farmers to markets, developing tourism, creating pathways for enterprise and equipping young people with opportunities in technology, agriculture, business and the wider economy.",
      "The vision is simple: To build a Cross River where the wealth of the land and the talent of its people translate into opportunity, dignity and prosperity.",
      "We will produce. We will process. We will prosper.",
    ],
  },
  {
    title: "THE CROSS RIVER WE LEAVE FOR TOMORROW:",
    paragraphs: [
      "Every generation deserves more than promises about tomorrow. It deserves the opportunity to shape tomorrow.",
      "For young Cross Riverians, the aspiration is not simply to participate in political conversations, but to participate in building the economy and institutions that will shape their future.",
      "A Fresh Start describes a model in which young people can contribute their creativity, ideas and expertise through policy development, community engagement, enterprise, technology and agriculture.",
      "It is a vision of a state where hard work is rewarded, vulnerable people are protected, young people can pursue meaningful opportunities, and every community has a place in Cross River's future.",
      "The future of Cross River should be something its people build, not something they wait for.",
      "ODEY-ARCHIBONG 2027",
    ],
  },
] as const;
