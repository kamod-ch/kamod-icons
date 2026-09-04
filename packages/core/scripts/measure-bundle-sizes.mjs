#!/usr/bin/env node
/**
 * Report minified esbuild bundle sizes for static vs animated imports (same method as consumer fixture).
 */
import { execSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";
import { buildAllMvpAnimatedBundleEntry } from "./mvp-animated-icons.mjs";

const packageRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workdir = mkdtempSync(join(tmpdir(), "kamod-icons-bundles-"));

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
      name: "kamod-icons-bundle-measure",
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
  const bytes = readFileSync(outfile).byteLength;
  console.log(`${label}: ${bytes} bytes (${(bytes / 1024).toFixed(2)} KiB)`);
}

await measure(
  "static-search-icon",
  `import { SearchIcon } from "@kamod-ch/icons/lucide";\nexport default SearchIcon;\n`,
);
await measure(
  "animated-search-icon",
  `import { h } from "preact";
import { SearchAnimatedIcon } from "@kamod-ch/icons/lucide/animated";
export default h(SearchAnimatedIcon, {});
`,
);
await measure("animated-all-twenty-four", buildAllMvpAnimatedBundleEntry());

rmSync(workdir, { recursive: true, force: true });
