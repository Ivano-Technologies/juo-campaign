import assert from "node:assert/strict";
import { test } from "node:test";
import {
  JOIN_AGE_LABEL,
  JOIN_AGE_REQUIRED_MESSAGE,
  isFormError,
  validateJoinSubmission,
} from "./forms.ts";

// Mock data only.
const base = {
  name: "Test Volunteer",
  email: "test.volunteer@example.com",
  phone: "0803 123 4567",
  lga: "Diaspora / outside Cross River",
  interest: "Volunteer in my ward or LGA",
  privacy: true,
  age_confirmed: true,
};

test("accepts a /join entry with the 18 or older box ticked", () => {
  const result = validateJoinSubmission(base);
  assert.equal(isFormError(result), false);
});

test("rejects /join without age_confirmed true", () => {
  const { age_confirmed: _omit, ...withoutAge } = base;
  void _omit;
  for (const input of [withoutAge, { ...base, age_confirmed: false }, { ...base, age_confirmed: "true" }]) {
    const result = validateJoinSubmission(input);
    assert.equal(isFormError(result), true);
    if (isFormError(result)) {
      assert.equal(result.code, "VALIDATION_ERROR");
      assert.equal(result.message, JOIN_AGE_REQUIRED_MESSAGE);
    }
  }
});

test("age_confirmed is validated only and never part of the saved row", () => {
  const result = validateJoinSubmission(base);
  assert.equal(isFormError(result), false);
  assert.equal("age_confirmed" in result, false);
  assert.deepEqual(Object.keys(result).sort(), [
    "campaign_source",
    "email",
    "interest",
    "lga",
    "name",
    "phone",
    "privacy_accepted",
    "source",
    "ward",
  ]);
});

test("age copy is exact and has no hyphens or dashes", () => {
  assert.equal(JOIN_AGE_LABEL, "I am 18 or older");
  assert.equal(JOIN_AGE_REQUIRED_MESSAGE, "Please confirm you are 18 or older.");
  for (const label of [JOIN_AGE_LABEL, JOIN_AGE_REQUIRED_MESSAGE]) {
    assert.doesNotMatch(label, /[-\u2013\u2014]/);
  }
});
