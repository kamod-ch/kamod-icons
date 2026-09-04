import { composeHandlers } from "./combine-handlers";
import { supportsIntersectionObserver } from "./browser";
import { createRecipeRunner, resolveTriggerVariant } from "./runner";
import type { AnimationController, AnimationRecipe, TriggerBindings } from "./types";

export type TriggerControllerOptions = TriggerBindings & {
  root: SVGSVGElement;
  triggerElement: Element;
  recipe?: AnimationRecipe<string>;
  reducedMotion?: boolean;
  loop?: boolean | number;
  loopDelay?: number;
  delay?: number;
  persistOnEnd?: boolean;
  consumerHandlers?: {
    onPointerEnter?: (event: Event) => void;
    onPointerLeave?: (event: Event) => void;
    onFocusIn?: (event: Event) => void;
    onFocusOut?: (event: Event) => void;
    onPointerDown?: (event: Event) => void;
    onPointerUp?: (event: Event) => void;
    onPointerCancel?: (event: Event) => void;
  };
};

export type TriggerController = {
  destroy: () => void;
  getRunner: () => AnimationController | undefined;
  update: (options: TriggerControllerOptions) => void;
};

export function createTriggerController(initial: TriggerControllerOptions): TriggerController {
  let options = initial;
  let runner: AnimationController | undefined;
  let observer: IntersectionObserver | undefined;
  let pressActive = false;

  let onPointerEnter: ((event: Event) => void) | undefined;
  let onPointerLeave: ((event: Event) => void) | undefined;
  let onFocusIn: ((event: Event) => void) | undefined;
  let onFocusOut: ((event: Event) => void) | undefined;
  let onPointerDown: ((event: Event) => void) | undefined;
  let onPointerUp: ((event: Event) => void) | undefined;
  let onPointerCancel: ((event: Event) => void) | undefined;

  function defaultVariant() {
    return (
      options.recipe?.defaultVariant ?? Object.keys(options.recipe?.variants ?? {})[0] ?? "default"
    );
  }

  function ensureRunner(): AnimationController | undefined {
    if (!options.recipe) return undefined;
    runner ??= createRecipeRunner({
      root: options.root,
      recipe: options.recipe,
      reducedMotion: options.reducedMotion,
      loop: options.loop,
      loopDelay: options.loopDelay,
      delay: options.delay,
      persistOnEnd: options.persistOnEnd,
    });
    return runner;
  }

  function playFrom(value: boolean | string | undefined) {
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
    onPointerEnter = composeHandlers(options.consumerHandlers?.onPointerEnter, () =>
      playFrom(hoverVariant),
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
            observer = undefined;
          }
        }
      },
      { rootMargin: options.animateOnViewMargin ?? "0px" },
    );
    observer.observe(options.triggerElement);
  }

  function unbindAll() {
    if (onPointerEnter) {
      options.triggerElement.removeEventListener("pointerenter", onPointerEnter);
      onPointerEnter = undefined;
    }
    if (onPointerLeave) {
      options.triggerElement.removeEventListener("pointerleave", onPointerLeave);
      onPointerLeave = undefined;
    }
    if (onFocusIn) {
      options.triggerElement.removeEventListener("focusin", onFocusIn);
      onFocusIn = undefined;
    }
    if (onFocusOut) {
      options.triggerElement.removeEventListener("focusout", onFocusOut);
      onFocusOut = undefined;
    }
    if (onPointerDown) {
      options.triggerElement.removeEventListener("pointerdown", onPointerDown);
      options.triggerElement.removeEventListener("pointerup", onPointerUp!);
      options.triggerElement.removeEventListener("pointercancel", onPointerCancel!);
      onPointerDown = undefined;
      onPointerUp = undefined;
      onPointerCancel = undefined;
    }
    observer?.disconnect();
    observer = undefined;
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
    runner = undefined;
  }

  function update(next: TriggerControllerOptions) {
    destroy();
    options = next;
    runner = undefined;
    bindAll();
  }

  bindAll();

  return {
    destroy,
    getRunner: () => runner,
    update,
  };
}

export function mergeTriggerProps(
  elementProps: Record<string, unknown>,
  bindings: TriggerBindings,
  recipe: AnimationRecipe<string> | undefined,
  shared: {
    getRoot: () => SVGSVGElement | null;
    getController?: () => AnimationController | undefined;
    reducedMotion?: boolean;
    loop?: boolean | number;
    loopDelay?: number;
    delay?: number;
    persistOnEnd?: boolean;
  },
): Record<string, unknown> {
  if (!recipe) return elementProps;

  const hoverVariant = bindings.animateOnHover;
  const focusVariant = bindings.animateOnFocus;
  const pressVariant = bindings.animateOnPress;
  const defaultVariant = recipe.defaultVariant ?? Object.keys(recipe.variants)[0] ?? "default";

  let localRunner: AnimationController | undefined;

  const getActiveController = () => {
    const external = shared.getController?.();
    if (external) return external;
    const root = shared.getRoot();
    if (!root) return undefined;
    localRunner ??= createRecipeRunner({
      root,
      recipe,
      reducedMotion: shared.reducedMotion,
      loop: shared.loop,
      loopDelay: shared.loopDelay,
      delay: shared.delay,
      persistOnEnd: shared.persistOnEnd,
    });
    return localRunner;
  };

  const playFrom = (value: boolean | string | undefined) => {
    const variant = resolveTriggerVariant(value, defaultVariant);
    if (!variant) return;
    getActiveController()?.play(variant);
  };

  const stopActive = () => getActiveController()?.stop();
  const resetActive = () => getActiveController()?.reset();
  const next = { ...elementProps };

  if (hoverVariant) {
    next.onPointerEnter = composeHandlers(
      elementProps.onPointerEnter as ((event: PointerEvent) => void) | undefined,
      () => playFrom(hoverVariant),
    );
    next.onPointerLeave = composeHandlers(
      elementProps.onPointerLeave as ((event: PointerEvent) => void) | undefined,
      () => (shared.persistOnEnd ? stopActive() : resetActive()),
    );
  }

  if (focusVariant) {
    next.onFocusIn = composeHandlers(
      elementProps.onFocusIn as ((event: FocusEvent) => void) | undefined,
      () => playFrom(focusVariant),
    );
    next.onFocusOut = composeHandlers(
      elementProps.onFocusOut as ((event: FocusEvent) => void) | undefined,
      () => (shared.persistOnEnd ? stopActive() : resetActive()),
    );
  }

  if (pressVariant) {
    let pressed = false;
    next.onPointerDown = composeHandlers(
      elementProps.onPointerDown as ((event: PointerEvent) => void) | undefined,
      (event) => {
        if (event.button !== 0) return;
        pressed = true;
        playFrom(pressVariant);
      },
    );
    const release = composeHandlers(
      elementProps.onPointerUp as ((event: PointerEvent) => void) | undefined,
      () => {
        if (!pressed) return;
        pressed = false;
        if (shared.persistOnEnd) stopActive();
        else resetActive();
      },
    );
    next.onPointerUp = release;
    next.onPointerCancel = composeHandlers(
      elementProps.onPointerCancel as ((event: PointerEvent) => void) | undefined,
      release,
    );
  }

  return next;
}
