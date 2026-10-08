import { pageSeoTitle } from "@/lib/brand-seo";

export const newsPageTitle = pageSeoTitle("News");

export const newsPageDescription =
  "Official news and updates from John Upan Odey’s Cross River 2027 NDC campaign, including the Southern Senatorial District chapter chairmen meeting, the ICAP Foundation Fellow announcement, and community updates.";

export const newsroomTitle = "Campaign newsroom";
export const newsroomBody = [
  "The official newsroom of John Upan Odey’s Cross River 2027 campaign: stories, speeches, press releases and media.",
] as const;

export const newsReadyTitle = "Stay ready";
export const newsReadyLinks = [
  { href: "/join", label: "Join the Movement for alerts" },
  { href: "/contact", label: "Follow updates on official campaign channels" },
  { href: "/vision", label: "Read The Vision" },
] as const;
