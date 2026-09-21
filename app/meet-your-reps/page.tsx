import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Meet Your Reps",
  description:
    "Meet the John Upan Odey Jnr campaign representatives across Cross River’s 18 local government areas.",
};

export default function MeetYourRepsPage() {
  return (
    <>
      <PageHero
        kicker="The movement"
        title="Meet Your Reps"
        lede="Ward and LGA coordinators will be published here."
      >
        <Button href="/join" variant="white">
          Join the Movement
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>
    </>
  );
}
