import { visionPillars } from "@/lib/vision";

type PillarFlatListProps = {
  className?: string;
  visible?: boolean;
};

export function PillarFlatList({
  className = "",
  visible = false,
}: PillarFlatListProps) {
  return (
    <ol
      className={
        visible
          ? `grid gap-3 ${className}`.trim()
          : `sr-only ${className}`.trim()
      }
    >
      {visionPillars.map((pillar, index) => (
        <li
          key={pillar.slug}
          className={
            visible
              ? "border border-brand-white/80 px-4 py-3 text-brand-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.85),_0_2px_10px_rgb(0_0_0_/_0.55)]"
              : undefined
          }
        >
          {visible ? (
            <>
              <span className="mr-3 text-xs tracking-[0.18em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <a
                href={`#${pillar.slug}`}
                className="inline-flex min-h-11 items-center font-serif text-lg hover:underline"
              >
                {pillar.name}
              </a>
            </>
          ) : (
            pillar.name
          )}
        </li>
      ))}
    </ol>
  );
}
