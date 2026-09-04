import type { KamodRecipe } from "./shared";

export type ArrowRightAnimatedVariant = "advance";

export const arrowRightAnimatedRecipe: KamodRecipe<ArrowRightAnimatedVariant> = {
  source: "kamod",
  intent: "The arrow shifts forward once — a clear “next” or continue cue without overshoot.",
  defaultVariant: "advance",
  loopCapable: false,
  variants: {
    advance: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateX(0px)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(0px)" },
        ],
        options: { duration: 360, easing: "ease-in-out" },
      },
    ],
  },
};
