import type { KamodRecipe } from "./shared";

export type LockOpenAnimatedVariant = "unlock";

export const lockOpenAnimatedRecipe: KamodRecipe<LockOpenAnimatedVariant> = {
  source: "kamod",
  intent: "The shackle swings open — an unlocked or accessible state.",
  defaultVariant: "unlock",
  loopCapable: false,
  variants: {
    unlock: [
      {
        target: "shackle",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(-2px, -2px)" },
          { transform: "translate(0px, 0px)" },
        ],
        options: { duration: 420, easing: "ease-in-out" },
      },
    ],
  },
};
