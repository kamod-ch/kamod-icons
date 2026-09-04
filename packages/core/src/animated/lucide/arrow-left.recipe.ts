import type { KamodRecipe } from "./shared";

export type ArrowLeftAnimatedVariant = "retreat";

export const arrowLeftAnimatedRecipe: KamodRecipe<ArrowLeftAnimatedVariant> = {
  source: "kamod",
  intent: "The arrow shifts backward once — a calm “back” or previous cue.",
  defaultVariant: "retreat",
  loopCapable: false,
  variants: {
    retreat: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateX(0px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(0px)" },
        ],
        options: { duration: 360, easing: "ease-in-out" },
      },
    ],
  },
};
