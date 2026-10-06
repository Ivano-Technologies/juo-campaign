import type { Metadata } from "next";

/**
 * Google Search Console HTML-tag tokens are a single unspaced token.
 * Reject empty / quoted / markup values so we never emit a blank or
 * broken `google-site-verification` meta tag.
 */
const GOOGLE_SITE_VERIFICATION_TOKEN = /^[A-Za-z0-9_-]+$/;

/**
 * HTML-tag token from Google Search Console.
 * Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` on Vercel Production after
 * the token is copied from Search Console → HTML tag. Empty, unset, or
 * invalid values load no verification meta.
 */
export function getGoogleSiteVerification(): string | null {
  const raw = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  if (typeof raw !== "string") {
    return null;
  }

  const token = raw.trim();
  if (!token || !GOOGLE_SITE_VERIFICATION_TOKEN.test(token)) {
    return null;
  }

  return token;
}

/**
 * Spread into root `metadata`. Returns `{}` when unset so Next does not
 * render `<meta name="google-site-verification" content="">`.
 */
export function googleVerificationMetadata(): Pick<Metadata, "verification"> {
  const token = getGoogleSiteVerification();
  if (!token) {
    return {};
  }

  return { verification: { google: token } };
}
