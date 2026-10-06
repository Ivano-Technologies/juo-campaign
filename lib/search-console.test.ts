import assert from "node:assert/strict";
import { test } from "node:test";
import {
  getGoogleSiteVerification,
  googleVerificationMetadata,
} from "./search-console.ts";

const ENV_KEY = "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION";

function withEnv(value: string | undefined, run: () => void): void {
  const previous = process.env[ENV_KEY];
  if (value === undefined) {
    delete process.env[ENV_KEY];
  } else {
    process.env[ENV_KEY] = value;
  }

  try {
    run();
  } finally {
    if (previous === undefined) {
      delete process.env[ENV_KEY];
    } else {
      process.env[ENV_KEY] = previous;
    }
  }
}

test("getGoogleSiteVerification is null when unset or blank", () => {
  withEnv(undefined, () => {
    assert.equal(getGoogleSiteVerification(), null);
    assert.deepEqual(googleVerificationMetadata(), {});
  });
  withEnv("", () => {
    assert.equal(getGoogleSiteVerification(), null);
    assert.deepEqual(googleVerificationMetadata(), {});
  });
  withEnv("   ", () => {
    assert.equal(getGoogleSiteVerification(), null);
    assert.deepEqual(googleVerificationMetadata(), {});
  });
});

test("getGoogleSiteVerification rejects broken or markup-like values", () => {
  withEnv("not a token", () => {
    assert.equal(getGoogleSiteVerification(), null);
  });
  withEnv('<meta content="x">', () => {
    assert.equal(getGoogleSiteVerification(), null);
  });
  withEnv('abc"def', () => {
    assert.equal(getGoogleSiteVerification(), null);
  });
});

test("getGoogleSiteVerification returns a trimmed valid token", () => {
  withEnv("  Abcdef123_-xyz  ", () => {
    assert.equal(getGoogleSiteVerification(), "Abcdef123_-xyz");
    assert.deepEqual(googleVerificationMetadata(), {
      verification: { google: "Abcdef123_-xyz" },
    });
  });
});
