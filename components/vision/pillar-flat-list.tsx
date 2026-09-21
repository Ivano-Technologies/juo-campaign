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
          key={pillar}
          className={
            visible
              ? "border border-brand-white px-4 py-3 text-brand-white"
              : undefined
          }
        >
          {visible ? (
            <>
              <span className="mr-3 text-xs tracking-[0.18em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-lg">{pillar}</span>
            </>
          ) : (
            pillar
          )}
        </li>
      ))}
    </ol>
  );
}
