export const mediaBase = "/media/2026";

export const placeholderSlots = [
  {
    id: "hero-full-bleed",
    src: `${mediaBase}/F6FA4786-A1FE-415C-9980-199A9F25ACEF_11zon.webp`,
    file: "F6FA4786-A1FE-415C-9980-199A9F25ACEF_11zon.webp",
    alt: "John Upan Odey Jnr walking with supporters at a Cross River campaign gathering",
    usedOn: "Home hero",
    fit: "cover",
  },
  {
    id: "challenges-cutout",
    src: `${mediaBase}/1F60D230-79DB-45BC-AC19-1911823C1C02-Background-Removed-Background-Removed.png`,
    file: "1F60D230-79DB-45BC-AC19-1911823C1C02-Background-Removed-Background-Removed.png",
    alt: "John Upan Odey Jnr reaching out — campaign portrait with background removed",
    usedOn: "Challenges split",
    fit: "contain",
  },
  {
    id: "together-collage-1",
    src: `${mediaBase}/AFA4FC12-2414-4B4E-A96D-62B98BD104D2_11zon.webp`,
    file: "AFA4FC12-2414-4B4E-A96D-62B98BD104D2_11zon.webp",
    alt: "Crowd forming the words A NEW CRS at Cross River National Park",
    usedOn: "Together banner",
    fit: "cover",
  },
  {
    id: "together-collage-2",
    src: `${mediaBase}/JUO-IMAGES_11zon-1.webp`,
    file: "JUO-IMAGES_11zon-1.webp",
    alt: "John Upan Odey Jnr greeting delegates at an NDC gathering",
    usedOn: "Together banner",
    fit: "cover",
  },
  {
    id: "vision-tourism",
    src: `${mediaBase}/27A82FA7-B6A9-476C-9B0C-6FCEB917C219_11zon.webp`,
    file: "27A82FA7-B6A9-476C-9B0C-6FCEB917C219_11zon.webp",
    alt: "Waterfalls in Cross River, a tourism destination",
    usedOn: "Vision card: Tourism",
    fit: "cover",
  },
  {
    id: "vision-agriculture",
    src: `${mediaBase}/5F0EB210-D0AB-4146-8029-EBEF2AC63C00_11zon.webp`,
    file: "5F0EB210-D0AB-4146-8029-EBEF2AC63C00_11zon.webp",
    alt: "Green highland farms and a winding road across Cross River hills",
    usedOn: "Vision card: Agriculture",
    fit: "cover",
  },
  {
    id: "vision-youth-talent",
    src: `${mediaBase}/3CA1D02E-B474-46D3-BD4D-3069550245EE_11zon.webp`,
    file: "3CA1D02E-B474-46D3-BD4D-3069550245EE_11zon.webp",
    alt: "Young people in a skills workshop, building and creating",
    usedOn: "Vision card: Youth talent",
    fit: "cover",
  },
  {
    id: "vision-culture",
    src: `${mediaBase}/FB_IMG_1782401373289.jpg`,
    file: "FB_IMG_1782401373289.jpg",
    alt: "Community meeting under a tree with traditional leadership",
    usedOn: "Vision card: Culture",
    fit: "cover",
  },
  {
    id: "vision-technology",
    src: `${mediaBase}/22395444-4525-4145-8116-C12B833F38B3_11zon.webp`,
    file: "22395444-4525-4145-8116-C12B833F38B3_11zon.webp",
    alt: "Students in a Cross River computer laboratory",
    usedOn: "Vision card: Technology",
    fit: "cover",
  },
  {
    id: "vision-strategic-location",
    src: `${mediaBase}/814EA178-8DCD-4369-9FD7-D94EE6904D49_11zon.webp`,
    file: "814EA178-8DCD-4369-9FD7-D94EE6904D49_11zon.webp",
    alt: "Destination Cross River — the nation’s paradise, a gateway for investment",
    usedOn: "Vision card: Strategic location",
    fit: "cover",
  },
  {
    id: "meet-cutout-1",
    src: `${mediaBase}/9C79A72F-DCCC-4AEB-9F19-428670710578-Background-Removed.png`,
    file: "9C79A72F-DCCC-4AEB-9F19-428670710578-Background-Removed.png",
    alt: "John Upan Odey Jnr, smiling campaign portrait",
    usedOn: "Meet John Upan Odey",
    fit: "cover",
  },
  {
    id: "meet-cutout-2",
    src: `${mediaBase}/47618FAD-5069-4350-BC38-C4278E0B58CE_11zon-Background-Removed.png`,
    file: "47618FAD-5069-4350-BC38-C4278E0B58CE_11zon-Background-Removed.png",
    alt: "John Upan Odey Jnr in traditional attire",
    usedOn: "Meet John Upan Odey",
    fit: "cover",
  },
  {
    id: "meet-cutout-3",
    src: `${mediaBase}/D992271D-2B3E-45B2-A598-C63843DD7C18-Background-Removed.png`,
    file: "D992271D-2B3E-45B2-A598-C63843DD7C18-Background-Removed.png",
    alt: "John Upan Odey Jnr in a navy suit",
    usedOn: "Meet John Upan Odey",
    fit: "cover",
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
