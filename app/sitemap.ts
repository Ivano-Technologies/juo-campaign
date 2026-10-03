import type { MetadataRoute } from "next";
import {
  communityPostPath,
  newsPosts,
  type CommunityPost,
} from "@/lib/community";
import { canonicalOrigin } from "@/lib/site";

/**
 * Public, indexable routes. Canonical Vision is /vision; /the-vision 301s.
 * lastModified = latest git committer date of the page file and/or the lib
 * module that supplies that route’s copy. Do not invent dates.
 *
 * Utility shells (/donate/confirm, /donate/fail) are intentionally omitted
 * and carry robots noindex on their pages.
 */
const publicPages: readonly {
  path: string;
  lastModified: string;
}[] = [
  { path: "/", lastModified: "2026-09-29T12:43:41+01:00" }, // components/home (c1b60f7)
  { path: "/join", lastModified: "2026-09-22T13:35:01Z" }, // app/join/page.tsx (133a0e1)
  { path: "/donate", lastModified: "2026-09-22T16:40:05Z" }, // lib/donate-copy.ts (e109e24)
  { path: "/contact", lastModified: "2026-09-25T16:54:13+01:00" }, // app/contact/page.tsx (debfafe)
  { path: "/manifesto", lastModified: "2026-10-03T12:42:59Z" }, // lib/manifesto.ts (IVA-98)
  { path: "/vision", lastModified: "2026-09-29T12:43:41+01:00" }, // app/vision/page.tsx (c1b60f7)
  { path: "/john-upan-odey", lastModified: "2026-10-03T12:42:59Z" }, // app/john-upan-odey/page.tsx (IVA-98)
  { path: "/odey-archibong", lastModified: "2026-09-23T02:51:33Z" }, // app/odey-archibong/page.tsx (3d18f98)
  { path: "/meet-your-reps", lastModified: "2026-09-29T12:43:41+01:00" }, // page + lib/reps.ts (c1b60f7)
  { path: "/diaspora-connect", lastModified: "2026-09-29T12:43:41+01:00" }, // lib/diaspora.ts (c1b60f7)
  { path: "/news", lastModified: "2026-09-29T12:43:41+01:00" }, // lib/news.ts (c1b60f7)
  { path: "/policies", lastModified: "2026-10-03T12:42:59Z" }, // lib/policies.ts (IVA-98)
  { path: "/privacy", lastModified: "2026-09-25T16:54:13+01:00" }, // app/privacy/page.tsx (debfafe)
  { path: "/terms", lastModified: "2026-09-29T12:43:41+01:00" }, // app/terms/page.tsx (c1b60f7)
  { path: "/posters", lastModified: "2026-09-29T12:43:41+01:00" }, // page + lib/posters.ts (c1b60f7)
  { path: "/photos", lastModified: "2026-09-27T15:48:31+01:00" }, // page + lib/photos.ts (f3e5d99)
];

/**
 * Stories with no event dateline: lastmod = git commit that introduced
 * that story’s content in lib/community.ts (73c9103). Do not invent an
 * event date for these four posts.
 */
const storyIntroCommitLastmod: Readonly<Record<string, string>> = {
  "connecting-with-cross-rivers-youth": "2026-09-22T16:41:59Z",
  "engagement-with-ward-leaders": "2026-09-22T16:41:59Z",
  "a-meeting-of-purpose": "2026-09-22T16:41:59Z",
  "ndc-cross-river-listening-tour": "2026-09-22T16:41:59Z",
};

const monthIndex: Readonly<Record<string, number>> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

/** Parse story datelines like "29 September 2026" into a Date (UTC midnight). */
function parseStoryDateline(dateline: string): Date {
  const match = /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/.exec(dateline.trim());
  if (!match) {
    throw new Error(`Unrecognized news dateline: ${dateline}`);
  }
  const day = Number(match[1]);
  const monthName = match[2] ?? "";
  const year = Number(match[3]);
  const month = monthIndex[monthName];
  if (month === undefined || !Number.isFinite(day) || !Number.isFinite(year)) {
    throw new Error(`Unrecognized news dateline: ${dateline}`);
  }
  return new Date(Date.UTC(year, month, day));
}

function absoluteUrl(path: string): string {
  if (path === "/") {
    return `${canonicalOrigin}/`;
  }
  return `${canonicalOrigin}${path}`;
}

function storyLastModified(post: CommunityPost): Date {
  if (post.dateline) {
    return parseStoryDateline(post.dateline);
  }
  const fallback = storyIntroCommitLastmod[post.id];
  if (!fallback) {
    throw new Error(
      `News story "${post.id}" has no dateline and no intro-commit lastmod.`,
    );
  }
  return new Date(fallback);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = publicPages.map(({ path, lastModified }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(lastModified),
  }));

  // Story URLs always come from newsPosts (same list the site renders).
  const stories = newsPosts.map((post) => ({
    url: absoluteUrl(communityPostPath(post.id)),
    lastModified: storyLastModified(post),
  }));

  return [...pages, ...stories];
}
