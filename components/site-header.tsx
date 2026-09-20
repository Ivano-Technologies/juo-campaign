"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/button";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-deep/40 bg-forest text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft font-serif text-sm font-semibold text-forest-deep">
            {site.shortName}
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base">{site.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-gold-soft">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href as Route}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-paper/15 text-gold-soft"
                    : "text-paper/85 hover:bg-paper/10 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/donate" variant="gold">
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-paper/30 px-3 py-1.5 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-paper/10 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as Route}
                  className="block rounded-lg px-3 py-2 text-paper hover:bg-paper/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
