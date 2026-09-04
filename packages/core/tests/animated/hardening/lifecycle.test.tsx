import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SearchAnimatedIcon } from "../../../src/animated/lucide/SearchAnimatedIcon";
import { BellAnimatedIcon } from "../../../src/animated/lucide/BellAnimatedIcon";
import { installMockAnimate } from "../fixtures";
import { pointerEnter } from "../events";

describe("animated icon lifecycle hardening", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("remounts cleanly when animate prop changes", () => {
    const { animate } = installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(<SearchAnimatedIcon animate={false} />, container);
    });
    expect(animate).not.toHaveBeenCalled();

    act(() => {
      render(<SearchAnimatedIcon animate="scan" />, container);
    });
    expect(animate).toHaveBeenCalled();

    act(() => {
      render(<SearchAnimatedIcon animate={false} />, container);
    });
    expect(() => {
      act(() => render(null, container));
    }).not.toThrow();
  });

  it("updates trigger target without throwing", () => {
    installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <button type="button">
          <BellAnimatedIcon animateOnHover triggerTarget="parent" />
        </button>,
        container,
      );
    });

    act(() => {
      render(<BellAnimatedIcon animateOnHover triggerTarget="self" />, container);
    });

    const svg = container.querySelector("svg");
    act(() => {
      pointerEnter(svg!);
    });

    expect(() => {
      act(() => render(null, container));
    }).not.toThrow();
  });

  it("handles rapid programmatic replay", () => {
    installMockAnimate();
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(<SearchAnimatedIcon animate="scan" />, container);
    });

    for (let i = 0; i < 5; i += 1) {
      act(() => {
        render(<SearchAnimatedIcon animate={false} />, container);
        render(<SearchAnimatedIcon animate="scan" />, container);
      });
    }

    expect(() => {
      act(() => render(null, container));
    }).not.toThrow();
  });
});
