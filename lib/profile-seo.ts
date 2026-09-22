import { canonicalOrigin, education, site, socialLinks } from "@/lib/site";

/** IVA-20 profile SEO. Title uses Brand name + office; body stays WP-parity. */
export const profilePath = "/john-upan-odey" as const;

export const profileSeo = {
  title: "Who is John Upan Odey | NDC Governorship Candidate for Cross River State.",
  description:
    "Meet John Upan Odey, banker from Obudu, NDC governorship candidate for Cross River. Education, career, and why he serves.",
  canonical: `${canonicalOrigin}${profilePath}`,
  jobTitle: "NDC Governorship Candidate for Cross River State 2027",
  birthPlace: "Obudu (Cross River)",
  ogImage: {
    path: "/brand/juo-official-3.jpg",
    url: `${canonicalOrigin}/brand/juo-official-3.jpg`,
    width: 480,
    height: 640,
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
