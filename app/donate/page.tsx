import type { Metadata } from "next";
import { BankTransferDetails } from "@/components/bank-transfer";
import { Button } from "@/components/button";
import { DonateForm } from "@/components/donate-form";
import { PageHero } from "@/components/page-hero";
import {
  donateHeroLede,
  donatePageDescription,
  donatePageTitle,
  donateStatusBody,
  donateStatusLead,
  donateStatusTitle,
  donateStayClose,
  donateStayLinks,
  donateStayTitle,
  donateSupportBody,
  donateSupportTitle,
  donateTransparencyBody,
  donateTransparencyTitle,
} from "@/lib/donate-copy";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: donatePageTitle,
  },
  description: donatePageDescription,
  ...pageShareTags(donatePageTitle, donatePageDescription, "/donate"),
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        kicker="Support the work"
        title="Donate"
        lede={donateHeroLede}
      >
        <Button href="/donate#bank-transfer" variant="white">
          Bank transfer
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>

      <BankTransferDetails />

      <section className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6">
        <div>
          <h2 className="font-serif text-3xl text-ink">{donateSupportTitle}</h2>
          {donateSupportBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{donateStatusTitle}</h2>
          <p className="mt-4 font-semibold text-ink">{donateStatusLead}</p>
          <p className="mt-3 text-[1.05rem] leading-7 text-muted">{donateStatusBody}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <DonateForm />
        <div className="min-w-0 space-y-8 text-muted">
          <div>
            <h2 className="font-serif text-3xl text-ink">{donateStayTitle}</h2>
            <ul className="mt-4 grid gap-3">
              {donateStayLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[1.05rem] leading-7">{donateStayClose}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-ink">{donateTransparencyTitle}</h2>
            <p className="mt-4 text-[1.05rem] leading-7">{donateTransparencyBody}</p>
            <p className="mt-4 text-sm">
              See{" "}
              <a href="/privacy" className="text-brand-blue underline">
                Privacy
              </a>{" "}
              and{" "}
              <a href="/vision" className="text-brand-blue underline">
                The Vision
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
