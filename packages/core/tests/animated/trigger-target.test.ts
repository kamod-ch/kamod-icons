import { afterEach, describe, expect, it } from "vitest";
import { resolveTriggerTarget } from "../../src/animated/runtime/resolve-trigger-target";

describe("resolveTriggerTarget", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("resolves self, parent, and closest selectors after mount", () => {
    const button = document.createElement("button");
    button.className = "icon-button";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    button.appendChild(svg);
    document.body.appendChild(button);

    expect(resolveTriggerTarget(svg, "self")).toBe(svg);
    expect(resolveTriggerTarget(svg, "parent")).toBe(button);
    expect(resolveTriggerTarget(svg, "closest:.icon-button")).toBe(button);
  });
});
