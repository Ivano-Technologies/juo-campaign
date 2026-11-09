import assert from "node:assert/strict";
import { test } from "node:test";
import { SHOW_STELLA } from "./campaign-flags.ts";
import { brand } from "./brand.ts";
import { newsPosts, communityPosts } from "./community.ts";
import { lgaPlanFooterLockup, lgaPlans, lgaPlansPageDescription } from "./lga-plans.ts";
import { campaignGraphics, officialCampaignPhotos, photosPageDescription } from "./photos.ts";
import { johnCampaignPosters, officialPosters, ticketCampaignPosters } from "./posters.ts";
import { footerAboutLinks } from "./site.ts";
import { visionHeroCtas, visionShareHashtags } from "./vision.ts";
import { homeSeo } from "./home-seo.ts";

const STELLA = /stella|archibong|odey-archibong|odeyarchibong|madam.?deputy/i;

function blob(value: unknown): string {
  return JSON.stringify(value);
}

test("SHOW_STELLA is the rollback switch and defaults to off", () => {
  assert.equal(typeof SHOW_STELLA, "boolean");
});

test("public exports omit Stella when SHOW_STELLA is false", () => {
  if (SHOW_STELLA) {
    return;
  }

  assert.doesNotMatch(blob(brand.hashtags), STELLA);
  assert.doesNotMatch(blob(newsPosts), STELLA);
  assert.doesNotMatch(blob(communityPosts), STELLA);
  assert.doesNotMatch(blob(lgaPlanFooterLockup), STELLA);
  assert.doesNotMatch(blob(lgaPlans.map((plan) => plan.planHeading)), STELLA);
  assert.doesNotMatch(lgaPlansPageDescription, STELLA);
  assert.doesNotMatch(blob(campaignGraphics), STELLA);
  assert.doesNotMatch(blob(officialCampaignPhotos), STELLA);
  assert.doesNotMatch(photosPageDescription, STELLA);
  assert.doesNotMatch(blob(johnCampaignPosters), STELLA);
  assert.equal(ticketCampaignPosters.length, 0);
  assert.doesNotMatch(blob(officialPosters), STELLA);
  assert.doesNotMatch(blob(footerAboutLinks), STELLA);
  assert.doesNotMatch(blob(visionHeroCtas), STELLA);
  assert.doesNotMatch(blob(visionShareHashtags), STELLA);
  assert.doesNotMatch(homeSeo.ogImage.path, STELLA);
  assert.doesNotMatch(homeSeo.ogImage.alt, STELLA);
  assert.equal(homeSeo.ogImage.path, "/brand/homepage-poster-vote-governor.jpg");
  assert.equal(newsPosts.some((post) => post.id === "engagement-with-ward-leaders"), false);

  const rendered = [
    blob(officialPosters),
    blob(johnCampaignPosters),
    blob(ticketCampaignPosters),
    blob(officialCampaignPhotos),
    blob(campaignGraphics),
    blob(newsPosts),
    blob(communityPosts),
    homeSeo.ogImage.path,
  ].join("\n");

  const hiddenGraphics = [
    "/images/people/odey-archibong-stella-official.jpg",
    "/images/people/odey-archibong-stella-official-4x5.jpg",
    "/brand/madam-deputy-1.jpg",
    "/brand/madam-deputy-2.jpg",
    "/brand/official-poster-1.png",
    "/brand/og-official-poster-1.jpg",
    "/brand/chris-official/official-poster-blue.png",
    "/brand/chris-official/official-poster-white.png",
    "/brand/chris-official/official-poster-4.png",
    "/brand/odey-archibong-poster-4.png",
    "/brand/odey-archibong-poster-5.png",
    "/brand/odey-archibong-poster-6.png",
    "/brand/white-poster-kwankwaso.jpg",
    "/brand/gallery/we-are-ready.jpg",
    "/brand/gallery/odey-archibong-car-brand.jpg",
    "/brand/community/engagement-with-ward-leaders.png",
    "/brand/news/ndc-chapter-chairmen-southern-1.jpg",
    "/brand/news/ndc-chapter-chairmen-southern-2.jpg",
    "/brand/news/ndc-chapter-chairmen-southern-3.jpg",
  ];

  for (const src of hiddenGraphics) {
    assert.equal(rendered.includes(src), false, src);
  }
});
