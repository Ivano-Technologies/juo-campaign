import { Button } from "@/components/button";
import { campaignHashtag } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeGetInvolved() {
  return (
    <section className="bg-forest-deep text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">
            Get involved
          </p>
          <h2 className="mt-3 font-serif text-4xl">
            Join the Movement. Shape the future.
          </h2>
          <p className="mt-3 max-w-xl text-paper/80">
            {site.unityLine}. Volunteer, organise, or support the work in naira
            when donations open. {campaignHashtag}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/join" variant="primary">
            Join the Movement
          </Button>
          <Button href="/donate" variant="gold">
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
