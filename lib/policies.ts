import { pageSeoTitle } from "@/lib/brand-seo";
import { manifestoPillars } from "@/lib/manifesto";

/**
 * Prosperity Agenda policy themes. These are the nine manifesto policy
 * pillars, not Brand values and not THE TEN COMMITMENTS TO CROSS RIVERIANS.
 */
export const policiesPageTitle = pageSeoTitle("Policies");

export const policiesPageDescription =
  "Nine approved manifesto pillars for Cross River 2027 under John Upan Odey Jnr: power, agriculture, infrastructure, healthcare, education and jobs, tourism and culture, transparent digital government, climate resilience, and security.";

export const policiesHubTitle = "Nine manifesto pillars";
export const policiesHubBody = [
  "These are the nine approved manifesto policy pillars for Cross River 2027 under A Fresh Start: One People, One Cross River. They are manifesto sectors, not the five Brand values.",
] as const;
export const policiesHubImportant =
  "Important: Full programme language will come only from the approved manifesto PDF. Brand values (who John stands for as a leader) live on The Vision. THE TEN COMMITMENTS TO CROSS RIVERIANS live on the Manifesto page, distinct from these nine pillars.";

export const policiesTenTitle = "Approved manifesto pillars";

export const policiesNotOldTitle = "Not Brand values, not the Ten Commitments";
export const policiesNotOldBody =
  "Brand values are five: Service, Competence, Integrity, Opportunity, and Unity. They describe who John stands for as a leader and live on The Vision. THE TEN COMMITMENTS TO CROSS RIVERIANS are a separate list on the Manifesto page. The nine titles above are the approved manifesto policy pillars.";

export const policySectors = manifestoPillars;

export type PolicySector = (typeof policySectors)[number];

const policySectorCount: 9 = policySectors.length;
void policySectorCount;
