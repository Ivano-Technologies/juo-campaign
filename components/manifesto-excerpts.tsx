import { manifestoExcerpts } from "@/lib/manifesto";

type ManifestoExcerptsProps = {
  heading?: string;
};

export function ManifestoExcerpts({ heading }: ManifestoExcerptsProps) {
  return (
    <div>
      {heading ? (
        <h2 className="font-serif text-3xl text-ink">{heading}</h2>
      ) : null}
      <div className={heading ? "mt-10 grid gap-12" : "grid gap-12"}>
        {manifestoExcerpts.map((excerpt) => (
          <article key={excerpt.title}>
            <h3 className="font-serif text-2xl tracking-tight text-ink uppercase">
              {excerpt.title}
            </h3>
            {excerpt.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[1.05rem] leading-7 text-ink"
              >
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
