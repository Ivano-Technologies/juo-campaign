import type { MetadataRoute } from "next";
import { canonicalOrigin } from "@/lib/site";

/** Public, indexable routes. Do not include 404 paths such as /vision. */
const publicPaths = [
  "/",
  "/join",
  "/donate",
  "/contact",
  "/manifesto",
  "/the-vision",
  "/john-upan-odey",
  "/meet-your-reps",
  "/diaspora-connect",
  "/news",
  "/privacy",
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
