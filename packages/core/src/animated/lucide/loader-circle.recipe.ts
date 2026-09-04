import type { KamodRecipe } from "./shared";

export type LoaderCircleAnimatedVariant = "spin";

export const loaderCircleAnimatedRecipe: KamodRecipe<LoaderCircleAnimatedVariant> = {
  source: "kamod",
  intent:
    "An even, continuous rotation that reads as loading and stops cleanly when unmounted or reduced motion applies.",
  defaultVariant: "spin",
  loopCapable: true,
  variants: {
    spin: [
      {
        target: "arc",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 900, easing: "linear" },
      },
    ],
  },
};
