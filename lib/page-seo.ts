import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Page-level OG/Twitter must match the approved title + meta, not layout defaults. */
export function pageShareTags(
  title: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: site.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
