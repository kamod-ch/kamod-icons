import type { KamodRecipe } from "./shared";

export type XAnimatedVariant = "dismiss";

export const xAnimatedRecipe: KamodRecipe<XAnimatedVariant> = {
  source: "kamod",
  intent: "Both strokes rotate into alignment — a decisive close or dismiss action.",
  defaultVariant: "dismiss",
  loopCapable: false,
  variants: {
    dismiss: [
      {
        target: "stroke-a",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(90deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 420, easing: "ease-in-out" },
      },
      {
        target: "stroke-b",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(-90deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 420, easing: "ease-in-out" },
      },
    ],
  },
};
