import { Button } from "@/components/button";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { meetBio, meetCutouts, meetEducationLine } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeMeet() {
  return (
    <section className="bg-brand-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
            Meet {site.name}
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{site.name}</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-brand-blue">
            Age {site.age} · Born {site.origin} · {site.office}
          </p>
          <p className="mt-6 text-sm text-muted">{meetEducationLine}</p>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-7 text-ink">
            {meetBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button href="/john-upan-odey" variant="secondary" className="mt-8">
            Who is John Upan Odey Jnr
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <PlaceholderMedia
            id={meetCutouts[0].id}
            className="col-span-2 aspect-[16/10] rounded-3xl bg-brand-blue"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <PlaceholderMedia
            id={meetCutouts[1].id}
            className="aspect-[3/4] rounded-3xl bg-brand-blue"
            sizes="(min-width: 1024px) 20vw, 50vw"
          />
          <PlaceholderMedia
            id={meetCutouts[2].id}
            className="aspect-[3/4] rounded-3xl bg-brand-blue"
            sizes="(min-width: 1024px) 20vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
