import { pageSeoTitle } from "@/lib/brand-seo";

export const site = {
  name: "John Upan Odey Jnr",
  shortName: "JUO",
  tagline: "A Fresh Start",
  unityLine: "One People, One Cross River",
  prosperityLine: "We produce. We process. We prosper.",
  agenda: "Prosperity Agenda 2027–2031",
  office: "NDC Governorship Candidate, Cross River State",
  election: "2027",
  origin: "Obudu, Cross River State",
  age: 48,
  domain: "votejohnupanodey.com",
} as const;

/** www-primary canonical origin. Apex redirects to www. */
export const canonicalOrigin = `https://www.${site.domain}` as const;

/**
 * Locked SiteHeader chrome — text links, never pills.
 * HOME · THE VISION · MANIFESTO · MEET YOUR REPS · DIASPORA CONNECT · DONATE
 */
export const wpNavItems = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "The Vision" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/meet-your-reps", label: "Meet Your Reps" },
  { href: "/diaspora-connect", label: "Diaspora Connect" },
  { href: "/donate", label: "Donate" },
] as const;

/** Existing campaign pages — footer / stubs, not the WP header. */
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/john-upan-odey", label: "Who is JUO" },
  { href: "/policies", label: "Policies" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/join", label: "Join" },
  { href: "/donate", label: "Donate" },
  { href: "/news", label: "News" },
  { href: "/posters", label: "Poster Gallery" },
  { href: "/photos", label: "Photo Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "The Vision" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/meet-your-reps", label: "Meet Your Reps" },
  { href: "/diaspora-connect", label: "Diaspora Connect" },
  { href: "/donate", label: "Donate" },
  { href: "/join", label: "Join the Movement" },
  { href: "/news", label: "Community" },
  { href: "/posters", label: "Poster Gallery" },
  { href: "/photos", label: "Photo Gallery" },
] as const;

export const footerAboutLinks = [
  { href: "/john-upan-odey", label: "Who is JUO" },
  { href: "/odey-archibong", label: "Odey Archibong" },
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/privacy", label: "Privacy Notice" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590512712490",
    icon: "facebook",
  },
  {
    name: "X",
    href: "https://x.com/johnupanodey",
    icon: "x",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@johnupanodey",
    icon: "youtube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/johnupanodey",
    icon: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@johnupanodey",
    icon: "tiktok",
  },
] as const;

export const primaryCtas = [
  { href: "/join", label: "Join the Movement" },
  { href: "/donate", label: "Donate" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof navItems)[number]["href"];
export type WpNavHref = (typeof wpNavItems)[number]["href"];
export type PrimaryCtaHref = (typeof primaryCtas)[number]["href"];
export type SocialIcon = (typeof socialLinks)[number]["icon"];

export function isNavActive(pathname: string, href: string): boolean {
  const path = href.split("#")[0] || "/";
  if (path === "/") {
    return pathname === "/" && !href.includes("#");
  }
  return pathname === path || pathname.startsWith(`${path}/`);
}

export const education = [
  {
    school: "University of Uyo",
    credential: "Bachelor’s degree (Microbiology)",
  },
  {
    school: "University of Ilorin",
    credential: "Master of Business Administration (MBA)",
  },
  {
    school: "Harvard Kennedy School",
    credential: "Executive certificate, Infrastructure in a Market Economy",
  },
] as const;

export const currentRoles = [
  "Executive Director, General Services, FirstTrust Mortgage Bank Plc",
  "Former Chief Executive Officer, Hyers Capital Ltd",
  "Independent Director",
] as const;

export const crossRiverLgas = [
  "Abi",
  "Akamkpa",
  "Akpabuyo",
  "Bakassi",
  "Bekwarra",
  "Biase",
  "Boki",
  "Calabar Municipal",
  "Calabar South",
  "Etung",
  "Ikom",
  "Obanliku",
  "Obubra",
  "Obudu",
  "Odukpani",
  "Ogoja",
  "Yakurr",
  "Yala",
  "Diaspora / outside Cross River",
] as const;

export const joinInterests = [
  "Volunteer in my ward or LGA",
  "Organise and mobilise",
  "Support with professional skills",
  "Diaspora connect",
  "Media and communications",
  "Donate",
  "Other",
] as const;

export function pageTitle(title: string): string {
  return pageSeoTitle(title);
}
