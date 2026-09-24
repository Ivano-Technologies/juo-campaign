import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { termsPageDescription, termsPageTitle } from "@/lib/legal";
import { pageShareTags } from "@/lib/page-seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: termsPageTitle,
  },
  description: termsPageDescription,
  ...pageShareTags(termsPageTitle, termsPageDescription, "/terms"),
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Official campaign website"
        title="Terms of Use"
        lede="This website is the official campaign site for John Upan Odey Jnr, NDC Governorship Candidate for Cross River State."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-muted sm:px-6">
        <section>
          <h2 className="font-serif text-2xl text-ink">Using this site</h2>
          <p className="mt-3">
            Pages, posters, and photographs here are for the {site.name}{" "}
            campaign. They are not a WordPress demo, a law-firm template, or a
            substitute for official government services.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Personal data</h2>
          <p className="mt-3">
            Join, Contact, and Donate forms are covered by the{" "}
            <a href="/privacy" className="text-brand-blue underline">
              Privacy Notice
            </a>
            . Read that notice before you send details.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Contact</h2>
          <p className="mt-3">
            Campaign email is coming soon. Use the{" "}
            <a href="/contact" className="text-brand-blue underline">
              contact form
            </a>{" "}
            to reach the campaign desk.
          </p>
        </section>
      </article>
    </>
  );
}
