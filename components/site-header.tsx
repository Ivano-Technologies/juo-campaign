"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { JoMarkCompact, SocialRow } from "@/components/socials";
import { isNavActive, site, wpNavItems } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-brand-blue text-brand-white">
      <div className="mx-auto flex h-[4.75rem] max-w-[1400px] items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white"
          onClick={() => setOpen(false)}
        >
          <JoMarkCompact className="h-10 w-auto bg-brand-white px-2 py-1 sm:h-12" priority />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {wpNavItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href as Route}
                aria-current={active ? "page" : undefined}
                className={`text-[13px] font-semibold uppercase tracking-[0.18em] transition-[color,transform] duration-200 ease-out hover:text-brand-red motion-safe:hover:-translate-y-px ${
                  active ? "text-brand-white" : "text-brand-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="/join"
            className="bg-brand-red px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-white transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-brand-red/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_22px_-12px_color-mix(in_srgb,var(--brand-red)_55%,transparent)]"
          >
            Join the Movement
          </Link>
          <SocialRow
            className="gap-1.5"
            iconClassName="flex h-7 w-7 items-center justify-center text-white/90 transition duration-200 hover:text-brand-red"
          />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="ml-auto inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-brand-white/30 px-3 text-sm uppercase tracking-[0.14em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id={menuId}
        className={`border-t border-brand-white/10 bg-brand-blue px-4 py-4 lg:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <ul className="grid max-h-[min(24rem,calc(100dvh-12rem))] gap-1 overflow-y-auto">
          {wpNavItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href as Route}
                  aria-current={active ? "page" : undefined}
                  className="flex min-h-11 items-center px-2 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-white/90 transition-colors duration-200 ease-out hover:text-brand-red"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/join"
          className="mt-4 inline-flex min-h-11 items-center bg-brand-red px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-white transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-brand-red/90 motion-safe:hover:-translate-y-0.5"
          onClick={() => setOpen(false)}
        >
          Join the Movement
        </Link>
        <SocialRow className="mt-4" />
      </nav>
    </header>
  );
}
