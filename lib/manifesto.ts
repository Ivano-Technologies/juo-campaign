import { site } from "@/lib/site";

/** Null until IVA-17 delivers the approved manifesto PDF. */
export const manifestoPdfHref: string | null = null;

export const manifestoPageTitle =
  "Manifesto | John Upan Odey Jnr — Cross River 2027";

export const manifestoPageDescription =
  "The campaign manifesto for John Upan Odey Jnr — A Fresh Start for Cross River. Prosperity Agenda 2027–2031. PDF and full readout when published.";

export const manifestoDownloadLabel = "Manifesto PDF — coming when published";

export const manifestoComingTitle = "Coming with the approved PDF";
export const manifestoComingBody = [
  "The official manifesto for John Upan Odey Jnr’s Cross River 2027 NDC campaign will be published here as an approved PDF with a clear web readout.",
  "This page is an interim shell on purpose. It does not invent policy text, commitment lists, budgets, or programme detail. When the approved manifesto PDF is published, this route becomes the home for download and summary.",
] as const;

export const manifestoCarryTitle = "What the manifesto will carry";
export const manifestoCarryIntro =
  "When published, expect the Brand spine in full:";
export const manifestoCarryItems = [
  site.tagline,
  site.unityLine,
  site.prosperityLine,
  "Ten Commitments — in the approved PDF only",
  site.agenda,
] as const;
export const manifestoCarryClose =
  "Until then, explore the vision themes and join the movement so you hear first when the PDF goes live.";

export const manifestoDownloadTitle = "Download status";
export const manifestoDownloadStatus =
  "PDF download: Gated — awaiting approved manifesto file.";

export const manifestoMeanwhileTitle = "Meanwhile";
export const manifestoMeanwhileLinks = [
  { href: "/vision", label: "Read The Vision" },
  { href: "/policies", label: "Browse pillar themes" },
  { href: "/john-upan-odey", label: "Meet the candidate" },
  { href: "/join", label: "Join for release updates" },
] as const;

/** Spoken/readout text is the published spine only — not a fake PDF excerpt. */
export const manifestoPlaceholderScript = [
  `${site.name}. ${site.office}. ${site.election}.`,
  `${site.tagline}. ${site.unityLine}.`,
  site.prosperityLine,
  site.agenda,
  "The approved manifesto PDF is not published yet. This page does not invent policy claims.",
].join(" ");
