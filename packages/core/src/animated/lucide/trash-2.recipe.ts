import type { KamodRecipe } from "./shared";

export type Trash2AnimatedVariant = "delete";

export const trash2AnimatedRecipe: KamodRecipe<Trash2AnimatedVariant> = {
  source: "kamod",
  intent: "The lid lifts briefly — delete or remove with the bin body staying grounded.",
  defaultVariant: "delete",
  loopCapable: false,
  variants: {
    delete: [
      {
        target: "lid",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 480, easing: "ease-in-out" },
      },
    ],
  },
};
