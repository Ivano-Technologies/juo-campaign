import type { Metadata } from "next";
import { Button } from "@/components/button";
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
        lede="Donations will be naira-first. The live processor is not connected on this scaffold. Confirmation and failure screens are ready for the payment flow."
      >
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-line bg-paper p-8">
          <h2 className="font-serif text-3xl">NGN first</h2>
          <p className="mt-4 text-muted">
            International and card options stay gated until counsel and
            banking sign off. This page will host the approved amounts,
            receipt language, and processor widget — not a demo GiveWP form.
          </p>
          <p className="mt-4 text-sm text-muted">
            See{" "}
            <a href="/privacy" className="text-forest underline">
              privacy
            </a>{" "}
            for how donor data will be handled when donations open.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/join" variant="primary">
              Join the Movement
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
