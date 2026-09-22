/**
 * Brand Architect (Chris) SEO lock via Kezie 2026-09-22 (IVA-48).
 * Homepage <title>, meta description, OG, and Twitter must match these
 * strings exactly. Do not “fix” Governorship (title) vs gubernatorial
 * (description). Do not drop the title’s trailing period. Do not shorten
 * the name to “John Odey” or “JUO” in these tags.
 */
export const brandSeoTitle =
  "John Upan Odey | NDC Governorship Candidate for Cross River State." as const;

export const brandSeoDescription =
  "Official website of John Upan Odey, NDC gubernatorial candidate for Cross River State. Explore his vision, manifesto, policies, biography, and campaign updates." as const;

/** Per-route titles append after the Brand base. Homepage stays exact. */
export function pageSeoTitle(page: string): string {
  return `${page} | ${brandSeoTitle}`;
}
