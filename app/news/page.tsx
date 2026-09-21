import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import {
  newsEmptyBody,
  newsEmptyTitle,
  newsPageDescription,
  newsPageTitle,
  newsReadyLinks,
  newsReadyTitle,
  newsroomBody,
  newsroomTitle,
} from "@/lib/news";

export const metadata: Metadata = {
  title: {
    absolute: newsPageTitle,
  },
  description: newsPageDescription,
};

export default function NewsPage() {
  return (
    <>
      <PageHero title="News" lede={newsroomBody[0]}>
        <Button href="/join" variant="white">
          Join the Movement
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
        <Button href="/vision" variant="ghost">
          The Vision
        </Button>
        <Button href="/manifesto" variant="ghost">
          Manifesto
        </Button>
      </PageHero>

      <section className="mx-auto max-w-3xl space-y-14 px-4 py-16 sm:px-6">
        <div>
          <h2 className="font-serif text-3xl text-ink">{newsroomTitle}</h2>
          {newsroomBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-line bg-brand-white p-8">
          <h2 className="font-serif text-2xl text-ink">{newsEmptyTitle}</h2>
          <p className="mt-3 text-[1.05rem] leading-7 text-muted">{newsEmptyBody}</p>

          <h3 className="mt-8 font-serif text-xl text-ink">{newsReadyTitle}</h3>
          <ul className="mt-4 grid gap-3">
            {newsReadyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-semibold text-brand-blue underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
