import { canonicalOrigin, site } from "@/lib/site";

export const visionPath = "/vision" as const;
export const visionLegacyPath = "/the-vision" as const;
export const visionPageUrl = `${canonicalOrigin}${visionPath}` as const;

export const visionPageTitle =
  "The Vision | A Fresh Start — One People, One Cross River";

export const visionPageDescription =
  "John Upan Odey Jnr’s vision for Cross River 2027: A Fresh Start. One People, One Cross River. We produce. We process. We prosper.";

export const visionHeadline =
  "A Fresh Start — One People, One Cross River";

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
