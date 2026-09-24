import type { MetadataRoute } from "next";
import { communityPostPath, communityPosts } from "@/lib/community";
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
  "/odey-archibong",
  "/meet-your-reps",
  "/diaspora-connect",
  "/news",
  "/policies",
  "/privacy",
  "/terms",
  "/posters",
  "/photos",
] as const;

function absoluteUrl(path: string): string {
  if (path === "/") {
    return `${canonicalOrigin}/`;
  }
  return `${canonicalOrigin}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = publicPaths.map((path) => ({
    url: absoluteUrl(path),
  }));
  const stories = communityPosts.map((post) => ({
    url: absoluteUrl(communityPostPath(post.id)),
  }));
  return [...pages, ...stories];
}
