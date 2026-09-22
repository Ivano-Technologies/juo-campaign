import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import { pageTitle } from "@/lib/site";

const failTitle = pageTitle("Donation unsuccessful");
const failDescription =
  "The donation did not complete. You can retry when the campaign processor is live.";

export const metadata: Metadata = {
  title: "Donation unsuccessful",
  description: failDescription,
  ...pageShareTags(failTitle, failDescription, "/donate/fail"),
};

export default function DonateFailPage() {
  return (
    <>
      <PageHero
        kicker="Let’s try again"
        title="Donation unsuccessful"
        lede="The payment did not complete. No charge should have gone through. Retry from the donate page when the processor is connected, or contact the campaign if you were billed in error."
      >
        <Button href="/donate" variant="white">
          Return to Donate
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>
    </>
  );
}
