// src/animated/runtime/animate-icon.tsx
import { useLayoutEffect, useMemo, useRef } from "preact/hooks";

// src/animated/runtime/browser.ts
function canUseDOM() {
  return typeof document !== "undefined";
}
function supportsElementAnimate() {
  if (!canUseDOM()) return false;
  return typeof Element !== "undefined" && typeof Element.prototype.animate === "function";
}
function supportsIntersectionObserver() {
  if (!canUseDOM()) return false;
  return typeof IntersectionObserver === "function";
}

// src/animated/runtime/combine-handlers.ts
function composeHandlers(...handlers) {
  return (event) => {
    for (const handler of handlers) {
      handler?.(event);
    }
  };
}

// src/animated/runtime/context.tsx
import { createContext } from "preact";
import { useContext } from "preact/hooks";
var AnimateIconContext = createContext(null);
function useAnimateIconContext() {
  return useContext(AnimateIconContext);
}

// src/animated/runtime/reduced-motion.ts
var REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function readSystemReducedMotion() {
  if (typeof globalThis.matchMedia !== "function") return false;
  return globalThis.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function resolveReducedMotion(mode) {
  if (mode === "always") return true;
  if (mode === "never") return false;
  return readSystemReducedMotion();
}
function subscribeReducedMotion(onChange) {
  if (typeof globalThis.matchMedia !== "function") return () => {
  };
  const media = globalThis.matchMedia(REDUCED_MOTION_QUERY);
  const handler = () => onChange(media.matches);
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}

// src/animated/runtime/path-drawing.ts
function isSvgGeometry(element) {
  return typeof element.getTotalLength === "function";
}
function scaleDashValue(value, length) {
  if (typeof value === "number") {
    if (value >= 0 && value <= 1) return String(length * value);
    return String(value);
  }
  const trimmed = value.trim();
  if (trimmed.endsWith("%")) {
    const pct = Number.parseFloat(trimmed) / 100;
    return String(length * pct);
  }
  return trimmed;
}
function scaleKeyframe(kf, length) {
  const next = { ...kf };
  if ("strokeDasharray" in kf && kf.strokeDasharray !== void 0) {
    next.strokeDasharray = scaleDashValue(kf.strokeDasharray, length);
  }
  if ("strokeDashoffset" in kf && kf.strokeDashoffset !== void 0) {
    next.strokeDashoffset = scaleDashValue(kf.strokeDashoffset, length);
  }
  return next;
}
function preparePathDrawingElement(element) {
  const length = element.getTotalLength();
  element.style.strokeDasharray = `${length}`;
  return length;
}
function resolvePathDrawingKeyframes(element, keyframes) {
  const length = preparePathDrawingElement(element);
  if (Array.isArray(keyframes)) {
    return keyframes.map((kf) => scaleKeyframe(kf, length));
  }
  const scaled = { ...keyframes };
  if (keyframes.strokeDasharray !== void 0) {
    const values = Array.isArray(keyframes.strokeDasharray) ? keyframes.strokeDasharray : [keyframes.strokeDasharray];
    scaled.strokeDasharray = values.map((v) => scaleDashValue(v, length));
  }
  if (keyframes.strokeDashoffset !== void 0) {
    const values = Array.isArray(keyframes.strokeDashoffset) ? keyframes.strokeDashoffset : [keyframes.strokeDashoffset];
    scaled.strokeDashoffset = values.map((v) => scaleDashValue(v, length));
  }
  return scaled;
}

// src/animated/runtime/runner.ts
function resolveVariantName(recipe, variant) {
  if (variant) return variant;
  if (recipe.defaultVariant) return recipe.defaultVariant;
  const names = Object.keys(recipe.variants);
  return names[0];
}
function resolveIterations(loop) {
  if (loop === true) return Number.POSITIVE_INFINITY;
  if (typeof loop === "number" && loop > 0) return loop;
  return 1;
}
function buildAnimationOptions(track, runner) {
  const base = { ...track.options };
  const iterations = resolveIterations(runner.loop);
  if (iterations !== 1) base.iterations = iterations;
  if (runner.persistOnEnd) base.fill = "forwards";
  return base;
}
function collectTracks(root, recipe, variant) {
  const tracks = recipe.variants[variant] ?? [];
  const active = [];
  for (const track of tracks) {
    const nodes = root.querySelectorAll(`[data-kamod-part="${track.target}"]`);
    for (const element of nodes) {
      active.push({ element, track });
    }
  }
  return active;
}
function createRecipeRunner(runnerOptions) {
  let animations = [];
  let timers = [];
  let loopTimer;
  let generation = 0;
  let pathStyles = /* @__PURE__ */ new Map();
  function rememberPathStyle(element) {
    if (!isSvgGeometry(element)) return;
    if (pathStyles.has(element)) return;
    pathStyles.set(element, {
      strokeDasharray: element.style.strokeDasharray,
      strokeDashoffset: element.style.strokeDashoffset
    });
  }
  function clearTimers() {
    for (const timer of timers) clearTimeout(timer);
    timers = [];
    if (loopTimer !== void 0) {
      clearTimeout(loopTimer);
      loopTimer = void 0;
    }
  }
  function cancelAnimations() {
    for (const animation of animations) {
      try {
        animation.cancel();
      } catch {
      }
    }
    animations = [];
  }
  function restorePathStyles() {
    for (const [element, styles] of pathStyles) {
      if (!isSvgGeometry(element)) continue;
      element.style.strokeDasharray = styles.strokeDasharray;
      element.style.strokeDashoffset = styles.strokeDashoffset;
    }
    pathStyles = /* @__PURE__ */ new Map();
  }
  function stop() {
    generation += 1;
    clearTimers();
    cancelAnimations();
  }
  function reset() {
    stop();
    restorePathStyles();
  }
  function destroy() {
    reset();
  }
  function finish() {
    clearTimers();
    for (const animation of animations) {
      try {
        animation.finish();
      } catch {
      }
    }
  }
  function startTracks(variant, gen) {
    if (gen !== generation) return;
    if (runnerOptions.reducedMotion || !supportsElementAnimate()) return;
    const activeTracks = collectTracks(runnerOptions.root, runnerOptions.recipe, variant);
    const started = [];
    for (const { element, track } of activeTracks) {
      rememberPathStyle(element);
      let keyframes = track.keyframes;
      if (track.pathDrawing && isSvgGeometry(element)) {
        keyframes = resolvePathDrawingKeyframes(element, keyframes);
      }
      const options = buildAnimationOptions(track, runnerOptions);
      const animation = element.animate(keyframes, options);
      started.push(animation);
    }
    animations = started;
    if (runnerOptions.loopDelay && runnerOptions.loopDelay > 0 && started.length > 0) {
      const loopDelay = runnerOptions.loopDelay;
      void Promise.all(started.map((animation) => animation.finished.catch(() => void 0))).then(
        () => {
          if (gen !== generation) return;
          loopTimer = setTimeout(() => {
            if (gen !== generation) return;
            play(variant);
          }, loopDelay);
        }
      );
    }
  }
  function play(variant) {
    stop();
    const gen = generation;
    const variantName = resolveVariantName(runnerOptions.recipe, variant);
    if (!variantName) return;
    const delay = runnerOptions.delay ?? 0;
    if (delay > 0) {
      const timer = setTimeout(() => startTracks(variantName, gen), delay);
      timers.push(timer);
      return;
    }
    startTracks(variantName, gen);
  }
  return { play, stop, finish, reset, destroy };
}
function resolveTriggerVariant(value, fallback) {
  if (value === false || value === void 0) return void 0;
  if (value === true) return fallback;
  return value;
}

// src/animated/runtime/animate-icon.tsx
import { jsx } from "preact/jsx-runtime";
function AnimateIcon({
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
  onPointerCancel
}) {
  const wrapperRef = useRef(null);
  const controllersRef = useRef(/* @__PURE__ */ new Map());
  const observerRef = useRef(void 0);
  const reducedRef = useRef(false);
  const pressActiveRef = useRef(false);
  const consumerRef = useRef({
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel
  });
  consumerRef.current = {
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel
  };
  const defaultVariant = animation?.defaultVariant ?? Object.keys(animation?.variants ?? {})[0] ?? "default";
  const contextValue = useMemo(
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
      }
    }),
    []
  );
  const hasTriggers = Boolean(
    animate || animateOnHover || animateOnFocus || animateOnPress || animateOnView
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
    const playFrom = (value) => {
      if (reducedRef.current) return;
      if (value === false || value === void 0) return;
      if (value === true) {
        contextValue.playAll();
        return;
      }
      contextValue.playAll(value);
    };
    const listeners = [];
    if (animateOnHover) {
      const enter = composeHandlers(
        (event) => consumerRef.current.onPointerEnter?.(event),
        () => playFrom(animateOnHover)
      );
      const leave = composeHandlers(
        (event) => consumerRef.current.onPointerLeave?.(event),
        () => {
          if (persistOnEnd) contextValue.stopAll();
          else contextValue.resetAll();
        }
      );
      wrapper.addEventListener("pointerenter", enter);
      wrapper.addEventListener("pointerleave", leave);
      listeners.push(["pointerenter", enter], ["pointerleave", leave]);
    }
    if (animateOnFocus) {
      const focusIn = composeHandlers(
        (event) => consumerRef.current.onFocusIn?.(event),
        () => playFrom(animateOnFocus)
      );
      const focusOut = composeHandlers(
        (event) => consumerRef.current.onFocusOut?.(event),
        () => {
          if (persistOnEnd) contextValue.stopAll();
          else contextValue.resetAll();
        }
      );
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
        }
      );
      const up = composeHandlers(
        (event) => consumerRef.current.onPointerUp?.(event),
        (event) => consumerRef.current.onPointerCancel?.(event),
        () => {
          if (!pressActiveRef.current) return;
          pressActiveRef.current = false;
          if (persistOnEnd) contextValue.stopAll();
          else contextValue.resetAll();
        }
      );
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
              contextValue.playAll(viewVariant === defaultVariant ? void 0 : viewVariant);
              if (animateOnViewOnce) {
                observerRef.current?.disconnect();
                observerRef.current = void 0;
              }
            }
          },
          { rootMargin: animateOnViewMargin ?? "0px" }
        );
        observerRef.current.observe(wrapper);
      }
    }
    return () => {
      for (const [type, listener] of listeners) {
        wrapper.removeEventListener(type, listener);
      }
      observerRef.current?.disconnect();
      observerRef.current = void 0;
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
    defaultVariant
  ]);
  return /* @__PURE__ */ jsx(AnimateIconContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "span",
    {
      ref: wrapperRef,
      "data-kamod-animate-icon": "",
      class: className,
      style: hasTriggers ? style : { display: "contents", ...style },
      children
    }
  ) });
}

