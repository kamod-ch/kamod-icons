import { useLayoutEffect, useMemo, useRef } from "preact/hooks";
import { canUseDOM, supportsIntersectionObserver } from "./browser";
import { composeHandlers } from "./combine-handlers";
import { AnimateIconContext, type AnimateIconContextValue } from "./context";
import { resolveReducedMotion, subscribeReducedMotion } from "./reduced-motion";
import { resolveTriggerVariant } from "./runner";
import type { AnimateIconProps, AnimationController } from "./types";

/**
 * Group trigger wrapper. Renders a semantic-neutral `span[data-kamod-animate-icon]`
 * so one hover/focus/press/view trigger can drive nested animated icons via context.
 */
export function AnimateIcon<Variant extends string = string>({
  children,
  animation,
  animate,
  animateOnHover,
  animateOnFocus,
  animateOnPress,
  animateOnView,
  animateOnViewOnce = true,
  animateOnViewMargin,
  persistOnEnd,
  reducedMotion = "system",
  class: className,
  style,
  onPointerEnter,
  onPointerLeave,
  onFocusIn,
  onFocusOut,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
}: AnimateIconProps<Variant> & {
  onPointerEnter?: (event: Event) => void;
  onPointerLeave?: (event: Event) => void;
  onFocusIn?: (event: Event) => void;
  onFocusOut?: (event: Event) => void;
  onPointerDown?: (event: Event) => void;
  onPointerUp?: (event: Event) => void;
  onPointerCancel?: (event: Event) => void;
}) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const controllersRef = useRef(new Map<symbol, AnimationController>());
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);
  const reducedRef = useRef(false);
  const pressActiveRef = useRef(false);
  const consumerRef = useRef({
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  });
  consumerRef.current = {
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  };

  const defaultVariant =
    animation?.defaultVariant ?? Object.keys(animation?.variants ?? {})[0] ?? "default";

  const contextValue = useMemo<AnimateIconContextValue>(
    () => ({
      register: ({ id, controller }) => {
        controllersRef.current.set(id, controller);
      },
      unregister: (id) => {
        controllersRef.current.delete(id);
      },
      playAll: (variant) => {
        for (const controller of controllersRef.current.values()) {
          controller.play(variant);
        }
      },
      stopAll: () => {
        for (const controller of controllersRef.current.values()) {
          controller.stop();
        }
      },
      resetAll: () => {
        for (const controller of controllersRef.current.values()) {
          controller.reset();
        }
      },
    }),
    [],
  );

  const hasTriggers = Boolean(
    animate || animateOnHover || animateOnFocus || animateOnPress || animateOnView,
  );

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
    if (animate) {
      const variant = resolveTriggerVariant(animate, defaultVariant);
      if (variant && !reducedRef.current) contextValue.playAll(variant);
      else if (animate === true && !reducedRef.current) contextValue.playAll();
    }
  }, [animate, contextValue, defaultVariant]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const playFrom = (value: boolean | string | undefined) => {
      if (reducedRef.current) return;
      if (value === false || value === undefined) return;
      if (value === true) {
        contextValue.playAll();
        return;
      }
      contextValue.playAll(value);
    };

    const listeners: Array<[string, EventListener]> = [];

    if (animateOnHover) {
      const enter = composeHandlers(
        (event) => consumerRef.current.onPointerEnter?.(event),
        () => playFrom(animateOnHover),
      ) as EventListener;
      const leave = composeHandlers(
        (event) => consumerRef.current.onPointerLeave?.(event),
        () => {
          if (persistOnEnd) contextValue.stopAll();
          else contextValue.resetAll();
        },
      ) as EventListener;
      wrapper.addEventListener("pointerenter", enter);
      wrapper.addEventListener("pointerleave", leave);
      listeners.push(["pointerenter", enter], ["pointerleave", leave]);
    }

    if (animateOnFocus) {
      const focusIn = composeHandlers(
        (event) => consumerRef.current.onFocusIn?.(event),
        () => playFrom(animateOnFocus),
      ) as EventListener;
      const focusOut = composeHandlers(
        (event) => consumerRef.current.onFocusOut?.(event),
        () => {
          if (persistOnEnd) contextValue.stopAll();
          else contextValue.resetAll();
        },
      ) as EventListener;
      wrapper.addEventListener("focusin", focusIn);
      wrapper.addEventListener("focusout", focusOut);
      listeners.push(["focusin", focusIn], ["focusout", focusOut]);
    }

    if (animateOnPress) {
      const down = composeHandlers(
        (event) => consumerRef.current.onPointerDown?.(event),
        (event) => {
          if (event instanceof PointerEvent && event.button !== 0) return;
          pressActiveRef.current = true;
          playFrom(animateOnPress);
        },
      ) as EventListener;
      const up = composeHandlers(
        (event) => consumerRef.current.onPointerUp?.(event),
        (event) => consumerRef.current.onPointerCancel?.(event),
        () => {
          if (!pressActiveRef.current) return;
          pressActiveRef.current = false;
          if (persistOnEnd) contextValue.stopAll();
          else contextValue.resetAll();
        },
      ) as EventListener;
      wrapper.addEventListener("pointerdown", down);
      wrapper.addEventListener("pointerup", up);
      wrapper.addEventListener("pointercancel", up);
      listeners.push(["pointerdown", down], ["pointerup", up], ["pointercancel", up]);
    }

    if (animateOnView && supportsIntersectionObserver() && !reducedRef.current) {
      const viewVariant = resolveTriggerVariant(animateOnView, defaultVariant);
      if (viewVariant) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              contextValue.playAll(viewVariant === defaultVariant ? undefined : viewVariant);
              if (animateOnViewOnce) {
                observerRef.current?.disconnect();
                observerRef.current = undefined;
              }
            }
          },
          { rootMargin: animateOnViewMargin ?? "0px" },
        );
        observerRef.current.observe(wrapper);
      }
    }

    return () => {
      for (const [type, listener] of listeners) {
        wrapper.removeEventListener(type, listener);
      }
      observerRef.current?.disconnect();
      observerRef.current = undefined;
      pressActiveRef.current = false;
    };
  }, [
    animateOnHover,
    animateOnFocus,
    animateOnPress,
    animateOnView,
    animateOnViewOnce,
    animateOnViewMargin,
    persistOnEnd,
    contextValue,
    defaultVariant,
  ]);

  return (
    <AnimateIconContext.Provider value={contextValue}>
      <span
        ref={wrapperRef}
        data-kamod-animate-icon=""
        class={className}
        style={hasTriggers ? style : { display: "contents", ...style }}
      >
        {children}
      </span>
    </AnimateIconContext.Provider>
  );
}
