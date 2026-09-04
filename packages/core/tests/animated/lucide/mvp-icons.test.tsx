import type { ComponentType } from "preact";
import { describe, expect, it } from "vitest";
import type { AnimatedIconProps } from "../../../src/animated/runtime/types";
import type { KamodRecipe } from "../../../src/animated/lucide/shared";
import { animatedLucideTestRegistry } from "../../../src/animated/lucide/animated-icons.registry";
import { createAnimatedLucideIconTests } from "./icon-test-utils";

for (const entry of animatedLucideTestRegistry) {
  createAnimatedLucideIconTests({
    name: entry.name,
    Icon: entry.Icon as ComponentType<AnimatedIconProps<string>>,
    recipe: entry.recipe as KamodRecipe<string>,
    variants: [...entry.variants],
    ssrMarkers: [...entry.ssrMarkers],
  });
}

describe("animated MVP registry", () => {
  it("contains exactly 24 icons", () => {
    expect(animatedLucideTestRegistry).toHaveLength(24);
  });
});
