export function pointerEnter(target: Element) {
  target.dispatchEvent(new Event("pointerenter", { bubbles: true }));
}

export function pointerLeave(target: Element) {
  target.dispatchEvent(new Event("pointerleave", { bubbles: true }));
}

export function pointerDown(target: Element, button = 0) {
  const init = { bubbles: true, button };
  if (typeof PointerEvent === "function") {
    target.dispatchEvent(new PointerEvent("pointerdown", init));
    return;
  }
  target.dispatchEvent(new MouseEvent("mousedown", init));
}

export function pointerCancel(target: Element) {
  if (typeof PointerEvent === "function") {
    target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: true }));
    return;
  }
  target.dispatchEvent(new Event("pointercancel", { bubbles: true }));
}
