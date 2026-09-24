import { brand } from "@/lib/brand";
import { pageSeoTitle } from "@/lib/brand-seo";

export const postersPath = "/posters" as const;

export const postersPageTitle = pageSeoTitle("Campaign Poster Gallery");

export const postersPageDescription =
  "Official John Upan Odey Jnr campaign posters, with Odey Archibong ticket posters below. Approved Brand designs only. Portraits live on the Photo Gallery.";

const baPosterSize = {
  width: 1241,
  height: 1754,
} as const;

const brandedPortraitSize = {
  width: 1086,
  height: 1448,
} as const;

/** Branded portraits. No visible caption — alt text names the candidate. */
export const officialBrandedPortraits = [
  {
    id: "juo-branded-1",
    src: "/brand/juo-branded-1.jpg",
    width: brandedPortraitSize.width,
    height: brandedPortraitSize.height,
    alt: "John Upan Odey Jnr in patterned traditional attire and a red cap, facing camera.",
  },
  {
    id: "juo-branded-2",
    src: "/brand/juo-branded-2.jpg",
    width: brandedPortraitSize.width,
    height: brandedPortraitSize.height,
    alt: "John Upan Odey Jnr in white traditional attire and a red cap, facing camera.",
  },
  {
    id: "juo-branded-3",
    src: "/brand/juo-branded-3.jpg",
    width: brandedPortraitSize.width,
    height: brandedPortraitSize.height,
    alt: "John Upan Odey Jnr in traditional attire and glasses, looking up.",
  },
  {
    id: "juo-branded-4",
    src: "/brand/juo-branded-4.jpg",
    width: 1058,
    height: 1486,
    alt: "John Upan Odey Jnr in a dark suit, glasses, and a red and navy striped tie.",
  },
] as const;

const johnRisingPoster = {
  id: "ba-poster-cross-river-rising",
  src: "/brand/ba-poster-cross-river-rising.png",
  width: baPosterSize.width,
  height: baPosterSize.height,
  title: "Cross River Rising",
  alt: "Official campaign poster: Cross River Rising, a New Cross River is Possible. John Upan Odey Jnr for Governor, Cross River State 2027.",
} as const;

const johnOnePeoplePoster = {
  id: "ba-poster-one-people-one-cross-river",
  src: "/brand/ba-poster-one-people-one-cross-river.png",
  width: baPosterSize.width,
  height: baPosterSize.height,
  title: "One People, One Cross River",
  alt: "Official campaign poster: One People One Cross River, every community matters. John Upan Odey Jnr for Governor, Cross River State 2027.",
} as const;

const johnFreshStartPoster = {
  id: "ba-poster-a-fresh-start",
  src: "/brand/ba-poster-a-fresh-start.png",
  width: baPosterSize.width,
  height: baPosterSize.height,
  title: "A Fresh Start",
  alt: "Official campaign poster: A Fresh Start, building opportunities in every community. John Upan Odey Jnr for Governor, Cross River State 2027.",
} as const;

const odeyArchibongTicketPoster = {
  id: "official-poster-1",
  src: brand.marks.officialPoster,
  width: 2174,
  height: 2892,
  title: "Vote Odey-Archibong",
  alt: "Official campaign poster: A Fresh Start, One People One Cross River. John Upan Odey Jnr for Governor with Dr Stella Charles Archibong for Deputy Governor.",
} as const;

/** John's posters — Poster Gallery first. */
export const johnCampaignPosters = [
  johnRisingPoster,
  johnOnePeoplePoster,
  johnFreshStartPoster,
] as const;

/** Odey Archibong ticket posters — Poster Gallery below John's. */
export const odeyArchibongCampaignPosters = [odeyArchibongTicketPoster] as const;

/**
 * Home preview keeps the live BA pair plus the ticket poster.
 * The red-cap Fresh Start poster is on /posters only.
 */
export const officialPosters = [
  johnRisingPoster,
  johnOnePeoplePoster,
  odeyArchibongTicketPoster,
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
