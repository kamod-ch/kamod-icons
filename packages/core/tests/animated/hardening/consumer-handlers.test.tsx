import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SearchAnimatedIcon } from "../../../src/animated/lucide/SearchAnimatedIcon";
import { searchAnimatedRecipe } from "../../../src/animated/lucide/search.recipe";
import { installMockAnimate } from "../fixtures";
import { pointerDown, pointerCancel } from "../events";
import { pointerEnter, pointerLeave } from "../events";

describe("consumer handler composition", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("calls consumer pointer handlers alongside animation triggers", () => {
    installMockAnimate();
    const onPointerEnter = vi.fn();
    const onPointerLeave = vi.fn();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <SearchAnimatedIcon
          animation={searchAnimatedRecipe}
          animateOnHover
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        />,
        container,
      );
    });

    const svg = container.querySelector("svg")!;
    act(() => {
      pointerEnter(svg);
      pointerLeave(svg);
    });

    expect(onPointerEnter).toHaveBeenCalledTimes(1);
    expect(onPointerLeave).toHaveBeenCalledTimes(1);
  });

  it("calls consumer press cancel handler on pointercancel", () => {
    installMockAnimate();
    const onPointerCancel = vi.fn();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <SearchAnimatedIcon
          animation={searchAnimatedRecipe}
          animateOnPress
          onPointerCancel={onPointerCancel}
        />,
        container,
      );
    });

    const svg = container.querySelector("svg")!;
    act(() => {
      pointerDown(svg);
      pointerCancel(svg);
    });

    expect(onPointerCancel).toHaveBeenCalledTimes(1);
  });
});
