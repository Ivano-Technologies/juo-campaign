import Image from "next/image";
import { campaignGraphics } from "@/lib/photos";

type CampaignGraphicsGalleryProps = {
  heading: string;
  headingLevel?: "h2" | "h3";
};

export function CampaignGraphicsGallery({
  heading,
  headingLevel = "h2",
}: CampaignGraphicsGalleryProps) {
  const Heading = headingLevel;

  return (
    <div>
      <Heading
        className={
          headingLevel === "h3"
            ? "font-serif text-2xl font-extrabold text-brand-blue sm:text-3xl"
            : "font-serif text-2xl text-ink sm:text-3xl"
        }
      >
        {heading}
      </Heading>
      <ul className="mt-8 grid gap-8 md:grid-cols-2">
        {campaignGraphics.map((graphic) => (
          <li key={graphic.id}>
            <figure>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-blue/15 bg-brand-white">
                <Image
                  src={graphic.src}
                  alt={graphic.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <figcaption
                className={
                  headingLevel === "h3"
                    ? "mt-4 text-sm text-muted"
                    : "mt-4 font-serif text-xl text-ink"
                }
              >
                {graphic.title}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
