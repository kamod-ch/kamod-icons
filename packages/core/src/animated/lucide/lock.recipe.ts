import type { KamodRecipe } from "./shared";

export type LockAnimatedVariant = "secure";

export const lockAnimatedRecipe: KamodRecipe<LockAnimatedVariant> = {
  source: "kamod",
  intent: "The shackle drops into the body — transitioning to a locked, secured state.",
  defaultVariant: "secure",
  loopCapable: false,
  variants: {
    secure: [
      {
        target: "shackle",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(2px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 420, easing: "ease-in-out" },
      },
    ],
  },
};
