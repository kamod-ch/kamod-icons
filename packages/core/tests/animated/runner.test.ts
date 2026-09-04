import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createRecipeRunner } from "../../src/animated/runtime/runner";
import { createTestRecipe, createTestSvg, installMockAnimate } from "./fixtures";

describe("createRecipeRunner", () => {
  let svg: SVGSVGElement;

  beforeEach(() => {
    svg = createTestSvg();
  });

  afterEach(() => {
    svg.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("starts animations on matching data-kamod-part targets with options", () => {
    const { animate, instances } = installMockAnimate();
    const runner = createRecipeRunner({ root: svg, recipe: createTestRecipe() });

    runner.play("draw");

    expect(animate).toHaveBeenCalledTimes(1);
    expect(instances[0]?.element).toBe(svg.querySelector('[data-kamod-part="line"]'));
    expect(animate.mock.calls[0]?.[0]).toEqual([{ opacity: 0 }, { opacity: 1 }]);
    expect(animate.mock.calls[0]?.[1]).toMatchObject({ duration: 200, fill: "forwards" });
    expect(instances).toHaveLength(1);
  });

  it("stop and reset cancel animations and clear pending delays", () => {
    vi.useFakeTimers();
    const { instances } = installMockAnimate();
    const runner = createRecipeRunner({
      root: svg,
      recipe: createTestRecipe(),
      delay: 100,
    });

    runner.play("draw");
    runner.stop();
    vi.advanceTimersByTime(200);
    expect(instances).toHaveLength(0);

    runner.play("draw");
    vi.advanceTimersByTime(100);
    expect(instances).toHaveLength(1);
    runner.reset();
    expect(instances[0]?.cancel).toHaveBeenCalled();
  });

  it("finish calls finish on active animations", () => {
    const { instances } = installMockAnimate();
    const runner = createRecipeRunner({ root: svg, recipe: createTestRecipe() });
    runner.play("draw");
    runner.finish();
    expect(instances[0]?.finish).toHaveBeenCalled();
  });

  it("does not call animate when reduced motion is enabled", () => {
    const { animate } = installMockAnimate();
    const runner = createRecipeRunner({
      root: svg,
      recipe: createTestRecipe(),
      reducedMotion: true,
    });
    runner.play("draw");
    expect(animate).not.toHaveBeenCalled();
  });

  it("is a safe no-op when Element.animate is missing", () => {
    const original = Element.prototype.animate;
    // @ts-expect-error test override
    delete Element.prototype.animate;
    const runner = createRecipeRunner({ root: svg, recipe: createTestRecipe() });
    expect(() => runner.play("draw")).not.toThrow();
    Element.prototype.animate = original;
  });

  it("cleans up safely on destroy during a pending delay", () => {
    vi.useFakeTimers();
    installMockAnimate();
    const runner = createRecipeRunner({
      root: svg,
      recipe: createTestRecipe(),
      delay: 500,
    });
    runner.play("draw");
    runner.destroy();
    expect(() => vi.advanceTimersByTime(500)).not.toThrow();
  });
});
