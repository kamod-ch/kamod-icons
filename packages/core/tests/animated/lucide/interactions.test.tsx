import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CheckAnimatedIcon } from "../../../src/animated/lucide/CheckAnimatedIcon";
import { checkAnimatedRecipe } from "../../../src/animated/lucide/check.recipe";
import { HeartAnimatedIcon } from "../../../src/animated/lucide/HeartAnimatedIcon";
import { heartAnimatedRecipe } from "../../../src/animated/lucide/heart.recipe";
import { MenuAnimatedIcon } from "../../../src/animated/lucide/MenuAnimatedIcon";
import { menuAnimatedRecipe } from "../../../src/animated/lucide/menu.recipe";
import { RefreshCwAnimatedIcon } from "../../../src/animated/lucide/RefreshCwAnimatedIcon";
import { refreshCwAnimatedRecipe } from "../../../src/animated/lucide/refresh-cw.recipe";
import { LockAnimatedIcon } from "../../../src/animated/lucide/LockAnimatedIcon";
import { lockAnimatedRecipe } from "../../../src/animated/lucide/lock.recipe";
import { installMockAnimate } from "../fixtures";
import { pointerEnter } from "../events";

describe("complex animated lucide interactions", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("CheckAnimatedIcon uses path drawing tracks", () => {
    expect(checkAnimatedRecipe.variants.draw[0]?.pathDrawing).toBe(true);
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<CheckAnimatedIcon animation={checkAnimatedRecipe} animate="draw" />, container);
    });
    expect(animate).toHaveBeenCalled();
  });

  it("HeartAnimatedIcon selected variant persists fill", () => {
    const track = heartAnimatedRecipe.variants.selected[0];
    const keyframes = track?.keyframes;
    expect(Array.isArray(keyframes) && keyframes[1]).toMatchObject({ fillOpacity: 1 });
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<HeartAnimatedIcon animation={heartAnimatedRecipe} animate="selected" />, container);
    });
    expect(animate).toHaveBeenCalled();
  });

  it("MenuAnimatedIcon animates top and bottom bars on hover", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<MenuAnimatedIcon animation={menuAnimatedRecipe} animateOnHover />, container);
    });
    act(() => {
      pointerEnter(container.querySelector("svg")!);
    });
    expect(animate.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  it("LockAnimatedIcon moves shackle on secure variant", () => {
    expect(lockAnimatedRecipe.variants.secure[0]?.target).toBe("shackle");
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<LockAnimatedIcon animation={lockAnimatedRecipe} animate="secure" />, container);
    });
    expect(animate).toHaveBeenCalled();
  });

  it("RefreshCwAnimatedIcon exposes loop-capable spin recipe", () => {
    expect(refreshCwAnimatedRecipe.loopCapable).toBe(true);
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(
        <RefreshCwAnimatedIcon animation={refreshCwAnimatedRecipe} animate="spin" loop />,
        container,
      );
    });
    expect(animate).toHaveBeenCalled();
  });
});