// src/animated/runtime/use-animated-icon.ts
import { useLayoutEffect as useLayoutEffect2, useRef as useRef2 } from "preact/hooks";

// src/animated/runtime/resolve-trigger-target.ts
function resolveTriggerTarget(root, target) {
  if (target === "self") return root;
  if (target === "parent") return root.parentElement ?? root;
  if (target.startsWith("closest:")) {
    const selector = target.slice("closest:".length);
    return root.closest(selector) ?? root;
  }
  return root;
}

// src/animated/runtime/triggers.ts
function createTriggerController(initial) {
  let options = initial;
  let runner;
  let observer;
  let pressActive = false;
  let onPointerEnter;
  let onPointerLeave;
  let onFocusIn;
  let onFocusOut;
  let onPointerDown;
  let onPointerUp;
  let onPointerCancel;
  function defaultVariant() {
    return options.recipe?.defaultVariant ?? Object.keys(options.recipe?.variants ?? {})[0] ?? "default";
  }
  function ensureRunner() {
    if (!options.recipe) return void 0;
    runner ?? (runner = createRecipeRunner({
      root: options.root,
      recipe: options.recipe,
      reducedMotion: options.reducedMotion,
      loop: options.loop,
      loopDelay: options.loopDelay,
      delay: options.delay,
      persistOnEnd: options.persistOnEnd
    }));
    return runner;
  }
  function playFrom(value) {
    const variant = resolveTriggerVariant(value, defaultVariant());
    if (!variant) return;
    ensureRunner()?.play(variant);
  }
  function stopRunner() {
    runner?.stop();
  }
  function resetRunner() {
    runner?.reset();
  }
  function bindPointerHover() {
    const hoverVariant = options.animateOnHover;
    if (!hoverVariant) return;
    onPointerEnter = composeHandlers(
      options.consumerHandlers?.onPointerEnter,
      () => playFrom(hoverVariant)
    );
    onPointerLeave = composeHandlers(options.consumerHandlers?.onPointerLeave, () => {
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    options.triggerElement.addEventListener("pointerenter", onPointerEnter);
    options.triggerElement.addEventListener("pointerleave", onPointerLeave);
  }
  function bindFocus() {
    const focusVariant = options.animateOnFocus;
    if (!focusVariant) return;
    onFocusIn = composeHandlers(options.consumerHandlers?.onFocusIn, () => playFrom(focusVariant));
    onFocusOut = composeHandlers(options.consumerHandlers?.onFocusOut, () => {
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    options.triggerElement.addEventListener("focusin", onFocusIn);
    options.triggerElement.addEventListener("focusout", onFocusOut);
  }
  function bindPress() {
    const pressVariant = options.animateOnPress;
    if (!pressVariant) return;
    onPointerDown = composeHandlers(options.consumerHandlers?.onPointerDown, (event) => {
      if (!(event instanceof PointerEvent) || event.button !== 0) return;
      pressActive = true;
      playFrom(pressVariant);
    });
    onPointerUp = composeHandlers(options.consumerHandlers?.onPointerUp, () => {
      if (!pressActive) return;
      pressActive = false;
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    onPointerCancel = composeHandlers(options.consumerHandlers?.onPointerCancel, () => {
      if (!pressActive) return;
      pressActive = false;
      if (options.persistOnEnd) stopRunner();
      else resetRunner();
    });
    options.triggerElement.addEventListener("pointerdown", onPointerDown);
    options.triggerElement.addEventListener("pointerup", onPointerUp);
    options.triggerElement.addEventListener("pointercancel", onPointerCancel);
  }
  function bindView() {
    const viewVariant = options.animateOnView;
    if (!viewVariant || !supportsIntersectionObserver()) return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          playFrom(viewVariant);
          if (options.animateOnViewOnce !== false) {
            observer?.disconnect();
            observer = void 0;
          }
        }
      },
      { rootMargin: options.animateOnViewMargin ?? "0px" }
    );
    observer.observe(options.triggerElement);
  }
  function unbindAll() {
    if (onPointerEnter) {
      options.triggerElement.removeEventListener("pointerenter", onPointerEnter);
      onPointerEnter = void 0;
    }
    if (onPointerLeave) {
      options.triggerElement.removeEventListener("pointerleave", onPointerLeave);
      onPointerLeave = void 0;
    }
    if (onFocusIn) {
      options.triggerElement.removeEventListener("focusin", onFocusIn);
      onFocusIn = void 0;
    }
    if (onFocusOut) {
      options.triggerElement.removeEventListener("focusout", onFocusOut);
      onFocusOut = void 0;
    }
    if (onPointerDown) {
      options.triggerElement.removeEventListener("pointerdown", onPointerDown);
      options.triggerElement.removeEventListener("pointerup", onPointerUp);
      options.triggerElement.removeEventListener("pointercancel", onPointerCancel);
      onPointerDown = void 0;
      onPointerUp = void 0;
      onPointerCancel = void 0;
    }
    observer?.disconnect();
    observer = void 0;
    pressActive = false;
  }
  function bindAll() {
    bindPointerHover();
    bindFocus();
    bindPress();
    bindView();
    if (options.animate) playFrom(options.animate);
  }
  function destroy() {
    unbindAll();
    runner?.destroy();
    runner = void 0;
  }
  function update(next) {
    destroy();
    options = next;
    runner = void 0;
    bindAll();
  }
  bindAll();
  return {
    destroy,
    getRunner: () => runner,
    update
  };
}

// src/animated/runtime/use-animated-icon.ts
function useAnimatedIcon(props) {
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
  const svgRef = useRef2(null);
  const controllerRef = useRef2(void 0);
  const triggerRef = useRef2(void 0);
  const registrationRef = useRef2(void 0);
  const reducedRef = useRef2(false);
  const group = useAnimateIconContext();
  const consumerHandlersRef = useRef2({
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel
  });
  consumerHandlersRef.current = {
    onPointerEnter,
    onPointerLeave,
    onFocusIn,
    onFocusOut,
    onPointerDown,
    onPointerUp,
    onPointerCancel
  };
  useLayoutEffect2(() => {
    if (!canUseDOM()) return;
    reducedRef.current = resolveReducedMotion(reducedMotion);
    return subscribeReducedMotion(() => {
      if (reducedMotion !== "system") return;
      reducedRef.current = resolveReducedMotion("system");
    });
  }, [reducedMotion]);
  useLayoutEffect2(() => {
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
      persistOnEnd
    });
    const id = /* @__PURE__ */ Symbol("kamod-animated-icon");
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
        onPointerEnter: (event) => consumerHandlersRef.current.onPointerEnter?.(event),
        onPointerLeave: (event) => consumerHandlersRef.current.onPointerLeave?.(event),
        onFocusIn: (event) => consumerHandlersRef.current.onFocusIn?.(event),
        onFocusOut: (event) => consumerHandlersRef.current.onFocusOut?.(event),
        onPointerDown: (event) => consumerHandlersRef.current.onPointerDown?.(event),
        onPointerUp: (event) => consumerHandlersRef.current.onPointerUp?.(event),
        onPointerCancel: (event) => consumerHandlersRef.current.onPointerCancel?.(event)
      }
    });
    return () => {
      triggerRef.current?.destroy();
      triggerRef.current = void 0;
      if (registrationRef.current) {
        group?.unregister(registrationRef.current);
        registrationRef.current = void 0;
      }
      controllerRef.current?.destroy();
      controllerRef.current = void 0;
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
    group
  ]);
  return { svgRef, svgProps };
}

