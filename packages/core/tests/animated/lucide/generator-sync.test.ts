import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const packageRoot = resolve(__dirname, "../../..");
const generatedFiles = [
  "src/animated/lucide/index.ts",
  "src/animated/lucide/animated-icons.meta.ts",
  "src/animated/lucide/animated-icons.catalog.ts",
  "src/animated/lucide/animated-icons.registry.ts",
];

describe("generate-animated-meta", () => {
  it("output is deterministic and up to date", () => {
    const before = generatedFiles.map((file) => readFileSync(resolve(packageRoot, file), "utf8"));
    execSync("pnpm run animated:meta", { cwd: packageRoot, stdio: "pipe" });
    const after = generatedFiles.map((file) => readFileSync(resolve(packageRoot, file), "utf8"));
    expect(after).toEqual(before);
  });
});
