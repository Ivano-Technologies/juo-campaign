import { pageSeoTitle } from "@/lib/brand-seo";

export const newsPageTitle = pageSeoTitle("News");

export const newsPageDescription =
  "Official news and updates from John Upan Odey Jnr’s Cross River 2027 NDC campaign, including the ICAP Foundation Fellow announcement and Brand community posts.";

export const newsroomTitle = "Campaign newsroom";
export const newsroomBody = [
  "This is the official news hub for John Upan Odey Jnr’s Cross River 2027 campaign. Only campaign-approved stories, speeches, press notes, and media will appear here.",
  "Demo or template posts from older site shells are not carried across.",
] as const;

export const newsReadyTitle = "Stay ready";
export const newsReadyLinks = [
  { href: "/join", label: "Join the Movement for alerts" },
  { href: "/contact", label: "Follow updates on official campaign channels" },
  { href: "/vision", label: "Read The Vision" },
] as const;
