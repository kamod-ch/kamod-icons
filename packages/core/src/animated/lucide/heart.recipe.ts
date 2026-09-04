import type { KamodRecipe } from "./shared";

export type HeartAnimatedVariant = "pulse" | "selected";

export const heartAnimatedRecipe: KamodRecipe<HeartAnimatedVariant> = {
  source: "kamod",
  intent:
    "Pulse affirms lightly; selected fills with currentColor and rests in a stable favored state.",
  defaultVariant: "pulse",
  loopCapable: false,
  variants: {
    pulse: [
      {
        target: "heart",
        keyframes: [
          { transform: "scale(1)", transformOrigin: "12px 12px" },
          { transform: "scale(1.06)", transformOrigin: "12px 12px" },
          { transform: "scale(1)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 560, easing: "ease-in-out" },
      },
    ],
    selected: [
      {
        target: "heart",
        keyframes: [
          { fillOpacity: 0, strokeOpacity: 1 },
          { fillOpacity: 1, strokeOpacity: 1 },
        ],
        options: { duration: 480, easing: "ease-out", fill: "forwards" },
      },
    ],
  },
};
