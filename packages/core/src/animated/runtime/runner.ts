import { supportsElementAnimate } from "./browser";
import { resolvePathDrawingKeyframes, isSvgGeometry } from "./path-drawing";
import type { AnimationController, AnimationRecipe, AnimationTrack } from "./types";

export type RecipeRunnerOptions = {
  root: SVGSVGElement;
  recipe: AnimationRecipe<string>;
  reducedMotion?: boolean;
  loop?: boolean | number;
  loopDelay?: number;
  delay?: number;
  persistOnEnd?: boolean;
};

type ActiveTrack = {
  element: Element;
  track: AnimationTrack;
};

function resolveVariantName(recipe: AnimationRecipe<string>, variant?: string): string | undefined {
  if (variant) return variant;
  if (recipe.defaultVariant) return recipe.defaultVariant;
  const names = Object.keys(recipe.variants);
  return names[0];
}

function resolveIterations(loop?: boolean | number): number {
  if (loop === true) return Number.POSITIVE_INFINITY;
  if (typeof loop === "number" && loop > 0) return loop;
  return 1;
}

function buildAnimationOptions(
  track: AnimationTrack,
  runner: RecipeRunnerOptions,
): KeyframeAnimationOptions {
  const base = { ...track.options };
  const iterations = resolveIterations(runner.loop);
  if (iterations !== 1) base.iterations = iterations;
  if (runner.persistOnEnd) base.fill = "forwards";
  return base;
}

function collectTracks(root: SVGSVGElement, recipe: AnimationRecipe<string>, variant: string) {
  const tracks = recipe.variants[variant] ?? [];
  const active: ActiveTrack[] = [];
  for (const track of tracks) {
    const nodes = root.querySelectorAll(`[data-kamod-part="${track.target}"]`);
    for (const element of nodes) {
      active.push({ element, track });
    }
  }
  return active;
}

export function createRecipeRunner(runnerOptions: RecipeRunnerOptions): AnimationController {
  let animations: Animation[] = [];
  let timers: ReturnType<typeof setTimeout>[] = [];
  let loopTimer: ReturnType<typeof setTimeout> | undefined;
  let generation = 0;
  let pathStyles = new Map<Element, { strokeDasharray: string; strokeDashoffset: string }>();

  function rememberPathStyle(element: Element) {
    if (!isSvgGeometry(element)) return;
    if (pathStyles.has(element)) return;
    pathStyles.set(element, {
      strokeDasharray: element.style.strokeDasharray,
      strokeDashoffset: element.style.strokeDashoffset,
    });
  }

  function clearTimers() {
    for (const timer of timers) clearTimeout(timer);
    timers = [];
    if (loopTimer !== undefined) {
      clearTimeout(loopTimer);
      loopTimer = undefined;
    }
  }

  function cancelAnimations() {
    for (const animation of animations) {
      try {
        animation.cancel();
      } catch {
        // WAAPI cancel can throw on finished animations in some engines.
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
    pathStyles = new Map();
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
        // noop
      }
    }
  }

  function startTracks(variant: string, gen: number) {
    if (gen !== generation) return;
    if (runnerOptions.reducedMotion || !supportsElementAnimate()) return;

    const activeTracks = collectTracks(runnerOptions.root, runnerOptions.recipe, variant);
    const started: Animation[] = [];

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
      void Promise.all(started.map((animation) => animation.finished.catch(() => undefined))).then(
        () => {
          if (gen !== generation) return;
          loopTimer = setTimeout(() => {
            if (gen !== generation) return;
            play(variant);
          }, loopDelay);
        },
      );
    }
  }

  function play(variant?: string) {
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

export function resolveTriggerVariant(
  value: boolean | string | undefined,
  fallback: string | undefined,
): string | undefined {
  if (value === false || value === undefined) return undefined;
  if (value === true) return fallback;
  return value;
}
