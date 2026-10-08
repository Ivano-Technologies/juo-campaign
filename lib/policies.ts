import { pageSeoTitle } from "@/lib/brand-seo";
import { manifestoPillars } from "@/lib/manifesto";

/**
 * Prosperity Agenda policy themes. These are the nine manifesto policy
 * pillars, not Brand values and not THE TEN COMMITMENTS TO CROSS RIVERIANS.
 */
export const policiesPageTitle = pageSeoTitle("Policies");

export const policiesPageDescription =
  "Nine manifesto pillars for Cross River 2027 under John Upan Odey: power, agriculture, infrastructure, healthcare, education and jobs, tourism and culture, transparent digital government, climate resilience, and security.";

export const policiesHubTitle = "Nine manifesto pillars";
export const policiesHubBody = [
  "Nine policy pillars for Cross River 2027 under A Fresh Start: One People, One Cross River.",
] as const;
export const policiesHubImportant =
  "The full programme is set out in the Manifesto, which you can download.";

export const policiesTenTitle = "The nine policy pillars";

/** Single link row after the nine pillars (site copy QA row 55). */
export const policiesLinks = [
  { href: "/vision#brand-pillars", label: "Our values" },
  { href: "/manifesto#commitments", label: "The Ten Commitments" },
  { href: "/manifesto#pillars", label: "Read the full Manifesto" },
] as const;

export const policySectors = manifestoPillars;

export type PolicySector = (typeof policySectors)[number];

const policySectorCount: 9 = policySectors.length;
void policySectorCount;
