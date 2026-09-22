import { canonicalOrigin } from "@/lib/site";

export const archibongPath = "/odey-archibong" as const;
export const archibongPageUrl = `${canonicalOrigin}${archibongPath}` as const;

export const archibongPageTitle =
  "TWO JOURNEYS. ONE PURPOSE. ONE CROSS RIVER.";

export const archibongPageDescription =
  "John Upan Odey and Apostle Dr. Stella Charles Archibong bring together decades of professional experience, public leadership and community service, united by a shared commitment to the people of Cross River.";

export const archibongTitle = "TWO JOURNEYS. ONE PURPOSE. ONE CROSS RIVER.";
export const archibongLede = archibongPageDescription;

export const archibongBody = [
  "From banking, business and institutional leadership to community service, humanitarian work and public engagement, their journeys have been shaped by one enduring principle: leadership is about service.",
  "Odey brings a wealth of experience in finance, business strategy and institutional management, with a vision focused on economic opportunity, accountable governance, healthcare, education and infrastructure.",
  "Archibong brings a deep record of community engagement, humanitarian service and leadership, with a particular commitment to vulnerable people and inclusive development.",
  "Together, they present a vision of One Cross River- a state where every citizen and every community has the opportunity to thrive.",
] as const;

export const archibongCloseLead = "A FRESH START.";
export const archibongCloseLockup = "ONE PEOPLE. ONE CROSS RIVER.";

/** Brand paste only. Render as text, no invented social URLs. */
export const archibongHashtags = [
  "#OdeyArchibong2027",
  "#AFreshStart",
  "#OnePeopleOneCrossRiver",
] as const;
