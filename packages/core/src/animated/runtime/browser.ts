/** DOM availability — safe to call anywhere; never touches globals at import time. */
export function canUseDOM(): boolean {
  return typeof document !== "undefined";
}

export function supportsElementAnimate(): boolean {
  if (!canUseDOM()) return false;
  return typeof Element !== "undefined" && typeof Element.prototype.animate === "function";
}

export function supportsIntersectionObserver(): boolean {
  if (!canUseDOM()) return false;
  return typeof IntersectionObserver === "function";
}
