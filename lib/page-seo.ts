import type { Metadata } from "next";
import { homeSeo } from "@/lib/home-seo";
import { canonicalOrigin, site } from "@/lib/site";

type SharePath = `/${string}`;

type ShareImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

/** Page-level OG/Twitter must match the approved title + meta, not layout defaults. */
export function pageShareTags(
  title: string,
  description: string,
  path: SharePath,
  image?: ShareImage,
): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const url = `${canonicalOrigin}${path}`;
  const shareImage = image ?? {
    url: homeSeo.ogImage.url,
    width: homeSeo.ogImage.width,
    height: homeSeo.ogImage.height,
    alt: homeSeo.ogImage.alt,
  };
  return {
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: site.name,
      url,
      title,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
