import type { KamodRecipe } from "./shared";

export type CopyAnimatedVariant = "duplicate";

export const copyAnimatedRecipe: KamodRecipe<CopyAnimatedVariant> = {
  source: "kamod",
  intent: "The front sheet lifts diagonally — duplicated content being picked up.",
  defaultVariant: "duplicate",
  loopCapable: false,
  variants: {
    duplicate: [
      {
        target: "front",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -2px)" },
          { transform: "translate(0px, 0px)" },
        ],
        options: { duration: 440, easing: "ease-in-out" },
      },
    ],
  },
};
