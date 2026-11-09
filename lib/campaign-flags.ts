/**
 * Single rollback switch after Dr Stella Charles Archibong withdrew.
 *
 * Keep her copy, portraits, posters and /odey-archibong in the repo.
 * Set this to true to restore the ticket, galleries, metadata and route.
 * Leave it false so none of that name, alt text, structured data or
 * sitemap entries is rendered.
 *
 * next.config.ts inlines this as NEXT_PUBLIC_SHOW_STELLA so the bundler
 * can drop the hidden copy from the production build.
 */
export const SHOW_STELLA = false;

if (process.env.NEXT_PUBLIC_SHOW_STELLA === undefined) {
  process.env.NEXT_PUBLIC_SHOW_STELLA = SHOW_STELLA ? "true" : "false";
}
