import type { TriggerTarget } from "./types";

export function resolveTriggerTarget(root: SVGSVGElement, target: TriggerTarget): Element {
  if (target === "self") return root;
  if (target === "parent") return root.parentElement ?? root;
  if (target.startsWith("closest:")) {
    const selector = target.slice("closest:".length);
    return root.closest(selector) ?? root;
  }
  return root;
}
