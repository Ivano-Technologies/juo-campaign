import assert from "node:assert/strict";
import { test } from "node:test";
import { canApproveConsent } from "./consent-approver.ts";

const env = { ADMIN_EMAILS: "admin@example.com, Second@Example.com", CONSENT_APPROVER_EMAILS: "extra@example.com" };

test("any admin can approve consent", () => {
  assert.equal(canApproveConsent("admin@example.com", env), true);
  assert.equal(canApproveConsent("second@example.com", env), true);
});

test("CONSENT_APPROVER_EMAILS still grants approval", () => {
  assert.equal(canApproveConsent("Extra@Example.com", env), true);
  assert.equal(canApproveConsent("extra@example.com", { CONSENT_APPROVER_EMAILS: "extra@example.com" }), true);
});

test("non admins cannot approve", () => {
  assert.equal(canApproveConsent("stranger@example.com", env), false);
  assert.equal(canApproveConsent("", env), false);
  assert.equal(canApproveConsent(undefined, env), false);
  assert.equal(canApproveConsent("admin@example.com", {}), false);
});
