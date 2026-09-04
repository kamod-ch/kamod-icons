import type { KamodRecipe } from "./shared";

export type BellAnimatedVariant = "ring";

export const bellAnimatedRecipe: KamodRecipe<BellAnimatedVariant> = {
  source: "kamod",
  intent:
    "The bell body and clapper swing from plausible pivot points — a single believable ring, not endless shaking.",
  defaultVariant: "ring",
  loopCapable: false,
  variants: {
    ring: [
      {
        target: "body",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(-7deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(7deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(-4deg)", transformOrigin: "12px 6px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 6px" },
        ],
        options: { duration: 680, easing: "ease-in-out" },
      },
      {
        target: "clapper",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(10deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(-10deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(5deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 19px" },
        ],
        options: { duration: 680, easing: "ease-in-out" },
      },
    ],
  },
};
