import { campaignHashtag } from "@/lib/home";
import { PlaceholderMedia } from "@/components/placeholder-media";

export function HomeTogetherBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-paper">
      <div className="grid min-h-[22rem] md:grid-cols-2">
        <PlaceholderMedia
          id="together-collage-1"
          className="min-h-[14rem]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <PlaceholderMedia
          id="together-collage-2"
          className="min-h-[14rem]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="absolute inset-0 bg-forest-deep/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-gold-soft">
          let’s change that
        </p>
        <h2 className="mt-4 font-serif text-4xl uppercase leading-tight sm:text-6xl">
          Together — a new CRS is possible
        </h2>
        <p className="mt-4 text-sm tracking-[0.22em] text-gold-soft">
          {campaignHashtag}
        </p>
      </div>
    </section>
  );
}
