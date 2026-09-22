import { brand } from "@/lib/brand";
import { brandPillars } from "@/lib/brand-pillars";
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
/**
 * Brand paste used an em dash after "natural resources".
 * Scrub (Brand AI-dash lock): `resources — ensuring` → `resources, ensuring`.
 * Meaning unchanged. Flagged in the PR body.
 */
export const visionOfficialMission =
  "To usher in A Fresh Start through transparent, accountable, and people-centred governance that creates an enabling environment for enterprise, expands economic opportunity, stimulates job creation, strengthens communities, and unlocks the productive potential of our human and natural resources, ensuring that prosperity is shared and no community or citizen is left behind.";

export const visionWhyTitle = "Why this vision";
export const visionWhyBody = [
  "Cross River is one people. Division does not build roads, power homes, or create lasting jobs. A Fresh Start means choosing unity of purpose across LGAs, generations, and communities so the state’s real strengths in people, land, culture, and location can work for everyone.",
  "This page carries the Brand spine for the campaign. The five Brand pillars say who John stands for as a leader. Detailed policy commitments belong in the approved manifesto; they are not these Brand pillars.",
] as const;

export const visionAgendaTitle = "Approved manifesto excerpts";
export const visionAgendaNote =
  "Brand excerpts until the manifesto PDF is published. Full commitments wait on that file.";

export {
  brandPillarsIntro as visionPillarsIntro,
  brandPillarsTitle as visionPillarsTitle,
} from "@/lib/brand-pillars";

export const visionPillars = brandPillars;
export type VisionPillar = (typeof visionPillars)[number];

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
