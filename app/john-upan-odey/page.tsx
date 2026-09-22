import type { Metadata } from "next";
import { Button } from "@/components/button";
import { JsonLd } from "@/components/json-ld";
import { CtaRow, PageHero } from "@/components/page-hero";
import { profilePersonJsonLd, profileSeo } from "@/lib/profile-seo";
import { currentRoles, education, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: profileSeo.title,
  },
  description: profileSeo.description,
  alternates: {
    canonical: profileSeo.canonical,
  },
  openGraph: {
    type: "profile",
    locale: "en_NG",
    siteName: site.name,
    url: profileSeo.canonical,
    title: profileSeo.title,
    description: profileSeo.description,
    images: [
      {
        url: profileSeo.ogImage.url,
        width: profileSeo.ogImage.width,
        height: profileSeo.ogImage.height,
        alt: profileSeo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profileSeo.title,
    description: profileSeo.description,
    images: [profileSeo.ogImage.url],
  },
};

export default function WhoIsJuoPage() {
  return (
    <>
      <JsonLd data={profilePersonJsonLd()} />
      <PageHero
        kicker="John Upan Odey Jnr"
        title="Who is John Upan Odey"
        lede={`${site.name}, ${site.office}. Age ${site.age}, born ${site.origin}. A Fresh Start for a state that produces, processes, and prospers together.`}
      >
        <CtaRow />
      </PageHero>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-6 text-[1.05rem] leading-7 text-ink">
          <section>
            <h2 className="font-serif text-3xl">In brief</h2>
            <p className="mt-3 text-muted">
              John Upan Odey Jnr is the Nigerian Democratic Congress
              governorship candidate for Cross River State in 2027. He is a
              banker and manager from Obudu who is asking Cross Riverians to
              end the politics of division and begin a season of real service.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl">Why I serve</h2>
            <p className="mt-3 text-muted">
              The campaign’s public spine is simple: we are one people and one
              Cross River. Hunger does not know zoning. Roads, farms, clinics,
              and jobs belong to every local government. The work is to turn
              the state’s soil, tourism, and talent into broad prosperity, not
              crumbs for the many and a harvest for a few.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl">What he stands for</h2>
            <p className="mt-3 text-muted">
              A Fresh Start. One People, One Cross River. We produce. We
              process. We prosper. Ten commitments and the {site.agenda} will
              be published in full when the campaign manifesto PDF is delivered.
              Until then, the policy page lists the approved manifesto pillars,
              not invented slogans.
            </p>
            <Button href="/manifesto" variant="secondary" className="mt-5">
              Manifesto
            </Button>
          </section>
        </article>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-brand-white p-6">
            <h2 className="font-serif text-2xl">Education</h2>
            <ul className="mt-4 grid gap-4">
              {education.map((item) => (
                <li key={item.school}>
                  <p className="font-semibold">{item.school}</p>
                  <p className="text-sm text-muted">{item.credential}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-brand-white p-6">
            <h2 className="font-serif text-2xl">Current roles</h2>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              {currentRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-brand-white p-6">
            <h2 className="font-serif text-2xl">Connect</h2>
            <p className="mt-3 text-sm text-muted">
              {site.domain}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Contact
              </Button>
              <Button href="/join" variant="secondary">
                Join the Movement
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
