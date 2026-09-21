import { canonicalOrigin, site } from "@/lib/site";

export const visionPath = "/vision" as const;
export const visionLegacyPath = "/the-vision" as const;
export const visionPageUrl = `${canonicalOrigin}${visionPath}` as const;

export const visionPageTitle =
  "The Vision | A Fresh Start — One People, One Cross River";

export const visionPageDescription =
  "John Upan Odey Jnr’s vision for Cross River 2027: A Fresh Start. One People, One Cross River. We produce. We process. We prosper.";

export const visionHeadlineLead = "A Fresh Start —";
export const visionHeadlineLockup = "One People, One Cross River";
export const visionHeadline =
  `${visionHeadlineLead} ${visionHeadlineLockup}` as const;

export const visionOrbitBackdrop = "/vision/destination-cross-river.webp";
export const visionOrbitAccent = "/vision/a-new-crs.webp";

/** Brand spine only — no invented pillar policy (IVA-17). */
export const visionPillarSpineLine =
  `${site.tagline}. ${site.unityLine}. ${site.prosperityLine}` as const;
export const visionManifestoCta = "Full commitments in the Manifesto";

/** Brand-audit pillar names only — no body until the manifesto (IVA-17). */
export const visionPillars = [
  "Power First",
  "Wealth Through Agriculture",
  "Jobs Through Enterprise",
  "Modern Education & Skills",
  "Quality Healthcare",
  "Infrastructure for Growth",
  "Tourism Beyond Carnival",
  "Transparent Government",
  "Local Prosperity",
  "Inclusive Governance",
] as const;

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
