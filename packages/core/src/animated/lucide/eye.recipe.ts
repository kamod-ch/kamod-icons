import type { KamodRecipe } from "./shared";

export type EyeAnimatedVariant = "look" | "blink";

export const eyeAnimatedRecipe: KamodRecipe<EyeAnimatedVariant> = {
  source: "kamod",
  intent:
    "Look enlarges the pupil for focus; blink closes it briefly — visibility without cartoon bounce.",
  defaultVariant: "look",
  loopCapable: false,
  variants: {
    look: [
      {
        target: "pupil",
        keyframes: [
          { transform: "scale(1)", transformOrigin: "12px 12px" },
          { transform: "scale(1.25)", transformOrigin: "12px 12px" },
          { transform: "scale(1)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 400, easing: "ease-in-out" },
      },
    ],
    blink: [
      {
        target: "pupil",
        keyframes: [
          { transform: "scaleY(1)", transformOrigin: "12px 12px" },
          { transform: "scaleY(0.15)", transformOrigin: "12px 12px" },
          { transform: "scaleY(1)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 280, easing: "ease-in-out" },
      },
    ],
  },
};
