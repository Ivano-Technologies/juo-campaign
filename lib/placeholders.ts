export const placeholderSlots = [
  {
    id: "hero-full-bleed",
    src: "/placeholders/hero-full-bleed.svg",
    todo: "TODO: Hostinger 2026 hero photo",
    usedOn: "Home hero",
  },
  {
    id: "challenges-cutout",
    src: "/placeholders/challenges-cutout.svg",
    todo: "TODO: Hostinger 2026 candidate cutout",
    usedOn: "Challenges split",
  },
  {
    id: "together-collage-1",
    src: "/placeholders/together-collage-1.svg",
    todo: "TODO: Hostinger 2026 collage photo 1",
    usedOn: "Together banner",
  },
  {
    id: "together-collage-2",
    src: "/placeholders/together-collage-2.svg",
    todo: "TODO: Hostinger 2026 collage photo 2",
    usedOn: "Together banner",
  },
  {
    id: "vision-tourism",
    src: "/placeholders/vision-tourism.svg",
    todo: "TODO: Hostinger 2026 tourism photo",
    usedOn: "Vision card: Tourism",
  },
  {
    id: "vision-agriculture",
    src: "/placeholders/vision-agriculture.svg",
    todo: "TODO: Hostinger 2026 agriculture photo",
    usedOn: "Vision card: Agriculture",
  },
  {
    id: "vision-youth-talent",
    src: "/placeholders/vision-youth-talent.svg",
    todo: "TODO: Hostinger 2026 youth talent photo",
    usedOn: "Vision card: Youth talent",
  },
  {
    id: "vision-culture",
    src: "/placeholders/vision-culture.svg",
    todo: "TODO: Hostinger 2026 culture photo",
    usedOn: "Vision card: Culture",
  },
  {
    id: "vision-technology",
    src: "/placeholders/vision-technology.svg",
    todo: "TODO: Hostinger 2026 technology photo",
    usedOn: "Vision card: Technology",
  },
  {
    id: "vision-strategic-location",
    src: "/placeholders/vision-strategic-location.svg",
    todo: "TODO: Hostinger 2026 location photo",
    usedOn: "Vision card: Strategic location",
  },
  {
    id: "meet-cutout-1",
    src: "/placeholders/meet-cutout-1.svg",
    todo: "TODO: Hostinger 2026 meet cutout 1",
    usedOn: "Meet John Upan Odey",
  },
  {
    id: "meet-cutout-2",
    src: "/placeholders/meet-cutout-2.svg",
    todo: "TODO: Hostinger 2026 meet cutout 2",
    usedOn: "Meet John Upan Odey",
  },
  {
    id: "meet-cutout-3",
    src: "/placeholders/meet-cutout-3.svg",
    todo: "TODO: Hostinger 2026 meet cutout 3",
    usedOn: "Meet John Upan Odey",
  },
] as const;

export type PlaceholderId = (typeof placeholderSlots)[number]["id"];

export function placeholderById(
  id: PlaceholderId,
): (typeof placeholderSlots)[number] {
  const slot = placeholderSlots.find((item) => item.id === id);
  if (!slot) {
    throw new Error(`Unknown placeholder slot: ${id}`);
  }
  return slot;
}
