import type { ComponentChildren, CSSProperties } from "preact";
import type { IconProps } from "../../shared/types";

export type ReducedMotionMode = "system" | "always" | "never";

export type TriggerTarget = "self" | "parent" | `closest:${string}`;

export type AnimationTrack = {
  /** Matches `data-kamod-part` on SVG descendants. */
  target: string;
  keyframes: Keyframe[] | PropertyIndexedKeyframes;
  options?: KeyframeAnimationOptions;
  /**
   * When true, `strokeDasharray` / `strokeDashoffset` keyframe values between 0
   * and 1 are scaled by the element path length after mount.
   */
  pathDrawing?: boolean;
};

export type AnimationRecipe<Variant extends string = string> = {
  source: "kamod";
  /** Short Kamod-authored description of the motion intent. */
  intent?: string;
  defaultVariant?: Variant;
  variants: Record<Variant, AnimationTrack[]>;
};

/** Internal controller contract used by the recipe runner. */
export type AnimationController = {
  play: (variant?: string) => void;
  stop: () => void;
  finish: () => void;
  reset: () => void;
  destroy: () => void;
};

export type AnimatedIconProps<Variant extends string = string> = IconProps & {
  animation?: AnimationRecipe<Variant>;
  animate?: boolean | Variant;
  animateOnHover?: boolean | Variant;
  animateOnFocus?: boolean | Variant;
  animateOnPress?: boolean | Variant;
  animateOnView?: boolean | Variant;
  animateOnViewOnce?: boolean;
  animateOnViewMargin?: string;
  loop?: boolean | number;
  loopDelay?: number;
  delay?: number;
  persistOnEnd?: boolean;
  triggerTarget?: TriggerTarget;
  reducedMotion?: ReducedMotionMode;
};

export type AnimateIconProps<Variant extends string = string> = {
  children: ComponentChildren;
  animation?: AnimationRecipe<Variant>;
  animate?: boolean | Variant;
  animateOnHover?: boolean | Variant;
  animateOnFocus?: boolean | Variant;
  animateOnPress?: boolean | Variant;
  animateOnView?: boolean | Variant;
  animateOnViewOnce?: boolean;
  animateOnViewMargin?: string;
  loop?: boolean | number;
  loopDelay?: number;
  delay?: number;
  persistOnEnd?: boolean;
  reducedMotion?: ReducedMotionMode;
  class?: string;
  style?: CSSProperties;
};

export type TriggerBindings = {
  animate?: boolean | string;
  animateOnHover?: boolean | string;
  animateOnFocus?: boolean | string;
  animateOnPress?: boolean | string;
  animateOnView?: boolean | string;
  animateOnViewOnce?: boolean;
  animateOnViewMargin?: string;
  triggerTarget?: TriggerTarget;
};
