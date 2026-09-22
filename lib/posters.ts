import { brand } from "@/lib/brand";

export const postersPath = "/posters" as const;

export const postersPageTitle =
  "Official Posters | John Upan Odey Jnr, Cross River 2027";

export const postersPageDescription =
  "Official John Upan Odey Jnr campaign posters. Approved Brand designs only. No stock, AI, or unapproved imagery.";

export const officialPosters = [
  {
    id: "official-poster-1",
    src: brand.marks.officialPoster,
    width: 2174,
    height: 2892,
    title: "A Fresh Start: One People, One Cross River",
    alt: "Official campaign poster: A Fresh Start, One People One Cross River. John Upan Odey Jnr for Governor with Dr Stella Charles Archibong for Deputy Governor.",
  },
] as const;

/**
 * Brand pack PDFs (Blue / White / Poster 4 / Poster 5) were not in the
 * web raster drop. Do not invent stand-ins — wait for rasterized files.
 */
export const pendingPosterRasterizations = [
  { id: "blue", label: "Official poster: Blue" },
  { id: "white", label: "Official poster: White" },
  { id: "poster-4", label: "Official poster 4" },
  { id: "poster-5", label: "Official poster 5" },
] as const;

export type OfficialPoster = (typeof officialPosters)[number];
