import { pageSeoTitle } from "@/lib/brand-seo";

export const donatePageTitle = pageSeoTitle("Donate");

export const donatePageDescription =
  "Support John Upan Odey’s Cross River 2027 campaign. Transfer in naira to the official campaign account published on this page. Online checkout for card and international giving is coming soon.";

export const donateHeroLede =
  "Support A Fresh Start for Cross River with a naira transfer to the official campaign account below. Card and international giving will open soon.";

export const donateSupportTitle = "Support a Fresh Start";
export const donateSupportBody = [
  "Campaign resources help organise, communicate, and reach Cross Riverians with a clear message: One People, One Cross River. We produce. We process. We prosper.",
  "Naira bank transfer is open through the official campaign account published on this page. Online checkout is coming soon for card and international giving.",
] as const;

export const donateBankTitle = "Bank transfer";
export const donateBankLead =
  "Use these official campaign details for naira transfers.";
export const donateBankFields = [
  { label: "Account name", key: "accountName" },
  { label: "Bank", key: "bank" },
  { label: "Account number", key: "accountNumber" },
] as const;
export const donateBankNote =
  "These are the only bank details published by the campaign. Do not send funds through unofficial accounts, social DMs, or individuals claiming to “collect for the campaign.”";

export const donateStatusTitle = "Giving status";
export const donateStatusLead = "Online donations: coming soon.";
export const donateStatusBody =
  "Card and international giving will be available soon. For naira giving now, use the official bank transfer details on this page.";

export const donateStayTitle = "How to stay connected";
export const donateStayLinks = [
  { href: "/join", label: "Join the Movement" },
  { href: "/diaspora-connect", label: "Diaspora Connect" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Questions" },
] as const;
export const donateStayClose =
  "Thank you for your support. When online giving opens, this page will explain how receipts are issued.";

export const donateTransparencyTitle = "Transparency note";
export const donateTransparencyBody =
  "Transparent Government starts with how a campaign asks for support: openly, lawfully, and without pressure. The bank details on this page are the official naira transfer path. We will publish full details when online giving opens.";
