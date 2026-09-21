import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Diaspora Connect",
  description:
    "Cross Riverians abroad can volunteer, organise, and support the John Upan Odey Jnr campaign through Diaspora Connect.",
};

export default function DiasporaConnectPage() {
  return (
    <>
      <PageHero
        kicker="One people"
        title="Diaspora Connect"
        lede="A Fresh Start includes Cross Riverians outside the state. Tell us how you want to help — organising, skills, media, or naira support when donations open."
      >
        <Button href="/join" variant="white">
          Join the Movement
        </Button>
        <Button href="/donate" variant="ghost">
          Donate
        </Button>
      </PageHero>
    </>
  );
}
