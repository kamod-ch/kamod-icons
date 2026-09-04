import type { KamodRecipe } from "./shared";

export type MinusAnimatedVariant = "remove";

export const minusAnimatedRecipe: KamodRecipe<MinusAnimatedVariant> = {
  source: "kamod",
  intent: "The bar shortens horizontally — a subtractive or remove action.",
  defaultVariant: "remove",
  loopCapable: false,
  variants: {
    remove: [
      {
        target: "bar",
        keyframes: [
          { transform: "scaleX(1)", transformOrigin: "12px 12px" },
          { transform: "scaleX(0.55)", transformOrigin: "12px 12px" },
          { transform: "scaleX(1)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 360, easing: "ease-in-out" },
      },
    ],
  },
};
