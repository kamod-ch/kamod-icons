// @vitest-environment node

import { describe, expect, it } from "vitest";

describe("animated runtime SSR", () => {
  it("imports without touching browser globals", async () => {
    const runtime = await import("../../src/animated/runtime/index");
    expect(runtime.createRecipeRunner).toBeTypeOf("function");
    expect(runtime.AnimateIcon).toBeTypeOf("function");
    expect(runtime.useAnimatedIcon).toBeTypeOf("function");
  });
});
