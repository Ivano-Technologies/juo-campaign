import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import { pageTitle } from "@/lib/site";

const confirmTitle = pageTitle("Donation received");
const confirmDescription =
  "Thank you for supporting the John Upan Odey Jnr campaign.";

export const metadata: Metadata = {
  title: "Donation received",
  description: confirmDescription,
  ...pageShareTags(confirmTitle, confirmDescription, "/donate/confirm"),
};

export default function DonateConfirmPage() {
  return (
    <>
      <PageHero
        kicker="Thank you"
        title="Donation confirmation"
        lede="If you reached this page after a successful payment, thank you. A receipt will follow once the naira processor is live. This screen is in place for that flow."
      >
        <Button href="/" variant="white">
          Back home
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>
    </>
  );
}
