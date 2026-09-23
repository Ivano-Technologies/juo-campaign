import { PillarFlatList } from "@/components/vision/pillar-flat-list";
import { PillarOrbit } from "@/components/vision/pillar-orbit";

export function VisionPillarShowcase() {
  return (
    <section
      id="brand-pillars"
      className="relative isolate overflow-hidden bg-brand-blue text-brand-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <PillarOrbit />
        <h3 className="mt-10 text-xs font-semibold tracking-[0.18em] text-brand-red uppercase">
          All five Brand pillars
        </h3>
        <PillarFlatList visible className="mt-4 sm:grid-cols-2" />
      </div>
    </section>
  );
}
