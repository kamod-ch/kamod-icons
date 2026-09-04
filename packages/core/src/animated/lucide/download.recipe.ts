import type { KamodRecipe } from "./shared";

export type DownloadAnimatedVariant = "fetch";

export const downloadAnimatedRecipe: KamodRecipe<DownloadAnimatedVariant> = {
  source: "kamod",
  intent:
    "The arrow travels toward the tray while the shelf stays fixed — a clear download landing motion.",
  defaultVariant: "fetch",
  loopCapable: false,
  variants: {
    fetch: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(3px)" },
          { transform: "translateY(0px)" },
        ],
        options: { duration: 640, easing: "ease-in-out" },
      },
    ],
  },
};
