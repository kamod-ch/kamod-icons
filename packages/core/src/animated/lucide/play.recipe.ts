import type { KamodRecipe } from "./shared";

export type PlayAnimatedVariant = "play";

export const playAnimatedRecipe: KamodRecipe<PlayAnimatedVariant> = {
  source: "kamod",
  intent: "The play triangle nudges forward — start playback without elastic overshoot.",
  defaultVariant: "play",
  loopCapable: false,
  variants: {
    play: [
      {
        target: "triangle",
        keyframes: [
          { transform: "translateX(0px)", transformOrigin: "10px 12px" },
          { transform: "translateX(2px)", transformOrigin: "10px 12px" },
          { transform: "translateX(0px)", transformOrigin: "10px 12px" },
        ],
        options: { duration: 340, easing: "ease-in-out" },
      },
    ],
  },
};
