import { togetherHeadline, togetherSubhead } from "@/lib/home";

export function HomeTogetherBanner() {
  return (
    <section className="bg-brand-white py-12 sm:py-16">
      <div className="px-6 text-center">
        <h2 className="font-serif text-[1.65rem] font-extrabold tracking-tight text-brand-blue uppercase sm:text-5xl">
          {togetherHeadline}
        </h2>
        <p className="mt-3 font-serif text-sm font-semibold tracking-[0.18em] text-brand-red uppercase sm:text-base">
          {togetherSubhead}
        </p>
      </div>
    </section>
  );
}
