export function HomeInitiatives() {
  return (
    <section aria-labelledby="featured-initiatives-heading">
      <div className="grid md:grid-cols-3">
        <article className="flex min-h-[18rem] flex-col justify-center bg-brand-white px-6 py-14 text-center sm:px-10">
          <h3 className="font-serif text-2xl font-bold tracking-[0.08em] text-brand-blue uppercase">
            Youth Skills &amp; Startup Fund
          </h3>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-muted">
            Training, funding and mentorship for the next generation of
            entrepreneurs.
          </p>
        </article>
        <div className="flex min-h-[18rem] items-center justify-center bg-brand-blue px-6 py-14 text-center">
          <p className="font-serif text-2xl font-extrabold tracking-tight text-brand-white uppercase">
            Tourism 2.0
          </p>
        </div>
        <article className="flex min-h-[18rem] flex-col justify-center bg-brand-white px-6 py-14 text-center sm:px-10">
          <h3 className="font-serif text-2xl font-bold tracking-[0.08em] text-brand-blue uppercase">
            Tourism 2.0
          </h3>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-muted">
            Unlocking the economic potential of Obudu, Ikom, Boki, Calabar and
            beyond.
          </p>
        </article>
        <div className="flex min-h-[18rem] items-center justify-center bg-brand-red px-6 py-14 text-center">
          <p className="font-serif text-2xl font-extrabold tracking-tight text-brand-white uppercase">
            Smart Schools
          </p>
        </div>
        <article className="flex min-h-[18rem] flex-col justify-center bg-brand-white px-8 py-12 text-center">
          <h2
            id="featured-initiatives-heading"
            className="font-serif text-4xl font-extrabold tracking-tight text-brand-blue uppercase"
          >
            Featured{" "}
            <br />
            Initiatives
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-muted">
            Smart Schools Initiative: digital classrooms and future-ready
            education for Cross Riverians.
          </p>
        </article>
        <div className="flex min-h-[18rem] items-center justify-center bg-brand-blue px-6 py-14 text-center">
          <p className="font-serif text-2xl font-extrabold tracking-tight text-brand-white uppercase">
            Citizens Dashboard
          </p>
        </div>
      </div>
    </section>
  );
}
