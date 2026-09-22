import { brand } from "@/lib/brand";
import { canonicalOrigin } from "@/lib/site";

export const archibongPath = "/odey-archibong" as const;
export const archibongPageUrl = `${canonicalOrigin}${archibongPath}` as const;

export const archibongPageTitle =
  "Odey Archibong | Brand copy pending";

export const archibongPageDescription =
  "Official Odey Archibong story page. Biography and narrative wait on Brand. Campaign slogan: A Fresh Start. One People, One Cross River.";

export const archibongKicker = "Brand copy pending";
export const archibongTitle = "Odey Archibong";
export const archibongLede =
  "The official Odey Archibong story will be published here when Brand releases the approved biography. This route is a scaffold only.";

export const archibongBody = [
  "No biography PDF or extracted life story is in the campaign narrative lock used for this site. This page does not invent one.",
  "Until Brand publishes the approved text, the only locked public lines on this route are the campaign slogan and official hashtags.",
] as const;

export const archibongSlogan = brand.slogan;
export const archibongHashtags = brand.hashtags;
