import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

/**
 * lib/lga-plans.ts imports "@/..." aliases, so read its source instead of
 * importing it. Guards Chris Adah's 8 Oct 2026 instruction: LGA Background
 * copy keeps facts and mineral sites but names no current state government
 * programmes, and follows the JUO copy rules.
 */
const source = readFileSync(new URL("./lga-plans.ts", import.meta.url), "utf8");

function backgrounds(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const re = /slug: "([^"]+)",[\s\S]*?\n {4}background: \[([\s\S]*?)\n {4}\],/g;
  for (const match of source.matchAll(re)) {
    const paras = [...match[2].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
    out.set(match[1], paras);
  }
  return out;
}

const PROGRAMME_TERMS =
  /programme|program\b|initiative|budget|revitalis|crop cluster|priorities|current administration|state government|governor|ministry|agency|scheme|state plans|positioned for|development areas|agricultural corridor/i;

test("all 18 LGAs have a restored Background", () => {
  const map = backgrounds();
  assert.equal(map.size, 18);
  for (const [slug, paras] of map) {
    assert.ok(paras.length > 0, `${slug} has background`);
  }
});

test("Background copy names no current government programmes", () => {
  for (const [slug, paras] of backgrounds()) {
    for (const para of paras) {
      assert.doesNotMatch(para, PROGRAMME_TERMS, `${slug}: ${para}`);
    }
  }
});

test("Background copy follows JUO copy rules", () => {
  for (const [slug, paras] of backgrounds()) {
    for (const para of paras) {
      assert.doesNotMatch(para, /\b(jnr|jr)\b/i, `${slug}: ${para}`);
      assert.doesNotMatch(para, /[\u2013\u2014]/, `${slug}: ${para}`);
      const stripped = para.replace(/Odey-Archibong|Nigeria-Cameroon|Non-Indigenous/g, "");
      assert.doesNotMatch(stripped, /[-\u2010-\u2012\u2015]/, `${slug}: ${para}`);
    }
  }
});

test("named mineral sites are kept in Chris's spelling", () => {
  const all = [...backgrounds().values()].flat().join(" ");
  for (const site of [
    "Adadama, Itigidi and Ekureku",
    "Idundu, Esuk Ekpo Eyoh and Ifondo",
    "Bay Side and Esuk Otu",
    "diamond at Becheeve Ranch and gold at Utanga",
    "limestone at Ishibori and sandstone at Nkporo",
    "limestone at Mkpani and Idomi and uranium deposits at Idomi and Agoi Bami",
  ]) {
    assert.ok(all.includes(site), site);
  }
});
