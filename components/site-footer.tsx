import type { Route } from "next";
import Link from "next/link";
import { CandidateMark, SocialRow } from "@/components/socials";
import { campaignHashtag, footerBlurb } from "@/lib/home";
import { footerAboutLinks, footerQuickLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative bg-navy text-brand-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <div className="flex flex-wrap items-center gap-5">
            <CandidateMark className="h-[6.5rem] w-[6.5rem]" />
            <p className="font-serif text-[1.65rem] leading-[1.15] font-extrabold uppercase">
              <span className="block text-brand-white">A New</span>
              <span className="block text-brand-white">Cross River</span>
              <span className="block bg-gradient-to-r from-[#e14cff] to-[#ff4d8d] bg-clip-text text-transparent">
                Is Possible
              </span>
            </p>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-brand-white/75">
            {footerBlurb}
          </p>
          <SocialRow className="mt-6" />
        </div>

        <div>
          <p className="font-serif text-sm font-bold tracking-[0.14em] uppercase">
            Quick Links
          </p>
          <ul className="mt-5 grid gap-2.5 text-sm text-brand-white/70">
            {footerQuickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href as Route}
                  className="inline-flex min-h-11 items-center transition hover:text-brand-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-serif text-sm font-bold tracking-[0.14em] uppercase">
            About
          </p>
          <ul className="mt-5 grid gap-2.5 text-sm text-brand-white/70">
            {footerAboutLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center transition hover:text-brand-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 pb-16 md:pb-4">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 text-xs text-brand-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© All rights reserved</p>
          <p>
            Join the Movement. Shape the Future. {campaignHashtag}
          </p>
        </div>
      </div>
    </footer>
  );
}
