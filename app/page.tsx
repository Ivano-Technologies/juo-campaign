import type { Metadata } from "next";
import { HomeChallenges } from "@/components/home/challenges";
import { HomeFuture } from "@/components/home/future";
import { HomeGetInvolved } from "@/components/home/get-involved";
import { HomeHero } from "@/components/home/hero";
import { HomeMeet } from "@/components/home/meet";
import { HomePillars } from "@/components/home/pillars";
import { HomeTogetherBanner } from "@/components/home/together-banner";
import { HomeVision } from "@/components/home/vision";
import { campaignHashtag } from "@/lib/home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "A Fresh Start for Cross River",
  description: `${site.name} — NDC governorship candidate for Cross River State, 2027. ${site.unityLine}. ${campaignHashtag}`,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeChallenges />
      <HomeTogetherBanner />
      <HomeVision />
      <HomePillars />
      <HomeFuture />
      <HomeMeet />
      <HomeGetInvolved />
    </>
  );
}
