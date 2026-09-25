/**
 * Brand values (exactly five). Who John stands for as a leader.
 * Not the eight manifesto policy pillars and not THE TEN COMMITMENTS.
 * Do not add a sixth.
 */
export const brandPillarsTitle = "Our Brand Pillars";
export const brandPillarsIntro =
  "Five Brand values. Who John stands for as a leader — Service, Competence, Integrity, Opportunity, Unity.";

export const brandPillars = [
  {
    number: "01",
    name: "Service",
    slug: "service",
    lead: "Leadership that puts people first.",
    body: "Public service, humility, and responsibility, with Cross Riverians’ interests ahead of personal politics.",
    tone: "primary",
  },
  {
    number: "02",
    name: "Competence",
    slug: "competence",
    lead: "Leadership that knows how to get things done.",
    body: "Finance, fintech, infrastructure finance, public-sector transformation, and digital innovation: competence that gets things done.",
    tone: "primary",
  },
  {
    number: "03",
    name: "Integrity",
    slug: "integrity",
    lead: "Leadership people can trust.",
    body: "Transparency, accountability, responsible use of public resources, openness, and ethical leadership. A government you can see, question and hold accountable.",
    tone: "primary",
  },
  {
    number: "04",
    name: "Opportunity",
    slug: "opportunity",
    lead: "Leadership that unlocks people’s potential.",
    body: "Opportunity for every Cross Riverian, especially young people.",
    tone: "deep",
  },
  {
    number: "05",
    name: "Unity",
    slug: "unity",
    lead: "Leadership that brings Cross River together.",
    body: "Every district and every community matters. The good of Cross River, not North, South, or Central alone. Inclusion, shared identity, shared prosperity. One Cross River.",
    tone: "deep",
  },
] as const;

export type BrandPillar = (typeof brandPillars)[number];

const brandPillarCount: 5 = brandPillars.length;
void brandPillarCount;
