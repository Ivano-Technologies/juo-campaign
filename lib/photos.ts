import { brand } from "@/lib/brand";
import { pageSeoTitle } from "@/lib/brand-seo";
import { officialBrandedPortraits } from "@/lib/posters";

export const photosPath = "/photos" as const;

export const photosPageTitle = pageSeoTitle("Photo Gallery");

export const photosPageDescription =
  process.env.NEXT_PUBLIC_SHOW_STELLA === "true"
  ? "Official portraits and campaign photographs of John Upan Odey and Odey-Archibong. Campaign posters live on the Poster Gallery."
  : "Official portraits and campaign photographs of John Upan Odey. Campaign posters live on the Poster Gallery.";

export const photosHeroLede =
  "Portraits and photographs from the campaign. Campaign posters are on a separate Poster Gallery.";

function stellaGalleryPhotos() {
  if (process.env.NEXT_PUBLIC_SHOW_STELLA !== "true") {
    return [];
  }

  return [
    {
      id: "stella-archibong-official-4x5",
      src: "/images/people/odey-archibong-stella-official-4x5.jpg",
      width: 1024,
      height: 1280,
      alt: "Apostle Dr. Stella Charles Archibong",
    },
  ];
}

export const officialCampaignPhotos = [
  ...officialBrandedPortraits,
  {
    id: "juo-come-to-serve-portrait",
    src: brand.portraits.official.src,
    width: brand.portraits.official.width,
    height: brand.portraits.official.height,
    alt: brand.portraits.official.alt,
  },
  ...stellaGalleryPhotos(),
];

/**
 * Landscape BA gallery graphics (vehicle wraps). Native 4:3 frames —
 * do not crop into the 3:4 portrait photo grid.
 */
function stellaCampaignGraphics() {
  if (process.env.NEXT_PUBLIC_SHOW_STELLA !== "true") {
    return [];
  }

  return [
    {
      id: "we-are-ready",
      src: "/brand/gallery/we-are-ready.jpg",
      width: 2000,
      height: 1500,
      title: "We are ready",
      alt: "We are ready: Odey-Archibong campaign bus. A Fresh Start, One People One Cross River. John Upan Odey for Governor with Dr Stella Charles Archibong for Deputy Governor.",
    },
    {
      id: "odey-archibong-car-brand",
      src: "/brand/gallery/odey-archibong-car-brand.jpg",
      width: 2000,
      height: 1498,
      title: "Odey-Archibong campaign vehicles",
      alt: "Odey-Archibong campaign vehicles. A Fresh Start, One People One Cross River. John Upan Odey for Governor with Dr Stella Charles Archibong for Deputy Governor.",
    },
  ] as const;
}

export const campaignGraphics = stellaCampaignGraphics();

export type OfficialCampaignPhoto = (typeof officialCampaignPhotos)[number];
export type CampaignGraphic = (typeof campaignGraphics)[number];
