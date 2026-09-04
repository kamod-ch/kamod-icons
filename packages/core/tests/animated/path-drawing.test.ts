import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  preparePathDrawingElement,
  resolvePathDrawingKeyframes,
} from "../../src/animated/runtime/path-drawing";

describe("path drawing", () => {
  let path: SVGPathElement;

  beforeEach(() => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M0 0 L10 0");
    path.getTotalLength = () => 10;
    svg.appendChild(path);
    document.body.appendChild(svg);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("scales normalized stroke dash offsets using path length", () => {
    const length = preparePathDrawingElement(path);
    const keyframes = resolvePathDrawingKeyframes(path, [
      { strokeDashoffset: 1 },
      { strokeDashoffset: 0 },
    ]) as Keyframe[];

    expect(length).toBeGreaterThan(0);
    expect(path.style.strokeDasharray).toBe(String(length));
    expect(keyframes[0]?.strokeDashoffset).toBe(String(length));
    expect(keyframes[1]?.strokeDashoffset).toBe("0");
  });
});
