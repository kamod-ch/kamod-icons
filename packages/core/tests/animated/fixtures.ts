import { vi } from "vitest";
import type { AnimationRecipe } from "../../src/animated/runtime/types";

export function createTestSvg(parts: Record<string, string> = { line: "line" }): SVGSVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  for (const [part, tag] of Object.entries(parts)) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    el.setAttribute("data-kamod-part", part);
    if (tag === "path") {
      el.setAttribute("d", "M0 0 L10 0");
    }
    svg.appendChild(el);
  }
  document.body.appendChild(svg);
  return svg;
}

export function createTestRecipe(): AnimationRecipe<"draw"> {
  return {
    source: "kamod",
    defaultVariant: "draw",
    variants: {
      draw: [
        {
          target: "line",
          keyframes: [{ opacity: 0 }, { opacity: 1 }],
          options: { duration: 200, fill: "forwards" },
        },
      ],
    },
  };
}

export type MockAnimation = {
  cancel: ReturnType<typeof vi.fn>;
  finish: ReturnType<typeof vi.fn>;
  play: ReturnType<typeof vi.fn>;
  pause: ReturnType<typeof vi.fn>;
  finished: Promise<void>;
  element: Element;
};

export function installMockAnimate() {
  const instances: MockAnimation[] = [];
  const animate = vi.fn(function (
    this: Element,
    _keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    _options?: KeyframeAnimationOptions | number,
  ) {
    const mock: MockAnimation = {
      cancel: vi.fn(),
      finish: vi.fn(),
      play: vi.fn(),
      pause: vi.fn(),
      finished: Promise.resolve(),
      element: this,
    };
    instances.push(mock);
    return mock as unknown as Animation;
  });
  Element.prototype.animate = animate as typeof Element.prototype.animate;
  return { animate, instances };
}
