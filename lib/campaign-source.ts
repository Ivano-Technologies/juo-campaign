const CAMPAIGN_SOURCE_MAX_LENGTH = 64;
const CAMPAIGN_SOURCE_PATTERN = /^[a-z0-9][a-z0-9._-]*$/;
const SESSION_STORAGE_KEY = "juo_join_campaign_source";

export type SearchParamValue = string | string[] | undefined;

/**
 * Normalise a join-page attribution tag from `?source=` or `utm_source`.
 * Rejects empty values, emails, and anything that is not a short slug.
 */
export function normalizeCampaignSource(raw: unknown): string | null {
  if (typeof raw !== "string") {
    return null;
  }

  const trimmed = raw.trim();
  if (!trimmed || trimmed.includes("@") || trimmed.length > 200) {
    return null;
  }

  const slug = trimmed
    .toLowerCase()
    .replace(/[\s]+/g, "_")
    .replace(/[^a-z0-9._-]/g, "");

  if (
    slug.length < 1 ||
    slug.length > CAMPAIGN_SOURCE_MAX_LENGTH ||
    !CAMPAIGN_SOURCE_PATTERN.test(slug)
  ) {
    return null;
  }

  return slug;
}

function firstSearchParam(value: SearchParamValue): string | null {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value) && typeof value[0] === "string") {
    return value[0];
  }
  return null;
}

/**
 * Prefer `?source=` (field tags) over `utm_source` when both are present.
 */
export function campaignSourceFromSearchParams(params: {
  source?: SearchParamValue;
  utm_source?: SearchParamValue;
}): string | null {
  return (
    normalizeCampaignSource(firstSearchParam(params.source)) ??
    normalizeCampaignSource(firstSearchParam(params.utm_source))
  );
}

export function readStoredCampaignSource(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return normalizeCampaignSource(sessionStorage.getItem(SESSION_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function persistCampaignSource(value: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, value);
  } catch {
    // Private mode or quota — attribution still works from the URL on this load.
  }
}
