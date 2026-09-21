"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PillarDial } from "@/components/vision/pillar-dial";
import { PillarFlatList } from "@/components/vision/pillar-flat-list";
import { PillarOrbit } from "@/components/vision/pillar-orbit";
import { PillarRoulette3d } from "@/components/vision/pillar-roulette-3d";
import { pillarTreatmentTabs, type PillarTreatment } from "@/lib/vision";

type VisionPillarShowcaseProps = {
  initialTreatment: PillarTreatment;
};

export function VisionPillarShowcase({
  initialTreatment,
}: VisionPillarShowcaseProps) {
  const router = useRouter();
  const [treatment, setTreatment] = useState<PillarTreatment>(initialTreatment);

  function selectTreatment(next: PillarTreatment) {
    setTreatment(next);
    router.replace(`/vision?pillars=${next}` as Route, { scroll: false });
  }

  return (
    <div className="mt-10 bg-brand-blue px-4 py-10 text-brand-white sm:px-8 sm:py-12">
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Pillar treatments"
      >
        {pillarTreatmentTabs.map((tab) => {
          const selected = tab.id === treatment;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`min-h-11 px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase ${
                selected
                  ? "bg-brand-red text-brand-white"
                  : "border border-brand-white text-brand-white"
              }`}
              onClick={() => selectTreatment(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel">
        {treatment === "orbit" ? <PillarOrbit /> : null}
        {treatment === "dial" ? <PillarDial /> : null}
        {treatment === "3d" ? <PillarRoulette3d /> : null}
      </div>

      <PillarFlatList />
    </div>
  );
}
