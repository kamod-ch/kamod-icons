function isSvgGeometry(element: Element): element is SVGGeometryElement {
  return typeof (element as SVGGeometryElement).getTotalLength === "function";
}

export { isSvgGeometry };

function scaleDashValue(value: number | string, length: number): string {
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

function scaleKeyframe(kf: Keyframe, length: number): Keyframe {
  const next: Keyframe = { ...kf };
  if ("strokeDasharray" in kf && kf.strokeDasharray !== undefined) {
    next.strokeDasharray = scaleDashValue(kf.strokeDasharray as number | string, length);
  }
  if ("strokeDashoffset" in kf && kf.strokeDashoffset !== undefined) {
    next.strokeDashoffset = scaleDashValue(kf.strokeDashoffset as number | string, length);
  }
  return next;
}

export function preparePathDrawingElement(element: SVGGeometryElement): number {
  const length = element.getTotalLength();
  element.style.strokeDasharray = `${length}`;
  return length;
}

export function resolvePathDrawingKeyframes(
  element: SVGGeometryElement,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
): Keyframe[] | PropertyIndexedKeyframes {
  const length = preparePathDrawingElement(element);
  if (Array.isArray(keyframes)) {
    return keyframes.map((kf) => scaleKeyframe(kf, length));
  }
  const scaled: PropertyIndexedKeyframes = { ...keyframes };
  if (keyframes.strokeDasharray !== undefined) {
    const values = Array.isArray(keyframes.strokeDasharray)
      ? keyframes.strokeDasharray
      : [keyframes.strokeDasharray];
    scaled.strokeDasharray = values.map((v) => scaleDashValue(v as number | string, length));
  }
  if (keyframes.strokeDashoffset !== undefined) {
    const values = Array.isArray(keyframes.strokeDashoffset)
      ? keyframes.strokeDashoffset
      : [keyframes.strokeDashoffset];
    scaled.strokeDashoffset = values.map((v) => scaleDashValue(v as number | string, length));
  }
  return scaled;
}
