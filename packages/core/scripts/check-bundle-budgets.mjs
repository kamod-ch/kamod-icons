#!/usr/bin/env node
/**
 * Enforce bundle size budgets against measured baselines (esbuild minified consumer bundles).
 */
import { execSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";
import { buildAllMvpAnimatedBundleEntry } from "./mvp-animated-icons.mjs";

/** Baseline from release candidate 1.1.0 prep (2026-09-04) + 8% headroom */
const BUDGETS = {
  "static-search-icon": 11_500,
  "animated-search-icon": 23_500,
  "animated-all-twenty-four": 41_500,
};

const packageRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workdir = mkdtempSync(join(tmpdir(), "kamod-icons-budgets-"));

execSync("pnpm pack --pack-destination .", { cwd: packageRoot, stdio: "pipe" });
const tarball = execSync('ls -1 kamod-ch-icons-*.tgz | head -1', {
  cwd: packageRoot,
  encoding: "utf8",
}).trim();

const consumerDir = join(workdir, "app");
mkdirSync(consumerDir, { recursive: true });
writeFileSync(
  join(consumerDir, "package.json"),
  JSON.stringify(
    {
      name: "kamod-icons-bundle-budget",
      private: true,
      type: "module",
      dependencies: {
        "@kamod-ch/icons": `file:${join(packageRoot, tarball)}`,
        preact: "^10.28.3",
      },
    },
    null,
    2,
  ),
);
execSync("npm install --no-audit --no-fund", { cwd: consumerDir, stdio: "pipe" });

async function measure(label, entryCode) {
  const entry = join(consumerDir, "entry.mjs");
  const outfile = join(consumerDir, `${label}.js`);
  writeFileSync(entry, entryCode);
  await esbuild.build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format: "esm",
    platform: "browser",
    minify: true,
    treeShaking: true,
    logLevel: "silent",
  });
  return readFileSync(outfile).byteLength;
}

const entries = {
  "static-search-icon": `import { SearchIcon } from "@kamod-ch/icons/lucide";\nexport default SearchIcon;\n`,
  "animated-search-icon": `import { h } from "preact";
import { SearchAnimatedIcon } from "@kamod-ch/icons/lucide/animated";
export default h(SearchAnimatedIcon, {});
`,
  "animated-all-twenty-four": buildAllMvpAnimatedBundleEntry(),
};

let failed = false;
for (const [label, code] of Object.entries(entries)) {
  const bytes = await measure(label, code);
  const budget = BUDGETS[label];
  const ok = bytes <= budget;
  console.log(
    `${ok ? "OK" : "FAIL"} ${label}: ${bytes} bytes (budget ${budget}, ${(bytes / 1024).toFixed(2)} KiB)`,
  );
  if (!ok) failed = true;
}

const distAnimated = readFileSync(resolve(packageRoot, "dist/lucide/animated/index.js"));
console.log(
  `INFO dist/lucide/animated/index.js: ${distAnimated.byteLength} bytes (${(distAnimated.byteLength / 1024).toFixed(2)} KiB)`,
);

rmSync(workdir, { recursive: true, force: true });
if (failed) process.exit(1);
