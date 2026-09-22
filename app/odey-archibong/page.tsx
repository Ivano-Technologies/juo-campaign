import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import {
  archibongBody,
  archibongHashtags,
  archibongKicker,
  archibongLede,
  archibongPageDescription,
  archibongPageTitle,
  archibongPath,
  archibongSlogan,
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
        <Button href="/john-upan-odey" variant="white">
          Who is John Upan Odey Jnr
        </Button>
        <Button href="/vision" variant="ghost">
          The Vision
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>

      <section className="mx-auto max-w-3xl space-y-8 bg-brand-white px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-dashed border-line bg-brand-white p-8">
          <h2 className="font-serif text-2xl text-ink">Story status</h2>
          {archibongBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 font-serif text-xl font-extrabold tracking-tight text-brand-blue uppercase">
            {archibongSlogan}
          </p>
          <p className="mt-4 text-sm tracking-wide text-muted">
            {archibongHashtags.join(" · ")}
          </p>
        </div>
      </section>
    </>
  );
}
