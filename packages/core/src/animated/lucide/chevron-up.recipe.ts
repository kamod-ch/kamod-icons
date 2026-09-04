import type { KamodRecipe } from "./shared";

export type ChevronUpAnimatedVariant = "collapse";

export const chevronUpAnimatedRecipe: KamodRecipe<ChevronUpAnimatedVariant> = {
  source: "kamod",
  intent: "The chevron nudges upward — collapse or hide content above.",
  defaultVariant: "collapse",
  loopCapable: false,
  variants: {
    collapse: [
      {
        target: "chevron",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 320, easing: "ease-in-out" },
      },
    ],
  },
};
