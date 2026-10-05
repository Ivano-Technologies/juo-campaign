import type { MetadataRoute } from "next";
import { sitemapUrl } from "@/lib/site";

/**
 * Production robots.txt must advertise the live www sitemap:
 * https://www.votejohnupanodey.com/sitemap.xml
 * Preview/dev still get this Sitemap line; page metadata noindexes them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
  };
}
