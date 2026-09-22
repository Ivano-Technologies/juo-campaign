import { canonicalOrigin, education, site, socialLinks } from "@/lib/site";

/** IVA-20 — Brand-locked profile SEO. Home title/meta/body stay WP-parity. */
export const profilePath = "/john-upan-odey" as const;

export const profileSeo = {
  title: "Who is John Upan Odey Jnr | NDC Candidate, Cross River 2027",
  description:
    "Meet John Upan Odey Jnr — banker from Obudu, NDC governorship candidate for Cross River 2027. Education, career, and why he serves.",
  canonical: `${canonicalOrigin}${profilePath}`,
  jobTitle: "NDC Governorship Candidate for Cross River State 2027",
  birthPlace: "Obudu (Cross River)",
  ogImage: {
    path: "/brand/juo-official-1.jpg",
    url: `${canonicalOrigin}/brand/juo-official-1.jpg`,
    width: 912,
    height: 1280,
    alt: "Official portrait of John Upan Odey Jnr",
  },
} as const;

type SchemaPlace = {
  "@type": "Place";
  name: string;
};

type SchemaCollege = {
  "@type": "CollegeOrUniversity";
  name: string;
};

export type ProfilePersonJsonLd = {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  image: string;
  birthPlace: SchemaPlace;
  alumniOf: SchemaCollege[];
  jobTitle: string;
  sameAs: string[];
};

export function profilePersonJsonLd(): ProfilePersonJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: profileSeo.canonical,
    image: profileSeo.ogImage.url,
    birthPlace: {
      "@type": "Place",
      name: profileSeo.birthPlace,
    },
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.school,
    })),
    jobTitle: profileSeo.jobTitle,
    sameAs: socialLinks.map((link) => link.href),
  };
}
