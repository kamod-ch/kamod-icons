import type { KamodRecipe } from "./shared";

export type EyeOffAnimatedVariant = "conceal";

export const eyeOffAnimatedRecipe: KamodRecipe<EyeOffAnimatedVariant> = {
  source: "kamod",
  intent: "The strike-through fades in — content hidden or visibility toggled off.",
  defaultVariant: "conceal",
  loopCapable: false,
  variants: {
    conceal: [
      {
        target: "strike",
        keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 1 }],
        options: { duration: 360, easing: "ease-out", fill: "forwards" },
      },
    ],
  },
};
