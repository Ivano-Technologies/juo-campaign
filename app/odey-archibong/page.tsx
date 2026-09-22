import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import {
  archibongBody,
  archibongCloseLead,
  archibongCloseLockup,
  archibongHashtags,
  archibongKicker,
  archibongLede,
  archibongPageDescription,
  archibongPageTitle,
  archibongPath,
  archibongTitle,
} from "@/lib/archibong";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: archibongPageTitle,
  },
  description: archibongPageDescription,
  ...pageShareTags(archibongPageTitle, archibongPageDescription, archibongPath),
};

export default function OdeyArchibongPage() {
  return (
    <>
      <PageHero
        kicker={archibongKicker}
        title={archibongTitle}
        lede={archibongLede}
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

      <section className="mx-auto max-w-3xl space-y-8 bg-brand-white px-4 py-16 sm:px-6">
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
      </section>
    </>
  );
}
