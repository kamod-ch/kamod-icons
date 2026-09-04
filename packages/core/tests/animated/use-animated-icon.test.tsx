import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { composeHandlers } from "../../src/animated/runtime/combine-handlers";
import { useAnimatedIcon } from "../../src/animated/runtime/use-animated-icon";
import type { AnimatedIconProps, AnimationRecipe } from "../../src/animated/runtime/types";
import { installMockAnimate } from "./fixtures";
import { pointerEnter } from "./events";

const recipe: AnimationRecipe<"pulse"> = {
  source: "kamod",
  defaultVariant: "pulse",
  variants: {
    pulse: [
      {
        target: "shape",
        keyframes: [{ opacity: 1 }, { opacity: 0.5 }],
        options: { duration: 100 },
      },
    ],
  },
};

function TestIcon(props: AnimatedIconProps<"pulse">) {
  const { svgRef, svgProps } = useAnimatedIcon(props);
  return (
    <svg ref={svgRef} viewBox="0 0 24 24" {...svgProps}>
      <circle data-kamod-part="shape" cx="12" cy="12" r="8" />
    </svg>
  );
}

describe("useAnimatedIcon", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("preserves class, style, title, and aria attributes on the svg", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(
      <TestIcon
        animation={recipe}
        animate
        class="icon-class"
        style={{ color: "red" }}
        title="Saved"
        aria-label="Saved icon"
      />,
      container,
    );

    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("class")).toBe("icon-class");
    expect(svg?.getAttribute("style")).toContain("color: red");
    expect(svg?.getAttribute("aria-label")).toBe("Saved icon");
    expect(animate).toHaveBeenCalled();
  });

  it("keeps consumer pointer handlers when hover trigger is enabled on self", () => {
    installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);
    const consumer = vi.fn();

    act(() => {
      render(
        <TestIcon animation={recipe} animateOnHover title="Hover" onPointerEnter={consumer} />,
        container,
      );
    });

    const svg = container.querySelector("svg");
    act(() => {
      pointerEnter(svg!);
    });
    expect(consumer).toHaveBeenCalledTimes(1);
  });

  it("animates from parent triggerTarget", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(
      <button type="button" data-testid="trigger">
        <TestIcon animation={recipe} animateOnHover triggerTarget="parent" />
      </button>,
      container,
    );

    const button = container.querySelector("button");
    pointerEnter(button!);
    expect(animate).toHaveBeenCalled();
  });

  it("animates from closest triggerTarget", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(
      <div class="trigger-zone">
        <TestIcon animation={recipe} animateOnHover triggerTarget="closest:.trigger-zone" />
      </div>,
      container,
    );

    pointerEnter(container.querySelector(".trigger-zone")!);
    expect(animate).toHaveBeenCalled();
  });
});

describe("composeHandlers", () => {
  it("runs all handlers in order", () => {
    const a = vi.fn();
    const b = vi.fn();
    composeHandlers(a, undefined, b)(new Event("test"));
    expect(a).toHaveBeenCalledTimes(1);
    expect(b).toHaveBeenCalledTimes(1);
  });
});
