"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { BrandMarks } from "@/components/brand-marks";
import { PrimaryCtas } from "@/components/primary-ctas";
import { isNavActive, navItems, site } from "@/lib/site";

function navLinkClass(active: boolean): string {
  return `block whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white ${
    active
      ? "bg-brand-white text-brand-blue"
      : "text-brand-white/85 hover:bg-brand-white/10 hover:text-brand-white"
  }`;
}

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
    <header className="sticky top-0 z-40 border-b border-brand-blue bg-brand-blue text-brand-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="min-w-0 max-w-[min(100%,14.5rem)] overflow-hidden sm:max-w-none">
            <BrandMarks variant="header" />
          </span>
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden min-w-0 items-center justify-end gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href as Route}
                aria-current={active ? "page" : undefined}
                className={navLinkClass(active)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex shrink-0 items-center rounded-full border border-brand-white/30 px-3 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white lg:hidden"
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
        className={`border-t border-brand-white/10 px-4 py-4 lg:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <ul className="grid max-h-[min(24rem,calc(100dvh-12rem))] gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href as Route}
                  aria-current={active ? "page" : undefined}
                  className={`${navLinkClass(active)} px-3 py-2.5 text-base`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <PrimaryCtas
          compact
          className="mt-4"
          onNavigate={() => setOpen(false)}
        />
      </nav>
    </header>
  );
}
