import type { Metadata } from "next";
import { HomeChallenges } from "@/components/home/challenges";
import { HomeFuture } from "@/components/home/future";
import { HomeHero } from "@/components/home/hero";
import { HomeInitiatives } from "@/components/home/initiatives";
import { HomeMeet } from "@/components/home/meet";
import { HomePillars } from "@/components/home/pillars";
import { HomeStatsBar } from "@/components/home/stats-bar";
import { HomeTogetherBanner } from "@/components/home/together-banner";
import { HomeVision } from "@/components/home/vision";
import { JsonLd } from "@/components/json-ld";
import {
  homeOrganizationJsonLd,
  homeSeo,
  homeWebsiteJsonLd,
} from "@/lib/home-seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: homeSeo.title,
  },
  description: homeSeo.description,
  alternates: {
    canonical: homeSeo.canonical,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    url: homeSeo.ogUrl,
    title: homeSeo.title,
    description: homeSeo.description,
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
    title: homeSeo.title,
    description: homeSeo.description,
    images: [homeSeo.ogImage.url],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeOrganizationJsonLd()} />
      <JsonLd data={homeWebsiteJsonLd()} />
      <HomeHero />
      <HomeStatsBar />
      <HomeChallenges />
      <HomeTogetherBanner />
      <HomeVision />
      <HomePillars />
      <HomeFuture />
      <HomeInitiatives />
      <HomeMeet />
    </>
  );
}
