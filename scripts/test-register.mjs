// Lets `node --experimental-strip-types --test` load TypeScript modules that
// use the `@/` path alias and extensionless relative imports (as Next does).
import { register } from "node:module";

register("./test-resolve-hook.mjs", import.meta.url);
