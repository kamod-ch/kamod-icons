import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  resolveReducedMotion,
  subscribeReducedMotion,
} from "../../src/animated/runtime/reduced-motion";
import { createRecipeRunner } from "../../src/animated/runtime/runner";
import { createTestRecipe, createTestSvg, installMockAnimate } from "./fixtures";

describe("reduced motion", () => {
  let svg: SVGSVGElement;
  let matchMedia: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    svg = createTestSvg();
    matchMedia = vi.fn().mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    vi.stubGlobal("matchMedia", matchMedia);
  });

  afterEach(() => {
    svg.remove();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("resolveReducedMotion respects always and never modes", () => {
    expect(resolveReducedMotion("always")).toBe(true);
    expect(resolveReducedMotion("never")).toBe(false);
  });

  it("system mode follows matchMedia", () => {
    matchMedia.mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    expect(resolveReducedMotion("system")).toBe(true);
  });

  it("subscribeReducedMotion reacts to media query changes", () => {
    const listeners = new Map<string, () => void>();
    matchMedia.mockReturnValue({
      matches: false,
      addEventListener: (_: string, cb: () => void) => listeners.set("change", cb),
      removeEventListener: (_: string, cb: () => void) => {
        if (listeners.get("change") === cb) listeners.delete("change");
      },
    });

    const handler = vi.fn();
    subscribeReducedMotion(handler);
    listeners.get("change")?.();
    expect(handler).toHaveBeenCalledWith(false);
  });

  it("prevents Element.animate when reduced motion is active", () => {
    const { animate } = installMockAnimate();
    const runner = createRecipeRunner({
      root: svg,
      recipe: createTestRecipe(),
      reducedMotion: true,
    });
    runner.play("draw");
    expect(animate).not.toHaveBeenCalled();
  });
});
