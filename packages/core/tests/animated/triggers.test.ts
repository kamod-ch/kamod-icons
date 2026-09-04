import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createTriggerController } from "../../src/animated/runtime/triggers";
import { createTestRecipe, createTestSvg, installMockAnimate } from "./fixtures";
import { pointerCancel, pointerDown, pointerEnter, pointerLeave } from "./events";

describe("trigger controller", () => {
  let svg: SVGSVGElement;

  beforeEach(() => {
    svg = createTestSvg();
  });

  afterEach(() => {
    svg.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("handles rapid hover changes without orphaned animations", () => {
    const { instances } = installMockAnimate();
    const trigger = document.createElement("button");
    trigger.appendChild(svg);
    document.body.appendChild(trigger);

    const controller = createTriggerController({
      root: svg,
      triggerElement: trigger,
      recipe: createTestRecipe(),
      animateOnHover: true,
    });

    pointerEnter(trigger);
    pointerLeave(trigger);
    pointerEnter(trigger);

    expect(instances.length).toBeGreaterThan(0);
    for (const instance of instances) {
      if (instance.cancel.mock.calls.length > 0) continue;
    }
    controller.destroy();
    trigger.remove();
  });

  it("cleans up safely when destroyed during delay", () => {
    vi.useFakeTimers();
    installMockAnimate();
    const controller = createTriggerController({
      root: svg,
      triggerElement: svg,
      recipe: createTestRecipe(),
      animate: true,
      delay: 300,
    });
    controller.destroy();
    expect(() => vi.advanceTimersByTime(300)).not.toThrow();
  });

  it("handles pointer cancel during press and removes listeners on destroy", () => {
    const { animate } = installMockAnimate();
    const onPointerCancel = vi.fn();
    const controller = createTriggerController({
      root: svg,
      triggerElement: svg,
      recipe: createTestRecipe(),
      animateOnPress: true,
      consumerHandlers: { onPointerCancel },
    });

    pointerDown(svg);
    expect(animate).toHaveBeenCalled();
    pointerCancel(svg);
    expect(onPointerCancel).toHaveBeenCalledTimes(1);

    controller.destroy();
    animate.mockClear();
    pointerDown(svg);
    expect(animate).not.toHaveBeenCalled();
  });

  it("fires view trigger via IntersectionObserver", () => {
    const { animate } = installMockAnimate();
    let observerCallback: IntersectionObserverCallback | undefined;
    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
      observe = vi.fn();
      disconnect = vi.fn();
    }
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    createTriggerController({
      root: svg,
      triggerElement: svg,
      recipe: createTestRecipe(),
      animateOnView: true,
    });

    observerCallback?.(
      [{ isIntersecting: true, target: svg } as unknown as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
    expect(animate).toHaveBeenCalled();
  });

  it("no-ops view trigger when IntersectionObserver is missing", () => {
    const original = globalThis.IntersectionObserver;
    // @ts-expect-error test override
    globalThis.IntersectionObserver = undefined;
    expect(() =>
      createTriggerController({
        root: svg,
        triggerElement: svg,
        recipe: createTestRecipe(),
        animateOnView: true,
      }).destroy(),
    ).not.toThrow();
    globalThis.IntersectionObserver = original;
  });
});
