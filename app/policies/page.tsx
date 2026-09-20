import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { policyPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Manifesto pillars for John Upan Odey Jnr’s Prosperity Agenda 2027–2031. Full policy copy follows the approved manifesto PDF.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        kicker="Prosperity Agenda 2027–2031"
        title="Policies"
        lede="These are the manifesto pillars for the rebuild — not the old demo ‘six pillars’. Detailed page copy waits on the approved manifesto PDF (IVA-17)."
      >
        <Button href="/manifesto" variant="gold">
          Manifesto
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {policyPillars.map((pillar) => (
            <li
              key={pillar}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-clay">
                Pillar
              </p>
              <h2 className="mt-2 font-serif text-2xl">{pillar}</h2>
              <p className="mt-3 text-sm text-muted">
                Full commitment text will be published from the campaign
                manifesto. This route is a stub so the spine is visible now.
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
