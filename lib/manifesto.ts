import { site } from "@/lib/site";

/** Null until IVA-17 delivers the approved manifesto PDF. */
export const manifestoPdfHref: string | null = null;

export const manifestoPlaceholderLabel =
  "Placeholder until the approved manifesto PDF (IVA-17) is published.";

export const manifestoPlaceholderScript = [
  `${site.name}. ${site.office}. ${site.election}.`,
  `${site.tagline}. ${site.unityLine}.`,
  site.prosperityLine,
  site.agenda,
  "The full ten commitments and policy detail will replace this readout when the campaign manifesto PDF is approved. This page does not invent policy claims.",
].join(" ");
