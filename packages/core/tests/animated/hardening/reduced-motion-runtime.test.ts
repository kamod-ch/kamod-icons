import { afterEach, describe, expect, it, vi } from "vitest";
import {
  readSystemReducedMotion,
  resolveReducedMotion,
  subscribeReducedMotion,
} from "../../../src/animated/runtime/reduced-motion";

describe("reduced motion runtime", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("respects always and never modes", () => {
    expect(resolveReducedMotion("always")).toBe(true);
    expect(resolveReducedMotion("never")).toBe(false);
  });

  it("reacts to matchMedia changes when subscribed", () => {
    let matches = false;
    const listeners = new Set<() => void>();
    const media = {
      get matches() {
        return matches;
      },
      addEventListener: (_: string, handler: () => void) => {
        listeners.add(handler);
      },
      removeEventListener: (_: string, handler: () => void) => {
        listeners.delete(handler);
      },
    };

    vi.stubGlobal("matchMedia", () => media as MediaQueryList);

    expect(readSystemReducedMotion()).toBe(false);

    const changes: boolean[] = [];
    const unsubscribe = subscribeReducedMotion((reduced) => changes.push(reduced));

    matches = true;
    for (const handler of listeners) handler();

    matches = false;
    for (const handler of listeners) handler();

    unsubscribe();
    expect(changes).toEqual([true, false]);
  });

  it("returns noop unsubscribe when matchMedia is unavailable", () => {
    const original = globalThis.matchMedia;
    // @ts-expect-error test override
    globalThis.matchMedia = undefined;
    expect(subscribeReducedMotion(() => undefined)).toBeTypeOf("function");
    globalThis.matchMedia = original;
  });
});
