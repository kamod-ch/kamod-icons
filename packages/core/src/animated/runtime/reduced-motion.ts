import type { ReducedMotionMode } from "./types";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function readSystemReducedMotion(): boolean {
  if (typeof globalThis.matchMedia !== "function") return false;
  return globalThis.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function resolveReducedMotion(mode: ReducedMotionMode): boolean {
  if (mode === "always") return true;
  if (mode === "never") return false;
  return readSystemReducedMotion();
}

export function subscribeReducedMotion(onChange: (reduced: boolean) => void): () => void {
  if (typeof globalThis.matchMedia !== "function") return () => {};
  const media = globalThis.matchMedia(REDUCED_MOTION_QUERY);
  const handler = () => onChange(media.matches);
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}
