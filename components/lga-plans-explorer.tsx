"use client";

import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, type KeyboardEvent } from "react";
import {
  lgaPlanFooterLockup,
  lgaPlanPath,
  lgaPlanPromiseLabel,
  lgaPlans,
  lgaPlansClosingNote,
  lgaPlansPath,
  lgaPlansSelectLabel,
  type LgaPlan,
} from "@/lib/lga-plans";

function ClosingNote() {
  return (
    <section
      aria-labelledby="lga-plans-closing-note"
      className="rounded-2xl border border-line bg-brand-white p-6 sm:p-8"
    >
      <h2
        id="lga-plans-closing-note"
        className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase"
      >
        {lgaPlansClosingNote.label}
      </h2>
      <p className="mt-3 text-[1.05rem] leading-7 text-muted">
        {lgaPlansClosingNote.intro}
      </p>
      <ul className="mt-6 grid gap-6 sm:grid-cols-3">
        {lgaPlansClosingNote.pillars.map((pillar) => (
          <li key={pillar.title}>
            <h3 className="font-serif text-2xl text-ink">{pillar.title}</h3>
            <p className="mt-2 text-[1.05rem] leading-7 text-muted">
              {pillar.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

type LgaPlansExplorerProps = {
  /** When set (detail route), that LGA is selected and announced. */
  initialSlug?: string;
};

function PlanCard({ plan }: { plan: LgaPlan }) {
  return (
    <article
      className="overflow-hidden rounded-2xl border border-line bg-brand-white shadow-[0_18px_40px_-28px_color-mix(in_srgb,var(--brand-blue)_55%,transparent)]"
      aria-labelledby={`lga-plan-name-${plan.slug}`}
    >
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="flex min-w-0 flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase">
              Local plan
            </p>
            <h2
              id={`lga-plan-name-${plan.slug}`}
              className="mt-3 font-serif text-3xl text-ink sm:text-4xl"
            >
              {plan.name}
            </h2>
            <p className="mt-6 font-serif text-xl leading-snug text-ink uppercase sm:text-2xl">
              {plan.headline}
            </p>
            <p className="mt-4 text-[1.05rem] leading-7 text-muted">
              {plan.supportingLine}
            </p>
          </div>

          <footer className="mt-10 border-t border-line pt-6">
            <ul className="space-y-1 text-xs font-semibold tracking-[0.18em] text-ink uppercase sm:text-sm sm:tracking-[0.22em]">
              {lgaPlanFooterLockup.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </footer>
        </div>

        <div className="min-w-0 border-t border-line bg-paper p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <h3 className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase">
            {plan.planHeading}
          </h3>
          <p className="mt-3 font-serif text-xl leading-snug text-ink uppercase sm:text-2xl">
            {plan.planLine}
          </p>

          <ol className="mt-6 space-y-5">
            {plan.points.map((point, index) => (
              <li key={point.title} className="flex gap-4">
                <span
                  className="w-6 shrink-0 font-serif text-xl leading-7 text-brand-red"
                  aria-hidden="true"
                >
                  {index + 1}.
                </span>
                <div className="min-w-0">
                  <h4 className="font-semibold leading-7 text-ink">
                    {point.title}
                  </h4>
                  <p className="mt-1 text-[1.05rem] leading-7 text-muted">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t border-line pt-6">
            <h4 className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase">
              {lgaPlanPromiseLabel}
            </h4>
            <p className="mt-3 font-serif text-xl leading-snug text-ink">
              {plan.promise}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function LgaPlansExplorer({ initialSlug }: LgaPlansExplorerProps) {
  const router = useRouter();
  const listId = useId();
  const panelId = useId();
  const selected =
    lgaPlans.find((plan) => plan.slug === initialSlug) ?? lgaPlans[0];
  const selectedButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!initialSlug) {
      return;
    }
    selectedButtonRef.current?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [initialSlug]);

  const selectPlan = useCallback(
    (slug: string) => {
      if (slug === selected.slug && initialSlug) {
        return;
      }
      router.push(lgaPlanPath(slug) as Route, { scroll: false });
    },
    [initialSlug, router, selected.slug],
  );

  const onGridKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const currentIndex = lgaPlans.findIndex(
        (plan) => plan.slug === selected.slug,
      );
      if (currentIndex < 0) {
        return;
      }

      const cols =
        typeof window !== "undefined" && window.matchMedia("(min-width: 640px)").matches
          ? typeof window !== "undefined" &&
            window.matchMedia("(min-width: 1024px)").matches
            ? 6
            : 3
          : 2;

      let nextIndex = currentIndex;
      switch (event.key) {
        case "ArrowRight":
          nextIndex = Math.min(lgaPlans.length - 1, currentIndex + 1);
          break;
        case "ArrowLeft":
          nextIndex = Math.max(0, currentIndex - 1);
          break;
        case "ArrowDown":
          nextIndex = Math.min(lgaPlans.length - 1, currentIndex + cols);
          break;
        case "ArrowUp":
          nextIndex = Math.max(0, currentIndex - cols);
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = lgaPlans.length - 1;
          break;
        default:
          return;
      }

      if (nextIndex === currentIndex) {
        return;
      }
      event.preventDefault();
      const next = lgaPlans[nextIndex];
      if (next) {
        selectPlan(next.slug);
      }
    },
    [selectPlan, selected.slug],
  );

  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id={listId} className="font-serif text-3xl text-ink">
            {lgaPlansSelectLabel}
          </h2>
          {initialSlug ? (
            <Link
              href={lgaPlansPath as Route}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-blue underline"
            >
              All LGA plans
            </Link>
          ) : null}
        </div>
        <p className="mt-3 text-[1.05rem] leading-7 text-muted">
          Eighteen local governments. One plan for each. Use the list or
          arrow keys to move between plans.
        </p>

        <div
          role="listbox"
          aria-labelledby={listId}
          aria-activedescendant={`lga-option-${selected.slug}`}
          aria-controls={panelId}
          tabIndex={0}
          onKeyDown={onGridKeyDown}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {lgaPlans.map((plan) => {
            const isSelected = plan.slug === selected.slug;
            return (
              <button
                key={plan.slug}
                id={`lga-option-${plan.slug}`}
                ref={isSelected ? selectedButtonRef : undefined}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => selectPlan(plan.slug)}
                className={`min-h-11 rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-[color,background-color,border-color,transform] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-safe:hover:-translate-y-0.5 ${
                  isSelected
                    ? "border-brand-blue bg-brand-blue text-brand-white"
                    : "border-line bg-brand-white text-ink hover:border-brand-blue/40"
                }`}
              >
                {plan.name}
              </button>
            );
          })}
        </div>
      </div>

      <div id={panelId} role="region" aria-live="polite" aria-atomic="true">
        <PlanCard plan={selected} />
      </div>

      <ClosingNote />
    </div>
  );
}