// src/animated/lucide/shared.tsx
import { jsx as jsx2, jsxs } from "preact/jsx-runtime";
function AnimatedIconSvg({
  size = 24,
  title,
  overflow = "hidden",
  svgRef,
  svgProps,
  children
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ref: svgRef,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      overflow,
      "aria-hidden": title ? void 0 : true,
      role: title ? "img" : void 0,
      ...svgProps,
      children: [
        title ? /* @__PURE__ */ jsx2("title", { children: title }) : null,
        children
      ]
    }
  );
}

// src/animated/lucide/arrow-right.recipe.ts
var arrowRightAnimatedRecipe = {
  source: "kamod",
  intent: "The arrow shifts forward once \u2014 a clear \u201Cnext\u201D or continue cue without overshoot.",
  defaultVariant: "advance",
  loopCapable: false,
  variants: {
    advance: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateX(0px)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(0px)" }
        ],
        options: { duration: 360, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/ArrowRightAnimatedIcon.tsx
import { jsx as jsx3 } from "preact/jsx-runtime";
function ArrowRightAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: arrowRightAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx3(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx3("path", { "data-kamod-part": "arrow", d: "M5 12h14m-7-7 7 7-7 7" }) });
}

// src/animated/lucide/arrow-left.recipe.ts
var arrowLeftAnimatedRecipe = {
  source: "kamod",
  intent: "The arrow shifts backward once \u2014 a calm \u201Cback\u201D or previous cue.",
  defaultVariant: "retreat",
  loopCapable: false,
  variants: {
    retreat: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateX(0px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(0px)" }
        ],
        options: { duration: 360, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/ArrowLeftAnimatedIcon.tsx
import { jsx as jsx4 } from "preact/jsx-runtime";
function ArrowLeftAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: arrowLeftAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx4(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx4("path", { "data-kamod-part": "arrow", d: "m12 19-7-7 7-7m7 7H5" }) });
}

// src/animated/lucide/chevron-down.recipe.ts
var chevronDownAnimatedRecipe = {
  source: "kamod",
  intent: "The chevron nudges downward \u2014 expand or reveal content below.",
  defaultVariant: "expand",
  loopCapable: false,
  variants: {
    expand: [
      {
        target: "chevron",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(2px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 320, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/ChevronDownAnimatedIcon.tsx
import { jsx as jsx5 } from "preact/jsx-runtime";
function ChevronDownAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: chevronDownAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx5(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx5("path", { "data-kamod-part": "chevron", d: "m6 9 6 6 6-6" }) });
}

// src/animated/lucide/chevron-up.recipe.ts
var chevronUpAnimatedRecipe = {
  source: "kamod",
  intent: "The chevron nudges upward \u2014 collapse or hide content above.",
  defaultVariant: "collapse",
  loopCapable: false,
  variants: {
    collapse: [
      {
        target: "chevron",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 320, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/ChevronUpAnimatedIcon.tsx
import { jsx as jsx6 } from "preact/jsx-runtime";
function ChevronUpAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: chevronUpAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx6(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx6("path", { "data-kamod-part": "chevron", d: "m18 15-6-6-6 6" }) });
}

// src/animated/lucide/search.recipe.ts
var searchAnimatedRecipe = {
  source: "kamod",
  intent: "A short, precise sweep of the lens and handle \u2014 like scanning a field of view once.",
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
          { transform: "translate(0px, 0px)" }
        ],
        options: { duration: 720, easing: "ease-in-out" }
      },
      {
        target: "handle",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -1px)" },
          { transform: "translate(-1px, 1px)" },
          { transform: "translate(0px, 0px)" }
        ],
        options: { duration: 720, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/SearchAnimatedIcon.tsx
import { jsx as jsx7, jsxs as jsxs2 } from "preact/jsx-runtime";
function SearchAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: searchAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs2(
    AnimatedIconSvg,
    {
      size: props.size,
      title: props.title,
      svgRef,
      svgProps,
      overflow: "visible",
      children: [
        /* @__PURE__ */ jsx7("circle", { "data-kamod-part": "lens", cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsx7("path", { "data-kamod-part": "handle", d: "m21 21-4.34-4.34" })
      ]
    }
  );
}

// src/animated/lucide/menu.recipe.ts
var menuAnimatedRecipe = {
  source: "kamod",
  intent: "Top and bottom bars separate slightly \u2014 a menu opening hint without morphing into an X.",
  defaultVariant: "spread",
  loopCapable: false,
  variants: {
    spread: [
      {
        target: "line-top",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 400, easing: "ease-in-out" }
      },
      {
        target: "line-bottom",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(2px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 400, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/MenuAnimatedIcon.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "preact/jsx-runtime";
function MenuAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: menuAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs3(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx8("path", { "data-kamod-part": "line-top", d: "M4 5h16" }),
    /* @__PURE__ */ jsx8("path", { "data-kamod-part": "line-mid", d: "M4 12h16" }),
    /* @__PURE__ */ jsx8("path", { "data-kamod-part": "line-bottom", d: "M4 19h16" })
  ] });
}

// src/animated/lucide/x.recipe.ts
var xAnimatedRecipe = {
  source: "kamod",
  intent: "Both strokes rotate into alignment \u2014 a decisive close or dismiss action.",
  defaultVariant: "dismiss",
  loopCapable: false,
  variants: {
    dismiss: [
      {
        target: "stroke-a",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(90deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 420, easing: "ease-in-out" }
      },
      {
        target: "stroke-b",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(-90deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 420, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/XAnimatedIcon.tsx
import { jsx as jsx9, jsxs as jsxs4 } from "preact/jsx-runtime";
function XAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: xAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs4(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx9("path", { "data-kamod-part": "stroke-a", d: "M18 6 6 18" }),
    /* @__PURE__ */ jsx9("path", { "data-kamod-part": "stroke-b", d: "M6 6l12 12" })
  ] });
}

// src/animated/lucide/check.recipe.ts
var checkAnimatedRecipe = {
  source: "kamod",
  intent: "The check mark draws once along its path \u2014 confirmation without bounce or overshoot.",
  defaultVariant: "draw",
  loopCapable: false,
  variants: {
    draw: [
      {
        target: "mark",
        pathDrawing: true,
        keyframes: [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        options: { duration: 520, easing: "ease-out", fill: "forwards" }
      }
    ]
  }
};

// src/animated/lucide/CheckAnimatedIcon.tsx
import { jsx as jsx10 } from "preact/jsx-runtime";
function CheckAnimatedIcon(props) {
  const { persistOnEnd = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: checkAnimatedRecipe,
    persistOnEnd,
    ...rest
  });
  return /* @__PURE__ */ jsx10(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx10("path", { "data-kamod-part": "mark", d: "M20 6 9 17l-5-5" }) });
}

// src/animated/lucide/plus.recipe.ts
var plusAnimatedRecipe = {
  source: "kamod",
  intent: "The vertical bar grows from the center \u2014 an additive action without bounce.",
  defaultVariant: "add",
  loopCapable: false,
  variants: {
    add: [
      {
        target: "bar-v",
        keyframes: [
          { transform: "scaleY(1)", transformOrigin: "12px 12px" },
          { transform: "scaleY(0.4)", transformOrigin: "12px 12px" },
          { transform: "scaleY(1)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 380, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/PlusAnimatedIcon.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "preact/jsx-runtime";
function PlusAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: plusAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs5(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx11("path", { "data-kamod-part": "bar-h", d: "M5 12h14" }),
    /* @__PURE__ */ jsx11("path", { "data-kamod-part": "bar-v", d: "M12 5v14" })
  ] });
}

// src/animated/lucide/minus.recipe.ts
var minusAnimatedRecipe = {
  source: "kamod",
  intent: "The bar shortens horizontally \u2014 a subtractive or remove action.",
  defaultVariant: "remove",
  loopCapable: false,
  variants: {
    remove: [
      {
        target: "bar",
        keyframes: [
          { transform: "scaleX(1)", transformOrigin: "12px 12px" },
          { transform: "scaleX(0.55)", transformOrigin: "12px 12px" },
          { transform: "scaleX(1)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 360, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/MinusAnimatedIcon.tsx
import { jsx as jsx12 } from "preact/jsx-runtime";
function MinusAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: minusAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx12(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx12("path", { "data-kamod-part": "bar", d: "M5 12h14" }) });
}

// src/animated/lucide/copy.recipe.ts
var copyAnimatedRecipe = {
  source: "kamod",
  intent: "The front sheet lifts diagonally \u2014 duplicated content being picked up.",
  defaultVariant: "duplicate",
  loopCapable: false,
  variants: {
    duplicate: [
      {
        target: "front",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(2px, -2px)" },
          { transform: "translate(0px, 0px)" }
        ],
        options: { duration: 440, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/CopyAnimatedIcon.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "preact/jsx-runtime";
function CopyAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: copyAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs6(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx13("rect", { "data-kamod-part": "front", x: "8", y: "8", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx13("path", { "data-kamod-part": "back", d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ] });
}

// src/animated/lucide/download.recipe.ts
var downloadAnimatedRecipe = {
  source: "kamod",
  intent: "The arrow travels toward the tray while the shelf stays fixed \u2014 a clear download landing motion.",
  defaultVariant: "fetch",
  loopCapable: false,
  variants: {
    fetch: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(3px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 640, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/DownloadAnimatedIcon.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "preact/jsx-runtime";
function DownloadAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: downloadAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs7(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsxs7("g", { "data-kamod-part": "arrow", children: [
      /* @__PURE__ */ jsx14("path", { d: "M12 15V3" }),
      /* @__PURE__ */ jsx14("path", { d: "m7 10 5 5 5-5" })
    ] }),
    /* @__PURE__ */ jsx14("path", { "data-kamod-part": "tray", d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" })
  ] });
}

// src/animated/lucide/upload.recipe.ts
var uploadAnimatedRecipe = {
  source: "kamod",
  intent: "The arrow rises toward the tray edge \u2014 upload or send upward, mirroring download.",
  defaultVariant: "send",
  loopCapable: false,
  variants: {
    send: [
      {
        target: "arrow",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-3px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 560, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/UploadAnimatedIcon.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "preact/jsx-runtime";
function UploadAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: uploadAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs8(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsxs8("g", { "data-kamod-part": "arrow", children: [
      /* @__PURE__ */ jsx15("path", { d: "M12 3v12" }),
      /* @__PURE__ */ jsx15("path", { d: "m5-7-5-5-5 5" })
    ] }),
    /* @__PURE__ */ jsx15("path", { "data-kamod-part": "tray", d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" })
  ] });
}

// src/animated/lucide/refresh-cw.recipe.ts
var refreshCwAnimatedRecipe = {
  source: "kamod",
  intent: "Continuous rotation signals an ongoing refresh or sync \u2014 stops cleanly when unmounted.",
  defaultVariant: "spin",
  loopCapable: true,
  variants: {
    spin: [
      {
        target: "glyph",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 900, easing: "linear" }
      }
    ]
  }
};

// src/animated/lucide/RefreshCwAnimatedIcon.tsx
import { jsx as jsx16, jsxs as jsxs9 } from "preact/jsx-runtime";
function RefreshCwAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: refreshCwAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx16(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsxs9("g", { "data-kamod-part": "glyph", children: [
    /* @__PURE__ */ jsx16("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ jsx16("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ jsx16("path", { d: "M8 16H3v5" })
  ] }) });
}

// src/animated/lucide/settings.recipe.ts
var settingsAnimatedRecipe = {
  source: "kamod",
  intent: "Adjust rotates the gear partially for a tweak; spin loops for ongoing configuration or processing.",
  defaultVariant: "adjust",
  loopCapable: true,
  variants: {
    adjust: [
      {
        target: "gear",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(45deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 520, easing: "ease-in-out" }
      }
    ],
    spin: [
      {
        target: "gear",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 1200, easing: "linear" }
      }
    ]
  }
};

// src/animated/lucide/SettingsAnimatedIcon.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "preact/jsx-runtime";
function SettingsAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: settingsAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs10(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx17(
      "path",
      {
        "data-kamod-part": "gear",
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ),
    /* @__PURE__ */ jsx17("circle", { "data-kamod-part": "hub", cx: "12", cy: "12", r: "3" })
  ] });
}

// src/animated/lucide/bell.recipe.ts
var bellAnimatedRecipe = {
  source: "kamod",
  intent: "The bell body and clapper swing from plausible pivot points \u2014 a single believable ring, not endless shaking.",
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
          { transform: "rotate(0deg)", transformOrigin: "12px 6px" }
        ],
        options: { duration: 680, easing: "ease-in-out" }
      },
      {
        target: "clapper",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(10deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(-10deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(5deg)", transformOrigin: "12px 19px" },
          { transform: "rotate(0deg)", transformOrigin: "12px 19px" }
        ],
        options: { duration: 680, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/BellAnimatedIcon.tsx
import { jsx as jsx18, jsxs as jsxs11 } from "preact/jsx-runtime";
function BellAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: bellAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs11(
    AnimatedIconSvg,
    {
      size: props.size,
      title: props.title,
      svgRef,
      svgProps,
      overflow: "visible",
      children: [
        /* @__PURE__ */ jsx18(
          "path",
          {
            "data-kamod-part": "body",
            d: "M4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
          }
        ),
        /* @__PURE__ */ jsx18("path", { "data-kamod-part": "clapper", d: "M10.268 21a2 2 0 0 0 3.464 0" })
      ]
    }
  );
}

// src/animated/lucide/trash-2.recipe.ts
var trash2AnimatedRecipe = {
  source: "kamod",
  intent: "The lid lifts briefly \u2014 delete or remove with the bin body staying grounded.",
  defaultVariant: "delete",
  loopCapable: false,
  variants: {
    delete: [
      {
        target: "lid",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 480, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/Trash2AnimatedIcon.tsx
import { jsx as jsx19, jsxs as jsxs12 } from "preact/jsx-runtime";
function Trash2AnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: trash2AnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs12(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsxs12("g", { "data-kamod-part": "lid", children: [
      /* @__PURE__ */ jsx19("path", { d: "M3 6h18" }),
      /* @__PURE__ */ jsx19("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
    ] }),
    /* @__PURE__ */ jsx19("path", { "data-kamod-part": "bin", d: "M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" })
  ] });
}

// src/animated/lucide/lock.recipe.ts
var lockAnimatedRecipe = {
  source: "kamod",
  intent: "The shackle drops into the body \u2014 transitioning to a locked, secured state.",
  defaultVariant: "secure",
  loopCapable: false,
  variants: {
    secure: [
      {
        target: "shackle",
        keyframes: [
          { transform: "translateY(0px)" },
          { transform: "translateY(2px)" },
          { transform: "translateY(0px)" }
        ],
        options: { duration: 420, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/LockAnimatedIcon.tsx
import { jsx as jsx20, jsxs as jsxs13 } from "preact/jsx-runtime";
function LockAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: lockAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs13(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx20("rect", { "data-kamod-part": "body", x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx20("path", { "data-kamod-part": "shackle", d: "M7 11V7a5 5 0 0 1 10 0v4" })
  ] });
}

// src/animated/lucide/lock-open.recipe.ts
var lockOpenAnimatedRecipe = {
  source: "kamod",
  intent: "The shackle swings open \u2014 an unlocked or accessible state.",
  defaultVariant: "unlock",
  loopCapable: false,
  variants: {
    unlock: [
      {
        target: "shackle",
        keyframes: [
          { transform: "translate(0px, 0px)" },
          { transform: "translate(-2px, -2px)" },
          { transform: "translate(0px, 0px)" }
        ],
        options: { duration: 420, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/LockOpenAnimatedIcon.tsx
import { jsx as jsx21, jsxs as jsxs14 } from "preact/jsx-runtime";
function LockOpenAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: lockOpenAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs14(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx21("rect", { "data-kamod-part": "body", x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx21("path", { "data-kamod-part": "shackle", d: "M7 11V7a5 5 0 0 1 9.9-1" })
  ] });
}

// src/animated/lucide/eye.recipe.ts
var eyeAnimatedRecipe = {
  source: "kamod",
  intent: "Look enlarges the pupil for focus; blink closes it briefly \u2014 visibility without cartoon bounce.",
  defaultVariant: "look",
  loopCapable: false,
  variants: {
    look: [
      {
        target: "pupil",
        keyframes: [
          { transform: "scale(1)", transformOrigin: "12px 12px" },
          { transform: "scale(1.25)", transformOrigin: "12px 12px" },
          { transform: "scale(1)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 400, easing: "ease-in-out" }
      }
    ],
    blink: [
      {
        target: "pupil",
        keyframes: [
          { transform: "scaleY(1)", transformOrigin: "12px 12px" },
          { transform: "scaleY(0.15)", transformOrigin: "12px 12px" },
          { transform: "scaleY(1)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 280, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/EyeAnimatedIcon.tsx
import { jsx as jsx22, jsxs as jsxs15 } from "preact/jsx-runtime";
function EyeAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: eyeAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsxs15(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx22(
      "path",
      {
        "data-kamod-part": "outline",
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ),
    /* @__PURE__ */ jsx22("circle", { "data-kamod-part": "pupil", cx: "12", cy: "12", r: "3" })
  ] });
}

// src/animated/lucide/eye-off.recipe.ts
var eyeOffAnimatedRecipe = {
  source: "kamod",
  intent: "The strike-through fades in \u2014 content hidden or visibility toggled off.",
  defaultVariant: "conceal",
  loopCapable: false,
  variants: {
    conceal: [
      {
        target: "strike",
        keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 1 }],
        options: { duration: 360, easing: "ease-out", fill: "forwards" }
      }
    ]
  }
};

// src/animated/lucide/EyeOffAnimatedIcon.tsx
import { jsx as jsx23, jsxs as jsxs16 } from "preact/jsx-runtime";
function EyeOffAnimatedIcon(props) {
  const { persistOnEnd = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: eyeOffAnimatedRecipe,
    persistOnEnd,
    ...rest
  });
  return /* @__PURE__ */ jsxs16(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: [
    /* @__PURE__ */ jsx23(
      "path",
      {
        "data-kamod-part": "eye",
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242"
      }
    ),
    /* @__PURE__ */ jsx23(
      "path",
      {
        "data-kamod-part": "strike",
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"
      }
    )
  ] });
}

// src/animated/lucide/heart.recipe.ts
var heartAnimatedRecipe = {
  source: "kamod",
  intent: "Pulse affirms lightly; selected fills with currentColor and rests in a stable favored state.",
  defaultVariant: "pulse",
  loopCapable: false,
  variants: {
    pulse: [
      {
        target: "heart",
        keyframes: [
          { transform: "scale(1)", transformOrigin: "12px 12px" },
          { transform: "scale(1.06)", transformOrigin: "12px 12px" },
          { transform: "scale(1)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 560, easing: "ease-in-out" }
      }
    ],
    selected: [
      {
        target: "heart",
        keyframes: [
          { fillOpacity: 0, strokeOpacity: 1 },
          { fillOpacity: 1, strokeOpacity: 1 }
        ],
        options: { duration: 480, easing: "ease-out", fill: "forwards" }
      }
    ]
  }
};

// src/animated/lucide/HeartAnimatedIcon.tsx
import { jsx as jsx24 } from "preact/jsx-runtime";
function HeartAnimatedIcon(props) {
  const { persistOnEnd: persistProp, ...rest } = props;
  const persistOnEnd = persistProp ?? (rest.animate === "selected" || rest.animateOnHover === "selected");
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: heartAnimatedRecipe,
    persistOnEnd,
    ...rest
  });
  return /* @__PURE__ */ jsx24(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx24(
    "path",
    {
      "data-kamod-part": "heart",
      fill: "currentColor",
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
    }
  ) });
}

// src/animated/lucide/play.recipe.ts
var playAnimatedRecipe = {
  source: "kamod",
  intent: "The play triangle nudges forward \u2014 start playback without elastic overshoot.",
  defaultVariant: "play",
  loopCapable: false,
  variants: {
    play: [
      {
        target: "triangle",
        keyframes: [
          { transform: "translateX(0px)", transformOrigin: "10px 12px" },
          { transform: "translateX(2px)", transformOrigin: "10px 12px" },
          { transform: "translateX(0px)", transformOrigin: "10px 12px" }
        ],
        options: { duration: 340, easing: "ease-in-out" }
      }
    ]
  }
};

// src/animated/lucide/PlayAnimatedIcon.tsx
import { jsx as jsx25 } from "preact/jsx-runtime";
function PlayAnimatedIcon(props) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: playAnimatedRecipe,
    ...props
  });
  return /* @__PURE__ */ jsx25(AnimatedIconSvg, { size: props.size, title: props.title, svgRef, svgProps, children: /* @__PURE__ */ jsx25(
    "path",
    {
      "data-kamod-part": "triangle",
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
    }
  ) });
}

// src/animated/lucide/loader-circle.recipe.ts
var loaderCircleAnimatedRecipe = {
  source: "kamod",
  intent: "An even, continuous rotation that reads as loading and stops cleanly when unmounted or reduced motion applies.",
  defaultVariant: "spin",
  loopCapable: true,
  variants: {
    spin: [
      {
        target: "arc",
        keyframes: [
          { transform: "rotate(0deg)", transformOrigin: "12px 12px" },
          { transform: "rotate(360deg)", transformOrigin: "12px 12px" }
        ],
        options: { duration: 900, easing: "linear" }
      }
    ]
  }
};

// src/animated/lucide/LoaderCircleAnimatedIcon.tsx
import { jsx as jsx26 } from "preact/jsx-runtime";
function LoaderCircleAnimatedIcon(props) {
  const { loop = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: loaderCircleAnimatedRecipe,
    loop,
    ...rest
  });
  return /* @__PURE__ */ jsx26(
    AnimatedIconSvg,
    {
      size: props.size,
      title: props.title,
      svgRef,
      svgProps,
      overflow: "visible",
      children: /* @__PURE__ */ jsx26("path", { "data-kamod-part": "arc", d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  );
}
export {
  AnimateIcon,
  ArrowLeftAnimatedIcon,
  ArrowRightAnimatedIcon,
  BellAnimatedIcon,
  CheckAnimatedIcon,
  ChevronDownAnimatedIcon,
  ChevronUpAnimatedIcon,
  CopyAnimatedIcon,
  DownloadAnimatedIcon,
  EyeAnimatedIcon,
  EyeOffAnimatedIcon,
  HeartAnimatedIcon,
  LoaderCircleAnimatedIcon,
  LockAnimatedIcon,
  LockOpenAnimatedIcon,
  MenuAnimatedIcon,
  MinusAnimatedIcon,
  PlayAnimatedIcon,
  PlusAnimatedIcon,
  RefreshCwAnimatedIcon,
  SearchAnimatedIcon,
  SettingsAnimatedIcon,
  Trash2AnimatedIcon,
  UploadAnimatedIcon,
  XAnimatedIcon
};
//# sourceMappingURL=index.js.map