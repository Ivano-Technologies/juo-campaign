import { campaignHashtag } from "@/lib/home";

export function HomeTogetherBanner() {
  return (
    <section className="bg-brand-white py-12 sm:py-16">
      <div className="px-6 text-center">
        <h2 className="font-serif text-[1.65rem] font-extrabold tracking-tight text-brand-blue uppercase sm:text-5xl">
          Together a new CRS is possible
        </h2>
        <p className="mt-3 text-sm font-semibold tracking-[0.22em] text-brand-red">
          {campaignHashtag}
        </p>
      </div>
    </section>
  );
}
