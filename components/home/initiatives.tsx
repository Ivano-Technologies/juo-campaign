import { Reveal } from "@/components/motion/reveal";

const cardClass =
  "motion-card flex h-[18rem] min-w-0 items-center justify-center px-6 text-center sm:px-10";

const headingClass =
  "w-full font-serif text-2xl font-bold tracking-[0.08em] uppercase";

const initiatives = [
  {
    title: "Youth Skills & Startup Fund",
    tone: "white",
    delayMs: 0,
  },
  {
    title: "Healthcare & Social Protection",
    tone: "blue",
    delayMs: 80,
  },
  {
    title: "Tourism 2.0",
    tone: "white",
    delayMs: 160,
  },
  {
    title: "Smart Schools",
    tone: "blue",
    delayMs: 80,
  },
  // TODO: placeholder pending BA approval
  {
    title: "Modern Infrastructure",
    tone: "white",
    delayMs: 160,
  },
  {
    title: "Citizens Dashboard",
    tone: "blue",
    delayMs: 240,
  },
] as const;

export function HomeInitiatives() {
  return (
    <section
      className="relative"
      aria-labelledby="featured-initiatives-heading"
    >
      <h2 id="featured-initiatives-heading" className="sr-only">
        Featured Initiatives
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((item) => (
          <Reveal
            key={item.title}
            delayMs={item.delayMs}
            className={`${cardClass} ${
              item.tone === "blue" ? "bg-brand-blue" : "bg-brand-white"
            }`}
          >
            <h3
              className={`${headingClass} ${
                item.tone === "blue" ? "text-brand-white" : "text-brand-blue"
              }`}
            >
              {item.title}
            </h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
