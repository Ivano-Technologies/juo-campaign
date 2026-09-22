"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/button";
import { CandidateMark, SocialRow } from "@/components/socials";
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
    <header className="sticky top-0 z-50 overflow-visible bg-navy text-brand-white">
      <div className="mx-auto flex h-[4.75rem] max-w-[1400px] items-center gap-3 px-4 sm:px-6 lg:gap-4">
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-brand-white/30 px-3 text-sm uppercase tracking-[0.14em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:gap-7 lg:flex"
          aria-label="Primary"
        >
          {wpNavItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href as Route}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-200 hover:text-brand-red xl:text-[13px] xl:tracking-[0.18em] ${
                  active ? "text-brand-white" : "text-brand-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/join"
              variant="primary"
              size="sm"
              className="min-h-11 text-[12px] font-bold uppercase tracking-[0.12em]"
            >
              Join the Movement
            </Button>
            <SocialRow
              className="hidden gap-1.5 xl:flex"
              iconClassName="flex h-11 w-11 items-center justify-center text-white/90 transition duration-200 hover:text-brand-red"
            />
          </div>
          <Link
            href="/"
            className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white sm:h-[3.75rem] sm:w-[3.75rem]"
            onClick={() => setOpen(false)}
          >
            <CandidateMark
              className="h-11 w-11 sm:h-[3.75rem] sm:w-[3.75rem]"
              priority
            />
            <span className="sr-only">{site.name}</span>
          </Link>
        </div>
      </div>

      <nav
        id={menuId}
        className={`border-t border-brand-white/10 bg-navy px-4 py-4 lg:hidden ${open ? "block" : "hidden"}`}
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
                  className="flex min-h-11 items-center px-2 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          href="/join"
          variant="primary"
          size="sm"
          className="mt-4 min-h-11 text-[12px] font-bold uppercase tracking-[0.12em]"
          onClick={() => setOpen(false)}
        >
          Join the Movement
        </Button>
        <SocialRow className="mt-4" />
      </nav>
    </header>
  );
}
