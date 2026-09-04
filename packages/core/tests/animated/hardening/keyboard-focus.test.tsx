import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SearchAnimatedIcon } from "../../../src/animated/lucide/SearchAnimatedIcon";
import { searchAnimatedRecipe } from "../../../src/animated/lucide/search.recipe";
import { installMockAnimate } from "../fixtures";

describe("keyboard focus triggers", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("plays animation on focusin when animateOnFocus is set", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <button type="button">
          <SearchAnimatedIcon
            animation={searchAnimatedRecipe}
            animateOnFocus="scan"
            triggerTarget="parent"
          />
        </button>,
        container,
      );
    });

    const button = container.querySelector("button")!;
    act(() => {
      button.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    });
    expect(animate).toHaveBeenCalled();
  });

  it("calls consumer focus handlers", () => {
    installMockAnimate();
    const onFocusIn = vi.fn();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <SearchAnimatedIcon
          animation={searchAnimatedRecipe}
          animateOnFocus
          onFocusIn={onFocusIn}
        />,
        container,
      );
    });

    const svg = container.querySelector("svg")!;
    act(() => {
      svg.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    });
    expect(onFocusIn).toHaveBeenCalledTimes(1);
  });
});
