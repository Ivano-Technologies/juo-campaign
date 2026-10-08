import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  WARD_FREE_TEXT_MAX_LENGTH,
  WARD_NOT_LISTED,
  crossRiverWards,
  freeTextOnlyLgas,
  lgaIsFreeTextOnly,
  lgaNeedsWard,
  validateWard,
  wardCopy,
  wardsForLga,
} from "./wards.ts";

/** Per LGA counts from INEC CVR PU locator, cross checked with the INEC RAC PDF. */
const INEC_COUNTS: Record<string, number> = {
  Abi: 10,
  Akamkpa: 10,
  Akpabuyo: 10,
  Bakassi: 10,
  Bekwarra: 10,
  Biase: 11,
  Boki: 11,
  "Calabar Municipal": 10,
  "Calabar South": 12,
  Etung: 10,
  Ikom: 11,
  Obanliku: 10,
  Obubra: 11,
  Obudu: 10,
  Odukpani: 13,
  Ogoja: 10,
  Yakurr: 13,
  Yala: 11,
};

function siteLgas(): string[] {
  const source = readFileSync(new URL("./site.ts", import.meta.url), "utf8");
  const block = source.match(/export const crossRiverLgas = \[([\s\S]*?)\] as const/);
  assert.ok(block, "crossRiverLgas not found in lib/site.ts");
  return [...block[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

test("ward data covers exactly the site's 18 Cross River LGAs", () => {
  const cross = siteLgas().filter((lga) => !lga.startsWith("Diaspora"));
  assert.equal(cross.length, 18);
  assert.deepEqual(Object.keys(crossRiverWards).sort(), [...cross].sort());
});

test("per LGA ward counts match INEC (193 total)", () => {
  let total = 0;
  for (const [lga, expected] of Object.entries(INEC_COUNTS)) {
    const list = crossRiverWards[lga as keyof typeof crossRiverWards];
    assert.equal(list.wards.length, expected, lga);
    total += list.wards.length;
    const codes = list.wards.map((ward) => ward.code);
    assert.deepEqual(
      codes,
      codes.map((_, index) => String(index + 1).padStart(2, "0")),
      `${lga} RA codes are sequential`,
    );
    const names = new Set(list.wards.map((ward) => ward.name));
    assert.equal(names.size, list.wards.length, `${lga} ward names are unique`);
  }
  assert.equal(total, 193);
  assert.deepEqual(freeTextOnlyLgas, []);
});

test("wardsForLga filters by the selected LGA", () => {
  const obudu = wardsForLga("Obudu").map((ward) => ward.name);
  assert.ok(obudu.includes("Utugwang Central"));
  assert.ok(!obudu.includes("Ikang North"));
  assert.ok(wardsForLga("Akpabuyo").some((ward) => ward.name === "Ikang North"));
  assert.deepEqual(wardsForLga(""), []);
  assert.deepEqual(wardsForLga("Diaspora / outside Cross River"), []);
  assert.deepEqual(wardsForLga("Lagos"), []);
});

test("ward display names contain no hyphens (Odukpani 11 is Onimankiong)", () => {
  const odukpani = wardsForLga("Odukpani").map((ward) => ward.name);
  assert.ok(odukpani.includes("Onimankiong"));
  assert.ok(!odukpani.includes("Oniman-Kiong"));
  for (const [lga, list] of Object.entries(crossRiverWards)) {
    for (const ward of list.wards) {
      assert.doesNotMatch(ward.name, /[-\u2010-\u2015]/, `${lga}: ${ward.name}`);
    }
  }
});

test("lgaNeedsWard is true only for Cross River LGAs", () => {
  assert.equal(lgaNeedsWard("Yala"), true);
  assert.equal(lgaNeedsWard("Calabar Municipal"), true);
  assert.equal(lgaNeedsWard("Diaspora / outside Cross River"), false);
  assert.equal(lgaNeedsWard(""), false);
  assert.equal(lgaIsFreeTextOnly("Yala"), false);
});

test("validateWard accepts a listed ward for the right LGA only", () => {
  assert.deepEqual(
    validateWard({ lga: "Obudu", ward: " Utugwang Central ", wardUnlisted: false }),
    { ok: true, ward: "Utugwang Central" },
  );
  assert.deepEqual(
    validateWard({ lga: "Obudu", ward: "Ikang North", wardUnlisted: false }),
    { ok: false, message: wardCopy.errors.notInLga },
  );
  assert.deepEqual(
    validateWard({ lga: "Obudu", ward: "", wardUnlisted: false }),
    { ok: false, message: wardCopy.errors.select },
  );
  assert.deepEqual(
    validateWard({ lga: "Obudu", ward: undefined, wardUnlisted: false }),
    { ok: false, message: wardCopy.errors.select },
  );
  assert.deepEqual(
    validateWard({ lga: "Obudu", ward: WARD_NOT_LISTED, wardUnlisted: false }),
    { ok: false, message: wardCopy.errors.notInLga },
  );
});

test("validateWard requires free text when the ward isn't listed", () => {
  assert.deepEqual(
    validateWard({ lga: "Ikom", ward: "  New   Layout  ", wardUnlisted: true }),
    { ok: true, ward: "New Layout" },
  );
  assert.deepEqual(
    validateWard({ lga: "Ikom", ward: "   ", wardUnlisted: true }),
    { ok: false, message: wardCopy.errors.type },
  );
  assert.deepEqual(
    validateWard({ lga: "Ikom", ward: WARD_NOT_LISTED, wardUnlisted: true }),
    { ok: false, message: wardCopy.errors.type },
  );
  assert.deepEqual(
    validateWard({
      lga: "Ikom",
      ward: "x".repeat(WARD_FREE_TEXT_MAX_LENGTH + 1),
      wardUnlisted: true,
    }),
    { ok: false, message: wardCopy.errors.tooLong },
  );
});

test("validateWard stores no ward for Diaspora", () => {
  assert.deepEqual(
    validateWard({
      lga: "Diaspora / outside Cross River",
      ward: "Anything",
      wardUnlisted: true,
    }),
    { ok: true, ward: null },
  );
});

test("ward UI copy has no hyphens or dashes", () => {
  const strings = [
    wardCopy.label,
    wardCopy.placeholder,
    wardCopy.pickLgaFirst,
    wardCopy.notListed,
    wardCopy.otherLabel,
    wardCopy.otherPlaceholder,
    wardCopy.otherHelp,
    ...Object.values(wardCopy.errors),
  ];
  for (const value of strings) {
    assert.doesNotMatch(value, /[-\u2010-\u2015]/, value);
  }
});
