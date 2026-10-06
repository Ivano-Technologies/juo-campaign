/**
 * IVA-128 — homepage hero stills. Only the first still is the LCP image.
 * Other carousel frames stay out of the document until they are shown
 * or prefetched as N+1 of the active frame.
 */
export function shouldLoadHeroStill(
  slideIndex: number,
  activeIndex: number,
  loadedIndexes: ReadonlySet<number>,
): boolean {
  if (!Number.isInteger(slideIndex) || slideIndex < 0) {
    return false;
  }
  if (!Number.isInteger(activeIndex) || activeIndex < 0) {
    return false;
  }
  return slideIndex === activeIndex || loadedIndexes.has(slideIndex);
}

/**
 * Prefetch target for the still after `activeIndex`, wrapping last → first.
 * Returns null when there is no other frame to warm (single-slide carousel
 * or invalid indexes). First paint must not call this for index 0 until the
 * LCP still has decoded — callers enqueue N+1 on load and on every advance.
 */
export function nextHeroStillIndex(
  activeIndex: number,
  slideCount: number,
): number | null {
  if (
    !Number.isInteger(activeIndex) ||
    !Number.isInteger(slideCount) ||
    activeIndex < 0 ||
    slideCount < 2 ||
    activeIndex >= slideCount
  ) {
    return null;
  }
  return (activeIndex + 1) % slideCount;
}
