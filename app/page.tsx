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
import { campaignHashtag } from "@/lib/home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Building a New Generation Cross River",
  description: `${site.name} — NDC governorship candidate for Cross River State, 2027. ${site.unityLine}. ${campaignHashtag}`,
};

export default function HomePage() {
  return (
    <>
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
