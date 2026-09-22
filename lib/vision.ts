import { brand } from "@/lib/brand";
import { canonicalOrigin, site } from "@/lib/site";

export const visionPath = "/vision" as const;
export const visionLegacyPath = "/the-vision" as const;
export const visionPageUrl = `${canonicalOrigin}${visionPath}` as const;

export const visionPageTitle =
  "The Vision | A Fresh Start: One People, One Cross River";

export const visionPageDescription =
  "To build One Cross River- united in purpose, inclusive in opportunity, and resilient in prosperity; a state where every citizen, every community, and every generation has the opportunity to thrive, contribute, and fulfil its potential.";

export const visionHeadlineLead = "A Fresh Start";
export const visionHeadlineLockup = "One People, One Cross River";
export const visionHeadline =
  `${visionHeadlineLead}: ${visionHeadlineLockup}` as const;

export const visionHeroEyebrow = "The Vision";
export const visionHeroSubhead = site.prosperityLine;
export const visionHeroBody =
  "To build One Cross River- united in purpose, inclusive in opportunity, and resilient in prosperity; a state where every citizen, every community, and every generation has the opportunity to thrive, contribute, and fulfil its potential.";

export const visionHeroCtas = [
  { href: "/manifesto", label: "Read the Manifesto" },
  { href: "/odey-archibong", label: "Odey Archibong" },
  { href: "/join", label: "Join the Movement" },
  { href: "/john-upan-odey", label: "Who is John Upan Odey Jnr" },
] as const;

export const visionOfficialTitle = "Official Vision and Mission";
export const visionOfficialVisionLabel = "VISION";
export const visionOfficialVision =
  "To build One Cross River- united in purpose, inclusive in opportunity, and resilient in prosperity; a state where every citizen, every community, and every generation has the opportunity to thrive, contribute, and fulfil its potential.";
export const visionOfficialMissionLabel = "MISSION";
/** Brand em dash normalised to a comma. Meaning unchanged. */
export const visionOfficialMission =
  "To usher in A Fresh Start through transparent, accountable, and people-centred governance that creates an enabling environment for enterprise, expands economic opportunity, stimulates job creation, strengthens communities, and unlocks the productive potential of our human and natural resources, ensuring that prosperity is shared and no community or citizen is left behind.";

export const visionWhyTitle = "Why this vision";
export const visionWhyBody = [
  "Cross River is one people. Division does not build roads, power homes, or create lasting jobs. A Fresh Start means choosing unity of purpose across LGAs, generations, and communities so the state’s real strengths in people, land, culture, and location can work for everyone.",
  "This page carries the Brand spine for the campaign. Detailed commitments belong in the approved manifesto. Until that PDF is published, what follows frames the Prosperity Agenda and the ten Brand pillars as themes, not invented policies.",
] as const;

export const visionAgendaTitle = site.agenda;
export const visionAgendaBody = [
  "The Prosperity Agenda 2027–2031 is the campaign’s productive-state frame: we produce, we process, we prosper. It points Cross River toward an economy that adds value at home, opens fair opportunity, and treats public trust as non-negotiable.",
  "The full Agenda and the ten Commitments will appear in the official manifesto when Brand publishes it. This page does not invent that list.",
] as const;

export const visionPillarsTitle = "Ten Brand pillars";
export const visionPillarsIntro =
  "Each pillar below is theme framing only. Commitment text waits on the manifesto.";

export const visionWalkTitle = "Walk with the movement";
export const visionWalkBody =
  "Whether you live in Cross River or in the diaspora, you can follow the campaign, join the movement, and stay ready for the manifesto release.";

export const visionWalkCtas = [
  { href: "/join", label: "Join" },
  { href: "/diaspora-connect", label: "Diaspora Connect" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const visionShareHashtags = [
  "#AFreshStart",
  "#OnePeople",
  "#OneCrossRiver",
  "#OdeyArchibong2027",
  "#VoteOdeyArchibong2027",
  "#JUO2027",
] as const;

export const visionOgImage = brand.marks.officialPoster;

/** Brand spine only — no invented pillar policy. */
export const visionOrbitUnityLine =
  `${site.tagline}. ${site.unityLine}.` as const;
export const visionOrbitProsperityLine = site.prosperityLine;
export const visionPillarSpineLine =
  `${site.tagline}. ${site.unityLine}. ${site.prosperityLine}` as const;
export const visionManifestoCta = "Read the full Manifesto";

export const visionPillars = [
  {
    name: "Power First",
    slug: "power-first",
    blurb:
      "Reliable energy is the foundation of a productive Cross River: for homes, farms, clinics, schools, and enterprise. A Fresh Start treats power as a first-order condition for growth.",
  },
  {
    name: "Wealth Through Agriculture",
    slug: "wealth-through-agriculture",
    blurb:
      "Cross River’s land and farmers can anchor shared wealth when production is valued and connected to markets. This pillar frames agriculture as a path to prosperity for communities across the state.",
  },
  {
    name: "Jobs Through Enterprise",
    slug: "jobs-through-enterprise",
    blurb:
      "Jobs grow when enterprise can start, scale, and stay in Cross River. This pillar frames a climate where skills, small business, and local industry have room to create work.",
  },
  {
    name: "Modern Education & Skills",
    slug: "modern-education-skills",
    blurb:
      "Education and skills prepare young people, and workers already in the economy, for useful work in a changing Cross River. This pillar frames learning as a productive-state investment.",
  },
  {
    name: "Quality Healthcare",
    slug: "quality-healthcare",
    blurb:
      "Health underpins dignity and productivity. This pillar frames access to quality care as essential for families in Calabar, Obudu, and every LGA.",
  },
  {
    name: "Infrastructure for Growth",
    slug: "infrastructure-for-growth",
    blurb:
      "Roads, connectivity, and enabling works unlock farms, tourism, trade, and daily life. This pillar frames infrastructure as the backbone of growth, not spectacle.",
  },
  {
    name: "Tourism Beyond Carnival",
    slug: "tourism-beyond-carnival",
    blurb:
      "Cross River’s hospitality and natural assets can sustain year-round opportunity beyond a single season. This pillar frames tourism as a broader productive story for the state.",
  },
  {
    name: "Transparent Government",
    slug: "transparent-government",
    blurb:
      "Public trust grows when government is open, accountable, and clear about how resources are used. This pillar frames transparency as a standard of Fresh Start governance.",
  },
  {
    name: "Local Prosperity",
    slug: "local-prosperity",
    blurb:
      "Prosperity should be felt in wards and LGAs, not only in headlines. This pillar frames local economic life as central to One People, One Cross River.",
  },
  {
    name: "Inclusive Governance",
    slug: "inclusive-governance",
    blurb:
      "Every community deserves a voice in how Cross River is led. This pillar frames inclusive governance as unity in practice across the state.",
  },
] as const;

export type VisionPillar = (typeof visionPillars)[number];

export const visionJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: visionPageTitle,
  description: visionPageDescription,
  url: visionPageUrl,
  about: {
    "@type": "Person",
    name: site.name,
    jobTitle: site.office,
  },
} as const;
