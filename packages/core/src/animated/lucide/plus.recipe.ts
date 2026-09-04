import type { KamodRecipe } from "./shared";

export type PlusAnimatedVariant = "add";

export const plusAnimatedRecipe: KamodRecipe<PlusAnimatedVariant> = {
  source: "kamod",
  intent: "The vertical bar grows from the center — an additive action without bounce.",
  defaultVariant: "add",
  loopCapable: false,
  variants: {
    add: [
      {
        target: "bar-v",
        keyframes: [
          { transform: "scaleY(1)", transformOrigin: "12px 12px" },
          { transform: "scaleY(0.4)", transformOrigin: "12px 12px" },
          { transform: "scaleY(1)", transformOrigin: "12px 12px" },
        ],
        options: { duration: 380, easing: "ease-in-out" },
      },
    ],
  },
};
