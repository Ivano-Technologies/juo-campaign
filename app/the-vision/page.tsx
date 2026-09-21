import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "The Vision",
  description:
    "Cross River has the ingredients for success. A Fresh Start connects tourism, agriculture, youth talent, culture, technology and location into one development strategy.",
};

export default function TheVisionPage() {
  return (
    <>
      <PageHero
        kicker="The Vision"
        title="From potential to prosperity"
        lede="Homepage section live at votejohnupanodey.com — this page is a lightweight stub until IVA-16 keep-pages are rebuilt to the same bar."
      >
        <Button href="/" variant="white">
          See it on the homepage
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>
    </>
  );
}
