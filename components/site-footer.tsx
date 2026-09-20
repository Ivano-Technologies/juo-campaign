import type { Route } from "next";
import Link from "next/link";
import { BrandMarks } from "@/components/brand-marks";
import { PrimaryCtas } from "@/components/primary-ctas";
import { brand } from "@/lib/brand";
import { campaignHashtag } from "@/lib/home";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue text-brand-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandMarks variant="footer" />
          <p className="mt-4 font-serif text-2xl">{site.name}</p>
          <p className="mt-2 text-sm text-brand-white">{site.office}</p>
          <p className="mt-4 max-w-md text-sm text-brand-white/80">
            {site.tagline}. {site.unityLine}. {site.prosperityLine}.{" "}
            {campaignHashtag}
          </p>
          <p className="mt-3 max-w-md text-xs tracking-wide text-brand-white/80">
            {brand.hashtags.join(" · ")}
          </p>
          <PrimaryCtas compact className="mt-6" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-red">
            Explore
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href as Route} className="hover:text-brand-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-red">
            Official
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-brand-red">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-red">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand-red">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-white/10 py-4 text-center text-xs text-brand-white/60">
        © {new Date().getFullYear()} {site.name} Campaign. Paid for by the
        campaign. {site.domain}
      </div>
    </footer>
  );
}
