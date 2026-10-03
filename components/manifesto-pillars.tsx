import {
  manifestoPillars,
  manifestoPillarsIntro,
  manifestoStackedHeadline,
} from "@/lib/manifesto";

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
        {manifestoPillars.map((pillar) => {
          const headline = manifestoStackedHeadline(pillar);
          return (
            <li key={pillar.slug} id={pillar.slug} className="scroll-mt-28 min-w-0">
              <h3 className="font-serif text-2xl tracking-tight text-ink uppercase break-words">
                {pillar.title}
              </h3>
              {headline ? (
                <p className="mt-3 font-serif text-2xl tracking-tight text-ink uppercase break-words whitespace-pre-line">
                  {headline}
                </p>
              ) : null}
              <p className="mt-3 text-[1.05rem] leading-7 text-muted break-words">
                {pillar.blurb}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
