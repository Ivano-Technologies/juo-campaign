import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the John Upan Odey Jnr campaign intends to handle personal data from join, contact, and donation forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Before any form"
        title="Privacy notice"
        lede="This notice is published before join, contact, and donate forms go live. It will be updated when IVA-21 connects storage."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-muted sm:px-6">
        <section>
          <h2 className="font-serif text-2xl text-ink">Who we are</h2>
          <p className="mt-3">
            This site is the official campaign website for {site.name},{" "}
            {site.office}. Contact: {site.email} · {site.phoneDisplay}.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">What we collect</h2>
          <p className="mt-3">
            When forms are enabled we will collect the details you choose to
            send: name, email, phone, local government, how you want to help,
            and messages. Donate data will be limited to what the payment
            processor and Nigerian law require.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">What we do not do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>This is not INEC voter registration.</li>
            <li>We do not sell supporter lists.</li>
            <li>We do not collect data on this scaffold — APIs return 501.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Your choices</h2>
          <p className="mt-3">
            Email {site.email} to ask what we hold, to correct it, or to ask us
            to stop contacting you. We will keep this notice aligned with
            counsel as Join, Diaspora Connect, and Donate go live.
          </p>
        </section>
      </article>
    </>
  );
}
