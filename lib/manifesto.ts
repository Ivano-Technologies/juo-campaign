import { pageSeoTitle } from "@/lib/brand-seo";

/** Null until the approved manifesto PDF is delivered. */
export const manifestoPdfHref: string | null = null;

export const manifestoPageTitle = pageSeoTitle("Manifesto");

export const manifestoPageDescription =
  "Eight approved manifesto pillars, THE TEN COMMITMENTS TO CROSS RIVERIANS, and Brand excerpts for the John Upan Odey Jnr manifesto. A Fresh Start for Cross River. PDF when published.";

export const manifestoHeroLede =
  "Eight approved policy pillars and THE TEN COMMITMENTS TO CROSS RIVERIANS. Brand excerpts until the manifesto PDF is published.";

export const manifestoPillarsTitle = "Eight manifesto pillars";
export const manifestoPillarsIntro =
  "Approved policy pillars for A Fresh Start. These are manifesto sectors — not the five Brand values (Service, Competence, Integrity, Opportunity, Unity) and not THE TEN COMMITMENTS TO CROSS RIVERIANS.";

export const manifestoPillars = [
  {
    number: "01",
    title: "POWER FIRST — ENDING THE DARKNESS ECONOMY",
    slug: "power-first",
    blurb:
      "Reliable energy is the foundation of a productive Cross River: for homes, farms, clinics, schools, and enterprise. A Fresh Start treats power as a first-order condition for growth.",
  },
  {
    number: "02",
    title: "WEALTH THROUGH AGRICULTURE — FROM FARMS TO FACTORIES",
    slug: "wealth-through-agriculture",
    blurb:
      "Cross River’s land and farmers can anchor shared wealth when production is valued and connected to markets. This pillar frames agriculture as a path to prosperity for communities across the state.",
  },
  {
    number: "03",
    title: "INFRASTRUCTURE THAT CREATES WEALTH",
    slug: "infrastructure-that-creates-wealth",
    blurb:
      "Roads, connectivity, and enabling works unlock farms, tourism, trade, and daily life. This pillar frames infrastructure as the backbone of growth, not spectacle.",
  },
  {
    number: "04",
    title: "HEALTHCARE CLOSE TO HOME",
    slug: "healthcare-close-to-home",
    blurb:
      "Health underpins dignity and productivity. This pillar frames access to quality care as essential for families in Calabar, Obudu, and every LGA.",
  },
  {
    number: "05",
    title: "EDUCATION, SKILLS & THE 50,000 JOBS PLAN",
    slug: "education-skills-the-50000-jobs-plan",
    blurb:
      "Education and skills prepare young people, and workers already in the economy, for useful work in a changing Cross River. This pillar frames learning as a productive-state investment, with enterprise that can start, scale, and stay.",
  },
  {
    number: "06",
    title: "TOURISM, CULTURE & THE CREATIVE ECONOMY",
    slug: "tourism-culture-the-creative-economy",
    blurb:
      "Cross River’s hospitality, culture, and natural assets can sustain year-round opportunity beyond a single season. This pillar frames tourism and the creative economy as a broader productive story for the state.",
  },
  {
    number: "07",
    title: "TRANSPARENT & DIGITAL GOVERNMENT",
    slug: "transparent-digital-government",
    blurb:
      "Public trust grows when government is open, accountable, and clear about how resources are used. This pillar frames transparency and digital government as a standard of Fresh Start governance.",
  },
  {
    number: "08",
    title: "CLIMATE RESILIENCE, ENVIRONMENT & SUSTAINABLE DEVELOPMENT",
    slug: "climate-resilience-environment-sustainable-development",
    blurb:
      "We will protect our environment while creating green economic opportunities.",
  },
] as const;

export type ManifestoPillar = (typeof manifestoPillars)[number];

const manifestoPillarCount: 8 = manifestoPillars.length;
void manifestoPillarCount;

export const tenCommitmentsTitle = "THE TEN COMMITMENTS TO CROSS RIVERIANS";
export const tenCommitmentsIntro =
  "Ten commitments to the people of Cross River. Distinct from the eight manifesto policy pillars and from the five Brand values.";

export const tenCommitments = [
  {
    number: "01",
    title: "A Productive Economy",
    body: "We will move Cross River from a consumption-based economy to a production and processing economy.",
  },
  {
    number: "02",
    title: "Reliable Power",
    body: "We will tackle electricity challenges because no economy grows in darkness.",
  },
  {
    number: "03",
    title: "Agricultural Transformation",
    body: "We will ensure our farmers become producers, processors and shareholders in the value chain.",
  },
  {
    number: "04",
    title: "Jobs Through Enterprise",
    body: "We will create opportunities for young people through technology, agriculture, tourism, manufacturing and entrepreneurship.",
  },
  {
    number: "05",
    title: "Quality Healthcare",
    body: "We will strengthen healthcare from the ward level upward because a healthy population is the foundation of prosperity.",
  },
  {
    number: "06",
    title: "Modern Education and Skills",
    body: "We will prepare our children and young people for the economy of the future.",
  },
  {
    number: "07",
    title: "Infrastructure for Growth",
    body: "We will prioritize roads and infrastructure that create economic value.",
  },
  {
    number: "08",
    title: "Tourism Beyond Carnival",
    body: "We will transform tourism from a seasonal event into a year-round economic industry.",
  },
  {
    number: "09",
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

export const manifestoExcerptsTitle = "Approved excerpts";

export const manifestoExcerpts = [
  {
    title: "ONE PEOPLE- ONE CROSS RIVER:",
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
      "The future of Cross River should be something its people build, not something they wait for. - ODEY-ARCHIBONG 2027",
    ],
  },
] as const;

export const manifestoDownloadTitle = "Download status";
export const manifestoDownloadStatus =
  "PDF download: Gated, awaiting approved manifesto file.";

/** Spoken/readout text uses Brand excerpts only, not a fake PDF. */
export const manifestoPlaceholderScript = [
  manifestoExcerpts[0].title,
  ...manifestoExcerpts[0].paragraphs,
  manifestoExcerpts[1].title,
  ...manifestoExcerpts[1].paragraphs,
  manifestoExcerpts[2].title,
  ...manifestoExcerpts[2].paragraphs,
  "The approved manifesto PDF is not published yet.",
].join(" ");
