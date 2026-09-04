import type { KamodRecipe } from "./shared";

export type SettingsAnimatedVariant = "adjust" | "spin";

export const settingsAnimatedRecipe: KamodRecipe<SettingsAnimatedVariant> = {
  source: "kamod",
  intent:
    "Adjust rotates the gear partially for a tweak; spin loops for ongoing configuration or processing.",
  defaultVariant: "adjust",
  loopCapable: true,
  variants: {
    adjust: [
      {
        target: "gear",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(45deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 520, easing: "ease-in-out" },
      },
    ],
    spin: [
      {
        target: "gear",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 1200, easing: "linear" },
      },
    ],
  },
};
