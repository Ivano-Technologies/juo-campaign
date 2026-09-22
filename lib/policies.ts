/**
 * Prosperity Agenda policy themes. These are manifesto policy sectors,
 * not Brand pillars. Do not rename them to Service / Competence / Integrity /
 * Opportunity / Unity, and do not invent Ten Commandments copy here.
 */
export const policiesPageTitle =
  "Policies | Prosperity Agenda themes, John Upan Odey Jnr";

export const policiesPageDescription =
  "Prosperity Agenda policy themes for Cross River 2027 under John Upan Odey Jnr: power, agriculture, jobs, education, healthcare, infrastructure, tourism, transparency, local prosperity, and inclusive governance.";

export const policiesHubTitle = "Policy themes for a productive Cross River";
export const policiesHubBody = [
  "These are Prosperity Agenda policy themes for Cross River 2027 under A Fresh Start: One People, One Cross River. They are manifesto policy sectors, not the five Brand pillars.",
] as const;
export const policiesHubImportant =
  "Important: Full commitment language will come only from the approved manifesto PDF. This hub does not invent programmes, funds, or promises. Brand pillars (who John stands for as a leader) live on The Vision. Each theme links to the Manifesto page for PDF status.";

export const policiesTenTitle = "Policy themes";

export const policiesNotOldTitle = "Not Brand pillars";
export const policiesNotOldBody =
  "Brand pillars are five: Service, Competence, Integrity, Opportunity, and Unity. They describe who John stands for as a leader and live on The Vision. The themes above are policy sectors. This site does not use WordPress demo six-pillar labels.";

export const policySectors = [
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

export type PolicySector = (typeof policySectors)[number];

const policySectorCount: 10 = policySectors.length;
void policySectorCount;
