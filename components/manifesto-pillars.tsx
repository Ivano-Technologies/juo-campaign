import { manifestoPillars, manifestoPillarsIntro } from "@/lib/manifesto";

type ManifestoPillarsProps = {
  heading: string;
};

export function ManifestoPillars({ heading }: ManifestoPillarsProps) {
  return (
    <div>
      <h2 className="font-serif text-3xl text-ink">{heading}</h2>
      <p className="mt-4 text-[1.05rem] leading-7 text-muted">
        {manifestoPillarsIntro}
      </p>
      <ol className="mt-10 grid gap-8">
        {manifestoPillars.map((pillar) => (
          <li key={pillar.slug} id={pillar.slug} className="scroll-mt-28">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-red uppercase">
              {pillar.number}
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink uppercase">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[1.05rem] leading-7 text-muted">
              {pillar.blurb}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
