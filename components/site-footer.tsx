import type { Route } from "next";
import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-2 text-sm text-gold-soft">{site.office}</p>
          <p className="mt-4 max-w-sm text-sm text-paper/80">
            {site.unityLine}. {site.tagline}. {site.agenda}.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">
            Explore
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href as Route} className="hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">
            Official
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-gold-soft">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-soft">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gold-soft">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-4 text-center text-xs text-paper/60">
        © {new Date().getFullYear()} {site.name} Campaign. Paid for by the
        campaign. {site.domain}
      </div>
    </footer>
  );
}
