import { brand } from "@/lib/brand";
import { pageSeoTitle } from "@/lib/brand-seo";
import { officialBrandedPortraits } from "@/lib/posters";

export const photosPath = "/photos" as const;

export const photosPageTitle = pageSeoTitle("Photo Gallery");

export const photosPageDescription =
  "Official portraits and campaign photographs of John Upan Odey Jnr and Odey Archibong. Approved Brand photography only. Campaign posters live on the Poster Gallery.";

export const photosHeroLede =
  "Portraits and photographs from the campaign. Campaign posters are on a separate Poster Gallery.";

export const officialCampaignPhotos = [
  ...officialBrandedPortraits,
  {
    id: "juo-come-to-serve-portrait",
    src: brand.portraits.official.src,
    width: brand.portraits.official.width,
    height: brand.portraits.official.height,
    alt: brand.portraits.official.alt,
  },
  {
    id: "stella-archibong-official-4x5",
    src: brand.portraits.stellaOfficial4x5.src,
    width: brand.portraits.stellaOfficial4x5.width,
    height: brand.portraits.stellaOfficial4x5.height,
    alt: brand.portraits.stellaOfficial4x5.alt,
  },
] as const;

export type OfficialCampaignPhoto = (typeof officialCampaignPhotos)[number];
