import Image from "next/image";
import { PrimaryCtas } from "@/components/primary-ctas";
import { brand } from "@/lib/brand";
import { campaignHashtag } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeGetInvolved() {
  return (
    <section className="bg-brand-blue text-brand-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          <Image
            src={brand.marks.officialPoster}
            alt="Official campaign poster: A Fresh Start, One People, One Cross River"
            width={2174}
            height={2892}
            className="h-48 w-auto max-w-full object-contain rounded-lg border border-brand-white/20 sm:h-56"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
              Get involved
            </p>
            <h2 className="mt-3 font-serif text-4xl">
              Join the Movement. Shape the future.
            </h2>
            <p className="mt-3 max-w-xl text-brand-white/80">
              {site.unityLine}. Volunteer, organise, or support the work in naira
              on the Donate page. {campaignHashtag}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-white">
              {brand.slogan}
            </p>
            <p className="mt-2 max-w-xl text-xs tracking-wide text-brand-white/80">
              {brand.hashtags.join(" · ")}
            </p>
          </div>
        </div>
        <PrimaryCtas />
      </div>
    </section>
  );
}
