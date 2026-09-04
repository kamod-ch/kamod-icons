import { describe, expect, it } from "vitest";
import * as animatedPublic from "../../../src/animated/lucide/index";
import {
  animatedIconMeta,
  animatedMvpComponentNames,
} from "../../../src/animated/lucide/animated-icons.meta";

describe("animated icon metadata", () => {
  it("lists exactly 24 MVP entries", () => {
    expect(animatedIconMeta).toHaveLength(24);
    expect(animatedMvpComponentNames).toHaveLength(24);
  });

  it("maps every metadata entry to a public export", () => {
    for (const entry of animatedIconMeta) {
      expect(animatedPublic).toHaveProperty(entry.componentName);
      expect(typeof animatedPublic[entry.componentName as keyof typeof animatedPublic]).toBe(
        "function",
      );
    }
  });

  it("maps every public icon export to metadata", () => {
    for (const name of animatedMvpComponentNames) {
      expect(animatedIconMeta.some((entry) => entry.componentName === name)).toBe(true);
    }
  });

  it("uses kamod source and non-empty intent for all entries", () => {
    for (const entry of animatedIconMeta) {
      expect(entry.source).toBe("kamod");
      expect(entry.intent.length).toBeGreaterThan(10);
      expect(entry.variants.length).toBeGreaterThan(0);
      expect(entry.variants.length).toBeLessThanOrEqual(2);
      expect(entry.variants).toContain(entry.defaultVariant);
    }
  });

  it("marks only loader and refresh families as loop-capable", () => {
    const loopCapable = animatedIconMeta
      .filter((entry) => entry.loopCapable)
      .map((e) => e.componentName);
    expect(loopCapable.sort()).toEqual(
      ["LoaderCircleAnimatedIcon", "RefreshCwAnimatedIcon", "SettingsAnimatedIcon"].sort(),
    );
  });
});
