import {
  manifestoCoverAlt,
  manifestoPdfHref,
  manifestoPillars,
  manifestoPillarsIntro,
  manifestoStackedHeadline,
} from "@/lib/manifesto";

type ManifestoPillarsProps = {
  heading: string;
};

export function ManifestoPillars({ heading }: ManifestoPillarsProps) {
  return (
    <div className="grid md:grid-cols-[minmax(0,1fr)_280px] md:gap-x-10 lg:grid-cols-12 lg:gap-x-16">
      <div className="min-w-0 md:col-start-1 md:row-start-1 lg:col-span-7">
        <h2 className="font-serif text-3xl text-ink">{heading}</h2>
        <p className="mt-4 text-[1.05rem] leading-7 text-muted">
          {manifestoPillarsIntro}
        </p>
      </div>
      <figure className="mx-auto mt-8 mb-8 w-[70%] max-w-[260px] md:sticky md:top-28 md:col-start-2 md:row-span-2 md:row-start-1 md:mx-0 md:mt-0 md:mb-0 md:w-full md:max-w-none md:self-start lg:col-span-5 lg:col-start-8">
        {/* eslint-disable-next-line @next/next/no-img-element -- fixed 600w/1200w webp srcset per IVA-151 spec */}
        <img
          src="/brand/manifesto-cover-1200.webp"
          srcSet="/brand/manifesto-cover-600.webp 600w, /brand/manifesto-cover-1200.webp 1200w"
          sizes="(min-width: 1024px) 420px, (min-width: 768px) 280px, min(70vw, 260px)"
          width={1200}
          height={1658}
          loading="lazy"
          decoding="async"
          alt={manifestoCoverAlt}
          className="h-auto w-full rounded-lg border border-white/10 shadow-xl shadow-brand-blue/15"
        />
        {manifestoPdfHref ? (
          <figcaption className="mt-3 text-center md:text-left">
            <a
              href={manifestoPdfHref}
              download="manifesto-john-upan-odey.pdf"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-red underline decoration-2 underline-offset-4 hover:decoration-4"
            >
              Download the manifesto
            </a>
          </figcaption>
        ) : null}
      </figure>
      <ol className="grid gap-10 md:col-start-1 md:row-start-2 md:mt-10 lg:col-span-7">
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
