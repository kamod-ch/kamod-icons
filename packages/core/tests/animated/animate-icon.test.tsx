import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AnimateIcon } from "../../src/animated/runtime/animate-icon";
import { useAnimatedIcon } from "../../src/animated/runtime/use-animated-icon";
import type { AnimationRecipe } from "../../src/animated/runtime/types";
import { installMockAnimate } from "./fixtures";
import { pointerEnter } from "./events";

const recipeA: AnimationRecipe<"a"> = {
  source: "kamod",
  defaultVariant: "a",
  variants: {
    a: [{ target: "one", keyframes: [{ opacity: 0 }, { opacity: 1 }], options: { duration: 50 } }],
  },
};

const recipeB: AnimationRecipe<"b"> = {
  source: "kamod",
  defaultVariant: "b",
  variants: {
    b: [{ target: "two", keyframes: [{ opacity: 0 }, { opacity: 1 }], options: { duration: 50 } }],
  },
};

function MiniIcon({ animation, part }: { animation: AnimationRecipe<string>; part: string }) {
  const { svgRef, svgProps } = useAnimatedIcon({ animation, animateOnHover: false });
  return (
    <svg ref={svgRef} {...svgProps}>
      <circle data-kamod-part={part} cx="8" cy="8" r="4" />
    </svg>
  );
}

describe("AnimateIcon", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("drives nested icons from one group hover trigger", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <AnimateIcon animateOnHover>
          <MiniIcon animation={recipeA} part="one" />
          <MiniIcon animation={recipeB} part="two" />
        </AnimateIcon>,
        container,
      );
    });

    const wrapper = container.querySelector("[data-kamod-animate-icon]");
    act(() => {
      pointerEnter(wrapper!);
    });
    expect(animate.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  it("renders display:contents wrapper when it owns no triggers", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(
      <AnimateIcon>
        <MiniIcon animation={recipeA} part="one" />
      </AnimateIcon>,
      container,
    );

    const wrapper = container.querySelector("[data-kamod-animate-icon]") as HTMLElement;
    expect(wrapper?.style.display).toBe("contents");
  });
});
