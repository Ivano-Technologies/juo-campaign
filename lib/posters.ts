import { brand } from "@/lib/brand";
import { pageSeoTitle } from "@/lib/brand-seo";

export const postersPath = "/posters" as const;

export const postersPageTitle = pageSeoTitle("Official Posters");

export const postersPageDescription =
  "Official John Upan Odey Jnr campaign posters and branded portraits. Approved Brand designs only. No stock, AI, or unapproved imagery.";

const baPosterSize = {
  width: 1241,
  height: 1754,
} as const;

const brandedPortraitSize = {
  width: 1086,
  height: 1448,
} as const;

/** Kezie branded portraits — honest caption only. Do not invent slogans. */
export const officialBrandedPortraits = [
  {
    id: "juo-branded-1",
    src: "/brand/juo-branded-1.jpg",
    width: brandedPortraitSize.width,
    height: brandedPortraitSize.height,
    title: "Official branded portrait",
    alt: "Official branded portrait of John Upan Odey Jnr in patterned traditional attire and a red cap, facing camera.",
  },
  {
    id: "juo-branded-2",
    src: "/brand/juo-branded-2.jpg",
    width: brandedPortraitSize.width,
    height: brandedPortraitSize.height,
    title: "Official branded portrait",
    alt: "Official branded portrait of John Upan Odey Jnr in white traditional attire and a red cap, facing camera.",
  },
  {
    id: "juo-branded-3",
    src: "/brand/juo-branded-3.jpg",
    width: brandedPortraitSize.width,
    height: brandedPortraitSize.height,
    title: "Official branded portrait",
    alt: "Official branded portrait of John Upan Odey Jnr in traditional attire and glasses, looking up.",
  },
  {
    id: "juo-branded-4",
    src: "/brand/juo-branded-4.jpg",
    width: 1058,
    height: 1486,
    title: "Official branded portrait",
    alt: "Official branded portrait of John Upan Odey Jnr in a dark suit, glasses, and a red and navy striped tie.",
  },
] as const;

/**
 * BA Fresh Start red-cap poster (ba-poster-a-fresh-start.png) is reserved —
 * removed from live home + /posters per Kezie. Other BA posters stay.
 */
export const officialPosters = [
  {
    id: "ba-poster-cross-river-rising",
    src: "/brand/ba-poster-cross-river-rising.png",
    width: baPosterSize.width,
    height: baPosterSize.height,
    title: "Cross River Rising",
    alt: "Official campaign poster: Cross River Rising, a New Cross River is Possible. John Upan Odey Jnr for Governor, Cross River State 2027.",
  },
  {
    id: "ba-poster-one-people-one-cross-river",
    src: "/brand/ba-poster-one-people-one-cross-river.png",
    width: baPosterSize.width,
    height: baPosterSize.height,
    title: "One People, One Cross River",
    alt: "Official campaign poster: One People One Cross River, every community matters. John Upan Odey Jnr for Governor, Cross River State 2027.",
  },
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
export type OfficialBrandedPortrait = (typeof officialBrandedPortraits)[number];
