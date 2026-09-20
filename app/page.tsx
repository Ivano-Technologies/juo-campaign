import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { CtaRow } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "A Fresh Start for Cross River",
  description:
    "John Upan Odey Jnr — NDC governorship candidate for Cross River State, 2027. One People, One Cross River.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top_right,#c9a22733,transparent_40%),radial-gradient(circle_at_bottom_left,#e8d48b22,transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold-soft">
              {site.office} · {site.election}
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-4 font-serif text-2xl text-gold-soft sm:text-3xl">
              {site.unityLine}
            </p>
            <p className="mt-6 max-w-xl text-lg text-paper/85">
              {site.name} is asking Cross Riverians to choose competence over
              division — a government that produces, processes, and prospers with
              every local government, from Calabar to Obudu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaRow />
            </div>
          </div>
          <aside className="self-end rounded-3xl border border-paper/15 bg-forest-deep/60 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.24em] text-gold-soft">
              {site.agenda}
            </p>
            <p className="mt-3 font-serif text-3xl uppercase leading-snug">
              {site.prosperityLine}
            </p>
            <p className="mt-4 text-sm text-paper/75">
              Hunger does not know zoning. A broken road does not care about
              your local government. We are one Cross River.
            </p>
            <Link
              href="/john-upan-odey"
              className="mt-6 inline-block text-sm font-semibold text-gold-soft underline-offset-4 hover:underline"
            >
              Who is John Upan Odey Jnr
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
        <article className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-clay">01</p>
          <h2 className="mt-2 font-serif text-2xl">Why he is running</h2>
          <p className="mt-3 text-sm text-muted">
            A banker and manager from Obudu, not a career politician. The brief
            is service: jobs, farms, roads, tourism, and a government that is
            not afraid of its people.
          </p>
          <Button href="/john-upan-odey" variant="secondary" className="mt-5">
            Read the profile
          </Button>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-clay">02</p>
          <h2 className="mt-2 font-serif text-2xl">What he stands for</h2>
          <p className="mt-3 text-sm text-muted">
            The manifesto spine is public: A Fresh Start, one people, production
            and processing, ten commitments, and the Prosperity Agenda
            2027–2031. Full PDF pending campaign delivery.
          </p>
          <Button href="/policies" variant="secondary" className="mt-5">
            See policies
          </Button>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-clay">03</p>
          <h2 className="mt-2 font-serif text-2xl">Get involved</h2>
          <p className="mt-3 text-sm text-muted">
            Join the movement, support the campaign in naira when donations
            open, or write to the official desk. Privacy first — forms wait on
            IVA-21.
          </p>
          <Button href="/join" variant="primary" className="mt-5">
            Join the Movement
          </Button>
        </article>
      </section>
    </>
  );
}
