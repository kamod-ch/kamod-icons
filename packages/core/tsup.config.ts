import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/meta.ts",
    "src/sets/shadcn/index.ts",
    "src/sets/lucide/index.ts",
    "src/sets/heroicons/outline/index.ts",
    "src/sets/heroicons/solid/index.ts",
    "src/sets/tabler/outline/index.ts",
    "src/sets/tabler/filled/index.ts",
    "src/sets/iconoir/regular/index.ts",
    "src/sets/iconoir/solid/index.ts",
    "src/sets/reicon/outline/index.ts",
    "src/sets/reicon/filled/index.ts",
  ],
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
