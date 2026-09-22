import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import { pageTitle, site } from "@/lib/site";

const privacyTitle = pageTitle("Privacy");
const privacyDescription =
  "How the John Upan Odey Jnr campaign handles personal data from join, contact, and donation forms, including Diaspora Connect.";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacyDescription,
  ...pageShareTags(privacyTitle, privacyDescription, "/privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Before any form"
        title="Privacy notice"
        lede="This notice covers Join the Movement, Contact, and future Donate forms — including people who join from outside Cross River through Diaspora Connect."
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
            When you use Join the Movement we store the details you send: name,
            email, phone, local government or location (including “Diaspora /
            outside Cross River”), and how you want to help. Contact stores
            name, email, and your message. Donate data will be limited to what
            the payment processor and Nigerian law require when donations open.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">How we use it</h2>
          <p className="mt-3">
            Volunteer and diaspora details are used to follow up on the
            interest you select — ward work, organising, professional skills,
            media, donations, or Diaspora Connect — and to send campaign
            updates you asked for. Contact messages are used to reply from the
            campaign desk. We do not treat a join form as INEC voter
            registration.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">What we do not do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>This is not INEC voter registration.</li>
            <li>We do not sell supporter or volunteer lists.</li>
            <li>We do not publish your form as a public petition.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Your choices</h2>
          <p className="mt-3">
            Email {site.email} to ask what we hold, to correct it, or to ask us
            to stop contacting you. This notice will be updated if Donate or
            other channels start collecting more data.
          </p>
        </section>
      </article>
    </>
  );
}
