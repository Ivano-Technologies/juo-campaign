/**
 * next/image `sizes` for chrome that is not full-viewport.
 * Values are CSS display widths; srcset handles device pixel ratio.
 */

/** Header JO keyline: h-10 / sm:h-12, aspect ~1.5 → ~60–72 CSS px wide. */
export const headerJoMarkSizes = "72px";

/** Challenges pane compact mark: h-12 / sm:h-14 / lg:h-16. */
export const challengesJoMarkSizes =
  "(min-width: 1024px) 96px, (min-width: 640px) 84px, 72px";

/** Footer lock-up: h-16 / sm:h-20, aspect ~3 → ~192–240 CSS px wide. */
export const footerJoLockupSizes = "(min-width: 640px) 240px, 192px";

/** Compact JO mark default (h-10). */
export const compactJoMarkSizes = "60px";

/**
 * NDC mark on Join (taller) and Manifesto.
 * Join: h-14 / sm:h-16 / lg:h-[4.5rem], aspect ~1.67 → ~94–120 CSS px.
 */
export const brandNdcSizes =
  "(min-width: 1024px) 120px, (min-width: 640px) 107px, 94px";

/**
 * Candidate lock-up beside NDC on Join / Manifesto.
 * Join: h-12 / sm:h-14 / lg:h-16, aspect ~3 → ~144–192 CSS px.
 */
export const brandCandidateLockupSizes =
  "(min-width: 1024px) 192px, (min-width: 640px) 168px, 144px";
