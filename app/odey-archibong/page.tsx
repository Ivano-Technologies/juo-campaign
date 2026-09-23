import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { OdeyArchibongColumns } from "@/components/odey-archibong-columns";
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
        <OdeyArchibongColumns
          paragraphs={archibongBody}
          closeLead={archibongCloseLead}
          closeLockup={archibongCloseLockup}
          hashtags={archibongHashtags}
        />
      </section>
    </>
  );
}
