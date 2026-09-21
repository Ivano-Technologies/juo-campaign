import Image from "next/image";
import { PillarFlatList } from "@/components/vision/pillar-flat-list";
import { PillarOrbit } from "@/components/vision/pillar-orbit";
import { visionOrbitAccent, visionOrbitBackdrop } from "@/lib/vision";

export function VisionPillarShowcase() {
  return (
    <div className="relative isolate overflow-hidden text-brand-white">
      <Image
        src={visionOrbitBackdrop}
        alt="Destination Cross River monument on a future city roundabout"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <Image
        src={visionOrbitAccent}
        alt="People forming the words A NEW CRS at Cross River National Park"
        fill
        sizes="100vw"
        className="object-cover object-[center_15%] opacity-30"
      />
      <div className="absolute inset-0 bg-brand-blue/70 backdrop-blur-[2px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12">
        <PillarOrbit />
        <h3 className="mt-10 text-xs font-semibold tracking-[0.18em] text-brand-red uppercase">
          All ten pillars
        </h3>
        <PillarFlatList visible className="mt-4 sm:grid-cols-2" />
      </div>
    </div>
  );
}
