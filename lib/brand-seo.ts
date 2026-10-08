/**
 * Brand Architect SEO lock 2026-09-22 (IVA-48).
 * Homepage <title>, meta description, OG, and Twitter must match these
 * strings exactly. Do not “fix” Governorship (title) vs gubernatorial
 * (description). Title has no trailing full stop (Kezie, site copy QA row 1, 8 Oct 2026). Do not shorten
 * the name to “John Odey” or “JUO” in these tags.
 */
export const brandSeoTitle =
  "John Upan Odey | NDC Governorship Candidate for Cross River State" as const;

export const brandSeoDescription =
  "Official website of John Upan Odey, NDC gubernatorial candidate for Cross River State. Explore his vision, manifesto, policies, biography, and campaign updates." as const;

/** Per-route titles append after the Brand base. Homepage stays exact. */
export function pageSeoTitle(page: string): string {
  return `${page} | ${brandSeoTitle}`;
}
