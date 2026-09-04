import { render } from "preact";
import { act } from "preact/test-utils";
import { renderToString } from "preact-render-to-string";
import type { ComponentType } from "preact";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { AnimatedIconProps } from "../../../src/animated/runtime/types";
import type { KamodRecipe } from "../../../src/animated/lucide/shared";
import { installMockAnimate } from "../fixtures";
import { pointerEnter } from "../events";

export function createAnimatedLucideIconTests<Variant extends string>(config: {
  name: string;
  Icon: ComponentType<AnimatedIconProps<Variant>>;
  recipe: KamodRecipe<Variant>;
  variants: Variant[];
  ssrMarkers: string[];
  partSelector?: string;
}) {
  const { name, Icon, recipe, variants, ssrMarkers, partSelector = "[data-kamod-part]" } = config;

  describe(`${name}`, () => {
    afterEach(() => {
      document.body.innerHTML = "";
      vi.restoreAllMocks();
    });

    it("renders SSR markup without browser globals", () => {
      const html = renderToString(<Icon size={24} title={`${name} label`} />);
      for (const marker of ssrMarkers) {
        expect(html).toContain(marker);
      }
      expect(html).toContain("<svg");
      expect(html).toContain(`<title>${name} label</title>`);
      expect(html).toContain('role="img"');
    });

    it("is decorative without title", () => {
      const html = renderToString(<Icon />);
      expect(html).toContain('aria-hidden="true"');
      expect(html).not.toContain("<title>");
    });

    it("uses kamod recipe metadata and default variant", () => {
      expect(recipe.source).toBe("kamod");
      expect(recipe.intent.length).toBeGreaterThan(10);
      expect(recipe.defaultVariant).toBe(variants[0]);
      expect(Object.keys(recipe.variants).sort()).toEqual([...variants].sort());
    });

    it("animates on hover and programmatic animate", () => {
      const { animate } = installMockAnimate();
      const container = document.createElement("div");
      document.body.appendChild(container);

      act(() => {
        render(<Icon animation={recipe} animateOnHover class="poc-icon" />, container);
      });

      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("class")).toContain("poc-icon");

      act(() => {
        pointerEnter(svg!);
      });
      expect(animate).toHaveBeenCalled();

      animate.mockClear();
      act(() => {
        render(<Icon animation={recipe} animate={recipe.defaultVariant} />, container);
      });
      expect(animate).toHaveBeenCalled();
    });

    it("animates on parent button focus target", () => {
      const { animate } = installMockAnimate();
      const container = document.createElement("div");
      document.body.appendChild(container);

      act(() => {
        render(
          <button type="button">
            <Icon animation={recipe} animateOnFocus triggerTarget="parent" />
          </button>,
          container,
        );
      });

      const button = container.querySelector("button");
      act(() => {
        button?.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
      });
      expect(animate).toHaveBeenCalled();
    });

    it("skips Element.animate when reduced motion is always", () => {
      const { animate } = installMockAnimate();
      const container = document.createElement("div");
      document.body.appendChild(container);

      act(() => {
        render(<Icon animation={recipe} animate reducedMotion="always" />, container);
      });
      expect(animate).not.toHaveBeenCalled();
    });

    it("cleans up on unmount without throwing", () => {
      installMockAnimate();
      const container = document.createElement("div");
      document.body.appendChild(container);

      act(() => {
        render(<Icon animation={recipe} animateOnHover loopDelay={100} delay={50} />, container);
      });

      expect(() => {
        act(() => {
          render(null, container);
        });
      }).not.toThrow();
    });

    it("exposes animatable parts in the DOM", () => {
      const container = document.createElement("div");
      document.body.appendChild(container);
      act(() => {
        render(<Icon />, container);
      });
      expect(container.querySelectorAll(partSelector).length).toBeGreaterThan(0);
    });

    for (const variant of variants) {
      it(`defines recipe tracks for variant "${variant}"`, () => {
        expect(recipe.variants[variant]?.length).toBeGreaterThan(0);
      });
    }
  });
}
