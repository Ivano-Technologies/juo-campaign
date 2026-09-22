import type { Metadata } from "next";
import { homeSeo } from "@/lib/home-seo";
import { canonicalOrigin, site } from "@/lib/site";

type SharePath = `/${string}`;

/** Page-level OG/Twitter must match the approved title + meta, not layout defaults. */
export function pageShareTags(
  title: string,
  description: string,
  path: SharePath,
): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const url = `${canonicalOrigin}${path}`;
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
      images: [
        {
          url: homeSeo.ogImage.url,
          width: homeSeo.ogImage.width,
          height: homeSeo.ogImage.height,
          alt: homeSeo.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [homeSeo.ogImage.url],
    },
  };
}
