import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeNigerianPhone } from "./phone.ts";

test("normalises common Nigerian mobile formats to +234", () => {
  assert.equal(normalizeNigerianPhone("0803 123 4567"), "+2348031234567");
  assert.equal(normalizeNigerianPhone("+234 803 123 4567"), "+2348031234567");
  assert.equal(normalizeNigerianPhone("2348031234567"), "+2348031234567");
  assert.equal(normalizeNigerianPhone("8031234567"), "+2348031234567");
});

test("rejects numbers that are not Nigerian mobiles", () => {
  assert.equal(normalizeNigerianPhone("12345"), null);
  assert.equal(normalizeNigerianPhone("+44 20 7946 0958"), null);
  assert.equal(normalizeNigerianPhone(undefined), null);
});
