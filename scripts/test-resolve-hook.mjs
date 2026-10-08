import { existsSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);
const extensions = [".ts", ".tsx", "/index.ts"];

function resolveFile(url) {
  const path = fileURLToPath(url);
  if (existsSync(path) && statSync(path).isFile()) return url;
  for (const ext of extensions) {
    if (existsSync(path + ext)) return pathToFileURL(path + ext).href;
  }
  return null;
}

export async function resolve(specifier, context, nextResolve) {
  let candidate = null;
  if (specifier.startsWith("@/")) {
    candidate = new URL(specifier.slice(2), root).href;
  } else if (
    (specifier.startsWith("./") || specifier.startsWith("../")) &&
    context.parentURL?.startsWith("file:") &&
    /\.tsx?$/.test(context.parentURL)
  ) {
    candidate = new URL(specifier, context.parentURL).href;
  }

  if (candidate) {
    const file = resolveFile(candidate);
    if (file) return { url: file, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
