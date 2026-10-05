import assert from "node:assert/strict";
import { test } from "node:test";
import {
  campaignSourceFromSearchParams,
  normalizeCampaignSource,
} from "./campaign-source.ts";

test("normalizeCampaignSource lowercases and slugifies field tags", () => {
  assert.equal(normalizeCampaignSource("calabar"), "calabar");
  assert.equal(normalizeCampaignSource("Calabar Municipal"), "calabar_municipal");
  assert.equal(normalizeCampaignSource(" obudu "), "obudu");
});

test("normalizeCampaignSource rejects PII-like and empty values", () => {
  assert.equal(normalizeCampaignSource(""), null);
  assert.equal(normalizeCampaignSource("   "), null);
  assert.equal(normalizeCampaignSource("name@example.com"), null);
  assert.equal(normalizeCampaignSource(null), null);
  assert.equal(normalizeCampaignSource(12), null);
});

test("campaignSourceFromSearchParams prefers source over utm_source", () => {
  assert.equal(
    campaignSourceFromSearchParams({
      source: "calabar",
      utm_source: "google",
    }),
    "calabar",
  );
  assert.equal(
    campaignSourceFromSearchParams({ utm_source: "whatsapp" }),
    "whatsapp",
  );
  assert.equal(campaignSourceFromSearchParams({}), null);
});
