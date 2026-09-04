import type { KamodRecipe } from "./shared";

export type SearchAnimatedVariant = "scan";

export const searchAnimatedRecipe: KamodRecipe<SearchAnimatedVariant> = {
  source: "kamod",
  intent: "A short, precise sweep of the lens and handle — like scanning a field of view once.",
  defaultVariant: "scan",
  loopCapable: false,
  variants: {
    scan: [
      {
        target: "lens",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -1px)" },
          { transform: "translate(-1px, 1px)" },
          { transform: "translate(0px, 0px)" },
        ],
        options: { duration: 720, easing: "ease-in-out" },
      },
      {
        target: "handle",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -1px)" },
          { transform: "translate(-1px, 1px)" },
          { transform: "translate(0px, 0px)" },
        ],
        options: { duration: 720, easing: "ease-in-out" },
      },
    ],
  },
};
