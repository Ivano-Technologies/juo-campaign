import Image from "next/image";
import { placeholderById } from "@/lib/placeholders";

const workshop = placeholderById("vision-youth-talent");
const waterfall = placeholderById("vision-tourism");
const dashboard = placeholderById("vision-technology");

export function HomeInitiatives() {
  return (
    <section aria-labelledby="featured-initiatives-heading">
      <div className="grid md:grid-cols-3">
        <article className="flex min-h-[18rem] flex-col justify-center bg-brand-white px-10 py-14 text-center">
          <h3 className="font-serif text-2xl font-bold tracking-[0.08em] text-navy uppercase">
            Youth Skills &amp; Startup Fund
          </h3>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-muted">
            Training, funding and mentorship for the next generation of
            entrepreneurs.
          </p>
        </article>
        <figure className="relative min-h-[18rem]">
          <Image
            src={waterfall.src}
            alt={waterfall.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </figure>
        <article className="flex min-h-[18rem] flex-col justify-center bg-brand-white px-10 py-14 text-center">
          <h3 className="font-serif text-2xl font-bold tracking-[0.08em] text-navy uppercase">
            Tourism 2.0
          </h3>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-muted">
            Unlocking the economic potential of Obudu, Ikom, Boki, Calabar and
            beyond.
          </p>
        </article>
        <figure className="relative min-h-[18rem]">
          <Image
            src={workshop.src}
            alt={workshop.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </figure>
        <article className="flex min-h-[18rem] flex-col justify-center bg-brand-white px-8 py-12 text-center">
          <h2
            id="featured-initiatives-heading"
            className="font-serif text-4xl font-extrabold tracking-tight text-navy uppercase"
          >
            Featured
            <br />
            Initiatives
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-muted">
            Smart Schools Initiative — digital classrooms and future-ready
            education for Cross Riverians.
          </p>
        </article>
        <figure className="relative min-h-[18rem]">
          <Image
            src={dashboard.src}
            alt={dashboard.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
