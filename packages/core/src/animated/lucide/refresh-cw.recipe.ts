import type { KamodRecipe } from "./shared";

export type RefreshCwAnimatedVariant = "spin";

export const refreshCwAnimatedRecipe: KamodRecipe<RefreshCwAnimatedVariant> = {
  source: "kamod",
  intent: "Continuous rotation signals an ongoing refresh or sync — stops cleanly when unmounted.",
  defaultVariant: "spin",
  loopCapable: true,
  variants: {
    spin: [
      {
        target: "glyph",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 900, easing: "linear" },
      },
    ],
  },
};
