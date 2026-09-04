import type { KamodRecipe } from "./shared";

export type UploadAnimatedVariant = "send";

export const uploadAnimatedRecipe: KamodRecipe<UploadAnimatedVariant> = {
  source: "kamod",
  intent: "The arrow rises toward the tray edge — upload or send upward, mirroring download.",
  defaultVariant: "send",
  loopCapable: false,
  variants: {
    send: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-3px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 560, easing: "ease-in-out" },
      },
    ],
  },
};
