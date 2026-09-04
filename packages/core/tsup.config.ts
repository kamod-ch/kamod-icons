import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    meta: "src/meta.ts",
    "sets/shadcn/index": "src/sets/shadcn/index.ts",
    "sets/lucide/index": "src/sets/lucide/index.ts",
    "sets/heroicons/outline/index": "src/sets/heroicons/outline/index.ts",
    "sets/heroicons/solid/index": "src/sets/heroicons/solid/index.ts",
    "sets/tabler/outline/index": "src/sets/tabler/outline/index.ts",
    "sets/tabler/filled/index": "src/sets/tabler/filled/index.ts",
    "sets/iconoir/regular/index": "src/sets/iconoir/regular/index.ts",
    "sets/iconoir/solid/index": "src/sets/iconoir/solid/index.ts",
    "sets/reicon/outline/index": "src/sets/reicon/outline/index.ts",
    "sets/reicon/filled/index": "src/sets/reicon/filled/index.ts",
    "lucide/animated/index": "src/animated/lucide/index.ts",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  target: "es2020",
  outDir: "dist",
  external: ["preact", "preact/jsx-runtime"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "preact";
  },
});
