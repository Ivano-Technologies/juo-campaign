import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and media from the John Upan Odey Jnr campaign. Real updates only — no demo posts.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Media centre"
        title="News"
        lede="This is the real news room for the campaign. Demo law posts from the old WordPress theme are not coming across. Verified speeches, press notes, and gallery items will land here after Brand photos and copy."
      >
        <Button href="/contact" variant="gold">
          Contact
        </Button>
        <Button href="/manifesto" variant="ghost">
          Manifesto
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-dashed border-line bg-brand-white p-8 text-center">
          <h2 className="font-serif text-2xl">No stories yet</h2>
          <p className="mt-3 text-muted">
            When the first campaign-approved item is ready, it will appear here.
            There is no placeholder article on this site.
          </p>
        </div>
      </section>
    </>
  );
}
