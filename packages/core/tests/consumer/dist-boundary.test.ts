import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { describe, expect, it } from "vitest";

const distRoot = resolve(__dirname, "../../dist");

describe("built animated bundle", () => {
  const animatedBundle = resolve(distRoot, "lucide/animated/index.js");
  const staticLucideBundle = resolve(distRoot, "sets/lucide/index.js");

  it.skipIf(!existsSync(animatedBundle))(
    "does not reference react, motion, or preact/compat",
    () => {
      const code = readFileSync(animatedBundle, "utf8");
      expect(code).not.toMatch(/from ['"]react['"]/);
      expect(code).not.toMatch(/from ['"]react-dom['"]/);
      expect(code).not.toMatch(/from ['"]motion\/react['"]/);
      expect(code).not.toMatch(/from ['"]preact\/compat['"]/);
    },
  );

  it.skipIf(!existsSync(staticLucideBundle))(
    "static lucide bundle does not include animated runtime markers",
    () => {
      const code = readFileSync(staticLucideBundle, "utf8");
      expect(code).not.toContain("createRecipeRunner");
      expect(code).not.toContain("data-kamod-animate-icon");
    },
  );
});

describe("public animated API types", () => {
  it.skipIf(!existsSync(resolve(distRoot, "lucide/animated/index.js")))(
    "exports consumer-facing symbols only",
    async () => {
      const distUrl = pathToFileURL(resolve(distRoot, "lucide/animated/index.js")).href;
      const mod = (await import(/* @vite-ignore */ distUrl)) as Record<string, unknown>;
      expect(mod.AnimateIcon).toBeTypeOf("function");
      expect(mod.SearchAnimatedIcon).toBeTypeOf("function");
      expect(mod).not.toHaveProperty("createRecipeRunner");
      expect(mod).not.toHaveProperty("searchAnimatedRecipe");
      expect(mod).not.toHaveProperty("AnimatedIconSvg");
    },
  );
});
