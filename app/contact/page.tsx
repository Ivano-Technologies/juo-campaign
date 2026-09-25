import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import { pageTitle, site } from "@/lib/site";

const contactTitle = pageTitle("Contact");
const contactDescription =
  `Official contact for the John Upan Odey Jnr campaign: ${site.contactEmail} and a message form.`;

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  ...pageShareTags(contactTitle, contactDescription, "/contact"),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Official channels"
        title="Contact"
        lede="Write to the campaign desk. The message form on this page is live."
      >
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
        <Button href="/donate" variant="white">
          Donate
        </Button>
        <Button href="/manifesto" variant="ghost">
          Manifesto
        </Button>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-brand-white p-6">
            <h2 className="font-serif text-2xl">Campaign desk</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-brand-blue underline"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li>Web: {site.domain}</li>
            </ul>
          </div>
          <p className="text-sm text-muted">
            For volunteer interest, use{" "}
            <a href="/join" className="text-brand-blue underline">
              Join the Movement
            </a>
            . Read{" "}
            <a href="/privacy" className="text-brand-blue underline">
              privacy
            </a>{" "}
            before sending personal data.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
