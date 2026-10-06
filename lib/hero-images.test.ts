import assert from "node:assert/strict";
import { test } from "node:test";
import { nextHeroStillIndex, shouldLoadHeroStill } from "./hero-images.ts";

test("shouldLoadHeroStill loads only the LCP still on first paint", () => {
  const loaded = new Set([0]);
  assert.equal(shouldLoadHeroStill(0, 0, loaded), true);
  assert.equal(shouldLoadHeroStill(1, 0, loaded), false);
  assert.equal(shouldLoadHeroStill(2, 0, loaded), false);
  assert.equal(shouldLoadHeroStill(3, 0, loaded), false);
});

test("shouldLoadHeroStill loads a newly active still even before it is cached", () => {
  const loaded = new Set([0]);
  assert.equal(shouldLoadHeroStill(1, 1, loaded), true);
  assert.equal(shouldLoadHeroStill(2, 1, loaded), false);
});

test("shouldLoadHeroStill keeps previously shown stills mounted", () => {
  const loaded = new Set([0, 1]);
  assert.equal(shouldLoadHeroStill(0, 1, loaded), true);
  assert.equal(shouldLoadHeroStill(1, 1, loaded), true);
  assert.equal(shouldLoadHeroStill(2, 1, loaded), false);
});

test("shouldLoadHeroStill rejects negative indexes", () => {
  const loaded = new Set([0]);
  assert.equal(shouldLoadHeroStill(-1, 0, loaded), false);
  assert.equal(shouldLoadHeroStill(0, -1, loaded), false);
});

test("nextHeroStillIndex only prefetches slide 1 after the LCP still", () => {
  assert.equal(nextHeroStillIndex(0, 4), 1);
  assert.equal(nextHeroStillIndex(0, 1), null);
  assert.equal(nextHeroStillIndex(1, 4), null);
});
