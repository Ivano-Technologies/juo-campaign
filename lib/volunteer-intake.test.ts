import assert from "node:assert/strict";
import { test } from "node:test";
import { validateOfflineIntake } from "./volunteer-intake.ts";

const base = {
  name: "Test Volunteer",
  phone: "0803 123 4567",
  lga: "Diaspora / outside Cross River",
  community: "Test community",
  interest: "Volunteer in my ward or LGA",
  role: "Volunteer",
};

test("accepts a valid offline entry and normalises the phone", () => {
  const result = validateOfflineIntake(base);
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.value.phone_e164, "+2348031234567");
    assert.equal(result.value.ward, null);
  }
});

test("rejects an unknown role and a bad phone", () => {
  assert.equal(validateOfflineIntake({ ...base, role: "Chief" }).ok, false);
  assert.equal(validateOfflineIntake({ ...base, phone: "123" }).ok, false);
});
