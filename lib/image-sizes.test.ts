import assert from "node:assert/strict";
import { test } from "node:test";
import {
  brandCandidateLockupSizes,
  brandNdcSizes,
  challengesJoMarkSizes,
  compactJoMarkSizes,
  footerJoLockupSizes,
  headerJoMarkSizes,
} from "./image-sizes.ts";

const chromeSizes = [
  headerJoMarkSizes,
  challengesJoMarkSizes,
  footerJoLockupSizes,
  compactJoMarkSizes,
  brandNdcSizes,
  brandCandidateLockupSizes,
];

test("chrome image sizes are display-width hints, not 100vw", () => {
  for (const value of chromeSizes) {
    assert.notEqual(value, "100vw");
    assert.match(value, /\d+px/);
  }
});
