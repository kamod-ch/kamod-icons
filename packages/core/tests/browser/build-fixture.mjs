import { build } from "esbuild";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(fileURLToPath(new URL(".", import.meta.url)), "../..");
const fixtureDir = resolve(packageRoot, "tests/browser/fixtures");
mkdirSync(fixtureDir, { recursive: true });

await build({
  entryPoints: [resolve(packageRoot, "tests/browser/harness.tsx")],
  outfile: resolve(fixtureDir, "harness.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  jsx: "automatic",
  jsxImportSource: "preact",
  external: [],
  alias: {
    "@kamod-ch/icons/lucide/animated": resolve(packageRoot, "dist/lucide/animated/index.js"),
  },
});

writeFileSync(
  resolve(fixtureDir, "index.html"),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Kamod animated icon browser fixture</title>
  <style>
    :root { color-scheme: light dark; --bg: #ffffff; --fg: #206bc4; }
    @media (prefers-color-scheme: dark) { :root { --bg: #0f1419; --fg: #4c9ce6; } }
    html[data-theme="dark"] { color-scheme: dark; --bg: #0f1419; --fg: #4c9ce6; }
    html[data-theme="light"] { color-scheme: light; --bg: #ffffff; --fg: #206bc4; }
    body { margin: 0; background: var(--bg); color: var(--fg); font-family: system-ui, sans-serif; }
    main { padding: 1.5rem; display: grid; gap: 1rem; max-width: 720px; }
    .row { display: flex; align-items: center; gap: 1rem; min-height: 3.5rem; }
    button.icon-btn { border: 1px dashed #888; background: transparent; padding: 0.35rem; border-radius: 8px; color: inherit; }
    h2 { margin: 0; font-size: 0.95rem; font-weight: 600; min-width: 7rem; }
  </style>
</head>
<body>
  <main id="app"></main>
  <script type="module" src="./harness.js"></script>
</body>
</html>
`,
);

console.log("Built browser fixture at tests/browser/fixtures/");
