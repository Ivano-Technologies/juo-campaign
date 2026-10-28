"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  type AnalyticsConsent,
  getConsentSnapshot,
  getServerConsentSnapshot,
  openCookieSettings,
  subscribeConsent,
  subscribeOpenSettings,
  writeConsent,
} from "@/lib/consent";

/** Accept and Reject share one class so they carry equal visual weight. */
const choiceButton =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-brand-blue bg-brand-blue px-5 py-2.5 text-sm font-semibold tracking-wide text-brand-white transition-[background-color,border-color] duration-200 ease-out hover:border-brand-red hover:bg-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red";

/**
 * First visit cookie choice. Copy is the banner text in
 * legal-audit-2026-10/final/juo/cookies.md. Not a modal: it does not trap
 * focus or block the page. On phones it sits in the middle of the screen,
 * clear of the hero CTA at the bottom; from md up it is a card on the
 * right side.
 */
export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [reopened, setReopened] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(
    () =>
      subscribeOpenSettings(() => {
        setReopened(true);
        window.requestAnimationFrame(() => headingRef.current?.focus());
      }),
    [],
  );

  const visible = consent === "unset" || reopened;
  if (!visible || consent === "pending") {
    return null;
  }

  function choose(value: AnalyticsConsent) {
    writeConsent(value);
    setReopened(false);
  }

  return (
    <section
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
      data-cookie-banner=""
      className="fixed inset-x-3 top-1/2 z-40 -translate-y-1/2 rounded-2xl border border-line bg-brand-white p-5 text-ink shadow-[0_18px_40px_-18px_color-mix(in_srgb,var(--brand-blue)_60%,transparent)] md:inset-x-auto md:top-auto md:right-5 md:bottom-5 md:w-[26rem] md:translate-y-0 md:p-6"
    >
      <h2
        id="cookie-banner-title"
        ref={headingRef}
        tabIndex={-1}
        className="font-serif text-lg font-extrabold tracking-tight text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
      >
        We use cookies
      </h2>
      <p id="cookie-banner-text" className="mt-2 text-sm leading-6 text-muted">
        We use Google Analytics to see how people use this site, only if you
        agree.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className={choiceButton}
          onClick={() => choose("granted")}
        >
          Accept
        </button>
        <button
          type="button"
          className={choiceButton}
          onClick={() => choose("denied")}
        >
          Reject
        </button>
      </div>
      <Link
        href="/cookies"
        className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
      >
        Read the cookie notice
      </Link>
    </section>
  );
}

/** Footer and /cookies control to change the choice later. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={openCookieSettings}
    >
      Cookie settings
    </button>
  );
}
