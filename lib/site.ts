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
  email: "upanodey@yahoo.com",
  phoneDisplay: "+234 813 799 5391",
  phoneHref: "tel:+2348137995391",
  domain: "votejohnupanodey.com",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/john-upan-odey", label: "Who is JUO" },
  { href: "/policies", label: "Policies" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/join", label: "Join" },
  { href: "/donate", label: "Donate" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const primaryCtas = [
  { href: "/join", label: "Join the Movement" },
  { href: "/donate", label: "Donate" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof navItems)[number]["href"];
export type PrimaryCtaHref = (typeof primaryCtas)[number]["href"];

export function isNavActive(pathname: string, href: NavHref): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
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
  "Executive Director, General Services — FirstTrust Mortgage Bank Plc",
  "Former Chief Executive Officer — Hyers Capital Ltd",
  "Independent Director",
] as const;

export const policyPillars = [
  "Power",
  "Agriculture",
  "Jobs",
  "Education",
  "Healthcare",
  "Infrastructure",
  "Tourism",
  "Governance",
  "Local Prosperity",
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
  return `${title} | ${site.name}`;
}
