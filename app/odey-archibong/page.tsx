import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import {
  archibongBody,
  archibongCloseLead,
  archibongCloseLockup,
  archibongHashtags,
  archibongLede,
  archibongPageDescription,
  archibongPageTitle,
  archibongPath,
  archibongTitle,
} from "@/lib/archibong";
import { brand } from "@/lib/brand";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: archibongPageTitle,
  },
  description: archibongPageDescription,
  ...pageShareTags(archibongPageTitle, archibongPageDescription, archibongPath),
};

function ArchibongHeroWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden mix-blend-luminosity opacity-[0.1] sm:block"
    >
      <Image
        src={brand.portraits.official.src}
        alt=""
        width={brand.portraits.official.width}
        height={brand.portraits.official.height}
        className="absolute top-0 left-0 h-full w-1/2 object-cover object-top"
      />
      <Image
        src={brand.portraits.stellaOfficial.src}
        alt=""
        width={brand.portraits.stellaOfficial.width}
        height={brand.portraits.stellaOfficial.height}
        className="absolute top-0 right-0 h-full w-1/2 object-cover object-top"
      />
    </div>
  );
}

export default function OdeyArchibongPage() {
  return (
    <>
      <PageHero
        title={archibongTitle}
        lede={archibongLede}
        watermark={<ArchibongHeroWatermark />}
      >
        <Button href="/vision" variant="white">
          The Vision
        </Button>
        <Button href="/john-upan-odey" variant="ghost">
          Who is John Upan Odey Jnr
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl bg-brand-white px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="grid gap-6">
            <figure className="overflow-hidden border border-line bg-brand-blue">
              <Image
                src={brand.portraits.official.src}
                alt="John Upan Odey Jnr"
                width={brand.portraits.official.width}
                height={brand.portraits.official.height}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </figure>
            <figure className="overflow-hidden border border-line bg-brand-blue">
              <Image
                src={brand.portraits.stellaOfficial.src}
                alt="Apostle Dr. Stella Charles Archibong"
                width={brand.portraits.stellaOfficial.width}
                height={brand.portraits.stellaOfficial.height}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </figure>
          </div>

          <div className="space-y-8">
            {archibongBody.map((paragraph) => (
              <p key={paragraph} className="text-[1.05rem] leading-7 text-ink">
                {paragraph}
              </p>
            ))}

            <div className="border-t border-line pt-10">
              <p className="font-serif text-2xl font-extrabold tracking-tight text-brand-blue uppercase">
                {archibongCloseLead}
              </p>
              <p className="mt-2 font-serif text-2xl font-extrabold tracking-tight text-brand-blue uppercase">
                {archibongCloseLockup}
              </p>
              <p className="mt-6 text-sm tracking-wide text-muted">
                {archibongHashtags.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
