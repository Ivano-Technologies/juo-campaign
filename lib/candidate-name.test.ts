import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { test } from "node:test";

/**
 * Kezie, 8 Oct 2026: the candidate is always "John Upan Odey", never with a
 * "Jnr", "Jr" or "Junior" suffix. Scans every text source that can reach the
 * rendered site (pages, components, copy, metadata, public text files).
 */
const ROOT = new URL("..", import.meta.url).pathname;
const DIRS = ["app", "components", "lib", "public"];
const EXTS = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".txt", ".xml", ".svg", ".webmanifest", ".md", ".html", ".css"]);
const SUFFIX = /\bj(n)?r\b\.?|junior/i;

function files(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...files(path));
    else if (EXTS.has(extname(name)) && !/\.test\.ts$/.test(name)) out.push(path);
  }
  return out;
}

test("no Jnr, Jr or Junior suffix anywhere in site sources", () => {
  const hits: string[] = [];
  for (const dir of DIRS) {
    for (const file of files(join(ROOT, dir))) {
      readFileSync(file, "utf8").split("\n").forEach((line, i) => {
        if (SUFFIX.test(line)) hits.push(`${file.slice(ROOT.length)}:${i + 1}: ${line.trim().slice(0, 120)}`);
      });
    }
  }
  assert.deepEqual(hits, []);
});
