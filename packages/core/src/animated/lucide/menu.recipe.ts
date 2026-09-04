import type { KamodRecipe } from "./shared";

export type MenuAnimatedVariant = "spread";

export const menuAnimatedRecipe: KamodRecipe<MenuAnimatedVariant> = {
  source: "kamod",
  intent: "Top and bottom bars separate slightly — a menu opening hint without morphing into an X.",
  defaultVariant: "spread",
  loopCapable: false,
  variants: {
    spread: [
      {
        target: "line-top",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 400, easing: "ease-in-out" },
      },
      {
        target: "line-bottom",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(2px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 400, easing: "ease-in-out" },
      },
    ],
  },
};
