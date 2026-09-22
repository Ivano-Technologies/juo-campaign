import { pageSeoTitle } from "@/lib/brand-seo";

export const repsPageTitle = pageSeoTitle("Meet Your Reps");

export const repsPageDescription =
  "Campaign representatives and coordinators for John Upan Odey Jnr across Cross River. Slate and LGA contacts will be announced with official campaign updates.";

export const repsFacesTitle = "One people: local faces of the movement";
export const repsFacesBody = [
  "A Fresh Start is built ward by ward and LGA by LGA. This page will list campaign representatives and coordinators so Cross Riverians can find trusted local contacts for organising, voter education, and community outreach.",
  "Names, photos, and contact details will appear only when the campaign announces them through official updates. Nothing here invents a slate.",
] as const;

export const repsFindTitle = "What you will find here (when announced)";
export const repsFindItems = [
  "State and LGA coordinators",
  "Ward-level contacts where published",
  "How to verify that a person speaks for the campaign",
  "Links to Join and Contact for volunteers still being placed",
] as const;

export const repsDirectoryTitle = "Directory status";
export const repsDirectoryStatus = "Reps announced with campaign updates.";
export const repsDirectoryEmpty =
  "The directory is empty by design until Brand publishes confirmed names. Check /news and official campaign channels for announcements.";

export const repsServeTitle = "Want to serve locally?";
export const repsServeBody =
  "If you want to volunteer as a coordinator or organiser in your LGA, from Calabar to Obudu and every community in between, register on Join the Movement. Placement and public listing follow campaign process, not this placeholder.";

export const repsFilterRoles = [
  "Any role",
  "State coordinator",
  "LGA coordinator",
  "Ward contact",
] as const;
