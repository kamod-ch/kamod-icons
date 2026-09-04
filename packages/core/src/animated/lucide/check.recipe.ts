import type { KamodRecipe } from "./shared";

export type CheckAnimatedVariant = "draw";

export const checkAnimatedRecipe: KamodRecipe<CheckAnimatedVariant> = {
  source: "kamod",
  intent: "The check mark draws once along its path — confirmation without bounce or overshoot.",
  defaultVariant: "draw",
  loopCapable: false,
  variants: {
    draw: [
      {
        target: "mark",
        pathDrawing: true,
        keyframes: [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        options: { duration: 520, easing: "ease-out", fill: "forwards" },
      },
    ],
  },
};
