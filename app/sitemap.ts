import type { MetadataRoute } from "next";
import { canonicalOrigin } from "@/lib/site";

/** Public, indexable routes. Canonical Vision is /vision; /the-vision 301s. */
const publicPaths = [
  "/",
  "/join",
  "/donate",
  "/contact",
  "/manifesto",
  "/vision",
  "/john-upan-odey",
  "/meet-your-reps",
  "/diaspora-connect",
  "/news",
  "/policies",
  "/privacy",
  "/posters",
] as const;

function absoluteUrl(path: (typeof publicPaths)[number]): string {
  if (path === "/") {
    return `${canonicalOrigin}/`;
  }
  return `${canonicalOrigin}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: absoluteUrl(path),
  }));
}
