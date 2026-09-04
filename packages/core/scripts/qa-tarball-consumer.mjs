#!/usr/bin/env node
/**
 * Consumer fixture: installs the packed tarball and verifies bundle boundaries.
 */
import { execSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";
import { buildAllMvpAnimatedBundleEntry, MVP_ANIMATED_ICON_NAMES } from "./mvp-animated-icons.mjs";

const packageRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workdir = mkdtempSync(join(tmpdir(), "kamod-icons-consumer-"));

execSync("pnpm pack --pack-destination .", {
  cwd: packageRoot,
  stdio: "pipe",
});

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
      name: "kamod-icons-consumer-fixture",
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
execSync("npm install --no-audit --no-fund", { cwd: consumerDir, stdio: "inherit" });

async function bundle(entryCode, outfile) {
  const entry = join(consumerDir, "entry.mjs");
  writeFileSync(entry, entryCode);
  await esbuild.build({
    entryPoints: [entry],
    outfile: join(consumerDir, outfile),
    bundle: true,
    format: "esm",
    platform: "browser",
    minify: true,
    treeShaking: true,
    logLevel: "silent",
  });
  return readFileSync(join(consumerDir, outfile), "utf8");
}

const forbidden = [
  "from 'react'",
  'from "react"',
  "from 'react-dom'",
  'from "react-dom"',
  "from 'motion/react'",
  'from "motion/react"',
  "from 'preact/compat'",
  'from "preact/compat"',
];

function assertNoForbidden(label, code) {
  for (const token of forbidden) {
    if (code.includes(token)) {
      throw new Error(`${label} contains forbidden import: ${token}`);
    }
  }
}

{
  const code = await bundle(
    `import { SearchIcon } from "@kamod-ch/icons/lucide";\nconsole.log(SearchIcon);\n`,
    "static.js",
  );
  if (code.includes("createRecipeRunner") || code.includes("data-kamod-animate-icon")) {
    throw new Error("Static lucide import pulled animated runtime");
  }
  assertNoForbidden("Static lucide bundle", code);
  console.log(`[consumer] static lucide OK (${Buffer.byteLength(code)} bytes minified)`);
}

{
  const code = await bundle(
    `import { h } from "preact";
import { SearchAnimatedIcon } from "@kamod-ch/icons/lucide/animated";
export default h(SearchAnimatedIcon, {});
`,
    "one-animated.js",
  );
  const otherIconMarkers = [
    'data-kamod-part="clapper"',
    'data-kamod-part="tray"',
    'data-kamod-part="mark"',
    'data-kamod-part="heart"',
    'data-kamod-part="arc"',
  ];
  for (const marker of otherIconMarkers) {
    if (code.includes(marker)) {
      throw new Error(`Single-icon bundle includes unused icon part: ${marker}`);
    }
  }
  assertNoForbidden("Single animated icon bundle", code);
  console.log(`[consumer] one animated icon OK (${Buffer.byteLength(code)} bytes minified)`);
}

{
  const code = await bundle(buildAllMvpAnimatedBundleEntry(), "all-animated.js");
  if (Buffer.byteLength(code) < 30000) {
    throw new Error("All-24 bundle unexpectedly small — tree shaking may have dropped icons");
  }
  const sampleMarkers = [
    "M5 12h14m-7-7 7 7-7 7",
    "m6 9 6 6 6-6",
    "M4 5h16",
    "M18 6 6 18",
    "M20 6 9 17l-5-5",
    "M7 11V7a5 5 0 0 1 10 0v4",
    "M21 12a9 9 0 1 1-6.219-8.56",
  ];
  for (const marker of sampleMarkers) {
    if (!code.includes(marker)) {
      throw new Error(`All-icons bundle missing marker: ${marker}`);
    }
  }
  assertNoForbidden("All animated icons bundle", code);
  console.log(
    `[consumer] all ${MVP_ANIMATED_ICON_NAMES.length} animated icons OK (${Buffer.byteLength(code)} bytes minified)`,
  );
}

{
  const listing = execSync("npm pack --dry-run 2>&1", {
    cwd: packageRoot,
    encoding: "utf8",
  });
  if (!listing.includes("dist/lucide/animated/index.js")) {
    throw new Error("Pack listing missing dist/lucide/animated/index.js");
  }
  if (!listing.includes("dist/lucide/animated/index.d.ts")) {
    throw new Error("Pack listing missing dist/lucide/animated/index.d.ts");
  }
  const unwanted = ["tests/", "fixtures/", "src/animated/lucide/search.recipe"];
  for (const path of unwanted) {
    if (listing.includes(path)) {
      throw new Error(`Pack listing includes unpublished path: ${path}`);
    }
  }
  console.log("[consumer] npm pack dry-run OK");
}

rmSync(workdir, { recursive: true, force: true });
console.log("[consumer] all checks passed");
