import type { Metadata } from "next";
import { Button } from "@/components/button";
import { DonateForm } from "@/components/donate-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the John Upan Odey Jnr campaign. Naira-first donations will open with a campaign-legal processor.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        kicker="Support the work"
        title="Donate"
        lede="Stand up a naira-first gift for a Fresh Start in Cross River. Checkout stays gated until the campaign processor is connected — amounts and this page are ready now."
      >
        <Button href="/join" variant="primary">
          Join the Movement
        </Button>
        <Button href="/manifesto" variant="white">
          Manifesto
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <DonateForm />
        <div className="space-y-4 text-muted">
          <h2 className="font-serif text-3xl text-ink">How giving will work</h2>
          <p>
            Approved amounts, receipt language, and the processor widget will
            live on this page — not a ported GiveWP form. International and
            card options remain closed until counsel signs off.
          </p>
          <p>
            Confirmation and unsuccessful payment screens are already in place
            at{" "}
            <a href="/donate/confirm" className="text-brand-blue underline">
              /donate/confirm
            </a>{" "}
            and{" "}
            <a href="/donate/fail" className="text-brand-blue underline">
              /donate/fail
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
