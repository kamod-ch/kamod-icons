import { useLayoutEffect, useRef } from "preact/hooks";
import type { RefObject } from "preact";
import { canUseDOM } from "./browser";
import { useAnimateIconContext } from "./context";
import { resolveReducedMotion, subscribeReducedMotion } from "./reduced-motion";
import { resolveTriggerTarget } from "./resolve-trigger-target";
import { createRecipeRunner } from "./runner";
import { createTriggerController } from "./triggers";
import type { AnimatedIconProps, AnimationController } from "./types";

export type UseAnimatedIconResult = {
  svgRef: RefObject<SVGSVGElement>;
  svgProps: Record<string, unknown>;
};

export function useAnimatedIcon<Variant extends string = string>(
  props: AnimatedIconProps<Variant>,
): UseAnimatedIconResult {
  const {
    animation,
    animate,
    animateOnHover,
    animateOnFocus,
    animateOnPress,
    animateOnView,
    animateOnViewOnce,
    animateOnViewMargin,
    loop,
    loopDelay,
    delay,
    persistOnEnd,
    triggerTarget = "self",
    reducedMotion = "system",
    size: _size,
    title: _title,
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    ...svgProps
  } = props;

  const svgRef = useRef<SVGSVGElement>(null);
  const controllerRef = useRef<AnimationController | undefined>(undefined);
  const triggerRef = useRef<ReturnType<typeof createTriggerController> | undefined>(undefined);
  const registrationRef = useRef<symbol | undefined>(undefined);
  const reducedRef = useRef(false);
  const group = useAnimateIconContext();
  const consumerHandlersRef = useRef({
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  });
  consumerHandlersRef.current = {
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  };

  useLayoutEffect(() => {
    if (!canUseDOM()) return;
    reducedRef.current = resolveReducedMotion(reducedMotion);
    return subscribeReducedMotion(() => {
      if (reducedMotion !== "system") return;
      reducedRef.current = resolveReducedMotion("system");
    });
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (!canUseDOM()) return;
    const svg = svgRef.current;
    if (!svg || !animation) return;

    controllerRef.current = createRecipeRunner({
      root: svg,
      recipe: animation,
      reducedMotion: reducedRef.current,
      loop,
      loopDelay,
      delay,
      persistOnEnd,
    });

    const id = Symbol("kamod-animated-icon");
    registrationRef.current = id;
    group?.register({ id, controller: controllerRef.current });

    triggerRef.current = createTriggerController({
      root: svg,
      triggerElement: resolveTriggerTarget(svg, triggerTarget),
      recipe: animation,
      animate,
      animateOnHover,
      animateOnFocus,
      animateOnPress,
      animateOnView: triggerTarget === "self" ? animateOnView : animateOnView,
      animateOnViewOnce,
      animateOnViewMargin,
      reducedMotion: reducedRef.current,
      loop,
      loopDelay,
      delay,
      persistOnEnd,
      consumerHandlers: {
        onPointerEnter: (event) => consumerHandlersRef.current.onPointerEnter?.(event as never),
        onPointerLeave: (event) => consumerHandlersRef.current.onPointerLeave?.(event as never),
        onFocusIn: (event) => consumerHandlersRef.current.onFocusIn?.(event as never),
        onFocusOut: (event) => consumerHandlersRef.current.onFocusOut?.(event as never),
        onPointerDown: (event) => consumerHandlersRef.current.onPointerDown?.(event as never),
        onPointerUp: (event) => consumerHandlersRef.current.onPointerUp?.(event as never),
        onPointerCancel: (event) => consumerHandlersRef.current.onPointerCancel?.(event as never),
      },
    });

    return () => {
      triggerRef.current?.destroy();
      triggerRef.current = undefined;
      if (registrationRef.current) {
        group?.unregister(registrationRef.current);
        registrationRef.current = undefined;
      }
      controllerRef.current?.destroy();
      controllerRef.current = undefined;
    };
  }, [
    animation,
    animate,
    animateOnHover,
    animateOnFocus,
    animateOnPress,
    animateOnView,
    animateOnViewOnce,
    animateOnViewMargin,
    loop,
    loopDelay,
    delay,
    persistOnEnd,
    triggerTarget,
    reducedMotion,
    group,
  ]);

  return { svgRef, svgProps: svgProps as Record<string, unknown> };
}
