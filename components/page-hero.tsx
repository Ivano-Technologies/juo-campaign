import type { ReactNode } from "react";
import { PrimaryCtaButtons } from "@/components/primary-ctas";

type PageHeroProps = {
  kicker?: string;
  title: string;
  lede: string;
  children?: ReactNode;
  aside?: ReactNode;
  watermark?: ReactNode;
};

export function PageHero({
  kicker,
  title,
  lede,
  children,
  aside,
  watermark,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-brand-white">
      {watermark}
      <div
        className={`relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 ${
          aside ? "lg:flex-row lg:items-center lg:justify-between" : ""
        }`}
      >
        <div className="min-w-0 flex-1">
          {kicker ? (
            <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-4xl font-serif text-[2rem] leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-white/85 sm:text-lg">{lede}</p>
          {children ? (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          ) : null}
        </div>
        {aside ? (
          <div className="shrink-0 lg:ml-8 lg:justify-self-end">{aside}</div>
        ) : null}
      </div>
    </section>
  );
}

export function CtaRow() {
  return <PrimaryCtaButtons />;
}
