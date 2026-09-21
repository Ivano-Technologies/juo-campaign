const GA4_MEASUREMENT_ID = /^G-[A-Z0-9]+$/i;

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
