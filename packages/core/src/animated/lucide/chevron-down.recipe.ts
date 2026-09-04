import type { KamodRecipe } from "./shared";

export type ChevronDownAnimatedVariant = "expand";

export const chevronDownAnimatedRecipe: KamodRecipe<ChevronDownAnimatedVariant> = {
  source: "kamod",
  intent: "The chevron nudges downward — expand or reveal content below.",
  defaultVariant: "expand",
  loopCapable: false,
  variants: {
    expand: [
      {
        target: "chevron",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(2px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 320, easing: "ease-in-out" },
      },
    ],
  },
};
