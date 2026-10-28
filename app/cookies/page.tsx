import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/cookie-banner";
import { PageHero } from "@/components/page-hero";
import {
  cookiesLastUpdated,
  cookiesPageDescription,
  cookiesPageTitle,
} from "@/lib/legal";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: cookiesPageTitle,
  },
  description: cookiesPageDescription,
  ...pageShareTags(cookiesPageTitle, cookiesPageDescription, "/cookies"),
};

const th = "border-b border-line px-3 py-2 text-left font-semibold text-ink";
const td = "border-b border-line px-3 py-2 align-top";

/** Copy is the final legal text in legal-audit-2026-10/final/juo/cookies.md. Do not paraphrase. */
export default function CookiesPage() {
  return (
    <>
      <PageHero
        kicker="Your data"
        title="Cookie notice"
        lede={`Last updated ${cookiesLastUpdated}`}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-muted sm:px-6">
        <section>
          <h2 className="font-serif text-2xl text-ink">Essential (always on)</h2>
          <p className="mt-3">
            These keep the site working and secure. No choice is needed for them.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th scope="col" className={th}>Name</th>
                  <th scope="col" className={th}>Set by</th>
                  <th scope="col" className={th}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>Supabase sign in storage</td>
                  <td className={td}>This site</td>
                  <td className={td}>Signs campaign staff in to the admin area only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Analytics (only if you accept)</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th scope="col" className={th}>Name</th>
                  <th scope="col" className={th}>Set by</th>
                  <th scope="col" className={th}>Purpose</th>
                  <th scope="col" className={th}>Lasts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>_ga</td>
                  <td className={td}>Google Analytics</td>
                  <td className={td}>Tells visits apart</td>
                  <td className={td}>2 years</td>
                </tr>
                <tr>
                  <td className={td}>_ga_S291WH3D5L</td>
                  <td className={td}>Google Analytics</td>
                  <td className={td}>Keeps the session</td>
                  <td className={td}>2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Google Analytics also records whether a join form was started or
            sent. It does not receive your name, phone or email.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Embedded videos</h2>
          <p className="mt-3">
            Some news posts include a YouTube video. YouTube may set cookies
            when the video loads or plays, under Google&apos;s own terms.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Your choice</h2>
          <p className="mt-3">
            You choose &ldquo;Accept&rdquo; or &ldquo;Reject&rdquo; when you
            first visit. You can change your mind at any time from &ldquo;Cookie
            settings&rdquo; in the footer. Rejecting does not stop you using any
            part of the site.
          </p>
          <p className="mt-3">
            The John Upan Odey 2027 campaign is responsible for these cookies.
            Questions:{" "}
            <a
              href="mailto:campaign@votejohnupanodey.com"
              className="text-brand-blue underline"
            >
              campaign@votejohnupanodey.com
            </a>
            .
          </p>
          <CookieSettingsButton className="mt-5 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border-2 border-brand-blue bg-brand-blue px-5 py-2.5 text-sm font-semibold tracking-wide text-brand-white transition-colors duration-200 hover:border-brand-red hover:bg-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red" />
        </section>
      </article>
    </>
  );
}
