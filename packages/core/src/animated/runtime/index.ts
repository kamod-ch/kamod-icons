export type {
  AnimatedIconProps,
  AnimateIconProps,
  AnimationController,
  AnimationRecipe,
  AnimationTrack,
  ReducedMotionMode,
  TriggerBindings,
  TriggerTarget,
} from "./types";

export { AnimateIcon } from "./animate-icon";
export { useAnimatedIcon } from "./use-animated-icon";
export { createRecipeRunner, resolveTriggerVariant } from "./runner";
export { composeHandlers } from "./combine-handlers";
export { canUseDOM, supportsElementAnimate, supportsIntersectionObserver } from "./browser";
export {
  readSystemReducedMotion,
  resolveReducedMotion,
  subscribeReducedMotion,
  REDUCED_MOTION_QUERY,
} from "./reduced-motion";
export { resolveTriggerTarget } from "./resolve-trigger-target";
export { preparePathDrawingElement, resolvePathDrawingKeyframes } from "./path-drawing";
export { createTriggerController } from "./triggers";
export { useAnimateIconContext, AnimateIconContext } from "./context";
