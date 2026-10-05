const GA4_MEASUREMENT_ID = /^G-[A-Z0-9]+$/i;

/** Stable GA4 event: successful Join the Movement submit (IVA-102). Mark as a key event. */
export const VOLUNTEER_FORM_SUBMIT_EVENT = "volunteer_form_submit" as const;

/** Lightweight first interaction on the join form (not a key event). */
export const VOLUNTEER_FORM_START_EVENT = "volunteer_form_start" as const;

export const JOIN_FORM_ID = "join" as const;

type GaEventParam = string | number | boolean;
type GaEventParams = Record<string, GaEventParam | undefined>;

type GtagEventFn = (
  command: "event",
  eventName: string,
  params?: Record<string, GaEventParam>,
) => void;

declare global {
  interface Window {
    gtag?: GtagEventFn;
  }
}

/**
 * Returns the GA4 Measurement ID when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is a
 * non-empty `G-XXXXXXXX` value. Empty or invalid values load no gtag.
 */
export function getGaMeasurementId(): string | null {
  const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (typeof raw !== "string") {
    return null;
  }

  const measurementId = raw.trim();
  if (!measurementId || !GA4_MEASUREMENT_ID.test(measurementId)) {
    return null;
  }

  return measurementId;
}

/**
 * Fire a GA4 event when gtag is present. No-ops locally and on Preview
 * when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset. Never send PII.
 */
export function trackGaEvent(eventName: string, params?: GaEventParams): void {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = window.gtag;
  if (typeof gtag !== "function") {
    return;
  }

  const cleaned: Record<string, GaEventParam> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") {
        cleaned[key] = value;
      }
    }
  }

  gtag("event", eventName, cleaned);
}
