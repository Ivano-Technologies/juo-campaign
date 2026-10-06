/**
 * IVA-128 — homepage hero stills. Only the first still is the LCP image.
 * Other carousel frames stay out of the document until they are shown
 * (or the LCP still has loaded, which reveals the next frame).
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

/** After the LCP still decodes, start the next frame without competing at first paint. */
export function nextHeroStillIndex(
  loadedIndex: number,
  slideCount: number,
): number | null {
  if (
    !Number.isInteger(loadedIndex) ||
    !Number.isInteger(slideCount) ||
    loadedIndex !== 0 ||
    slideCount < 2
  ) {
    return null;
  }
  return 1;
}
