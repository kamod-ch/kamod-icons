// @vitest-environment jsdom

import { hydrate, render } from "preact";
import { renderToString } from "preact-render-to-string";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  BellAnimatedIcon,
  CheckAnimatedIcon,
  HeartAnimatedIcon,
  LoaderCircleAnimatedIcon,
  SearchAnimatedIcon,
} from "../src/animated/lucide/index";
import { AnimateIcon } from "../src/animated/runtime/animate-icon";

describe("SSR and hydration fixture", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("hydrates animated icons without console warnings", () => {
    const errors: unknown[] = [];
    const warn = console.error;
    const warning = console.warn;
    console.error = (...args: unknown[]) => errors.push(args);
    console.warn = (...args: unknown[]) => errors.push(args);

    try {
      const markup = (
        <AnimateIcon animateOnHover>
          <SearchAnimatedIcon size={24} title="Search" />
          <BellAnimatedIcon size={24} title="Bell" />
          <CheckAnimatedIcon size={24} title="Check" />
          <HeartAnimatedIcon size={24} title="Heart" />
          <LoaderCircleAnimatedIcon size={24} title="Loading" />
        </AnimateIcon>
      );

      const html = renderToString(markup);

      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);

      hydrate(markup, container);

      expect(container.querySelectorAll("svg").length).toBe(5);
      expect(errors).toEqual([]);
    } finally {
      console.error = warn;
      console.warn = warning;
    }
  });

  it("renders static markup when reduced motion is always", () => {
    const html = renderToString(
      <SearchAnimatedIcon animate reducedMotion="always" title="Search" />,
    );
    expect(html).toContain("<svg");
    expect(html).toContain("<title>Search</title>");
    expect(html).not.toContain("window");
  });

  it("supports client render after SSR markup without duplicate titles", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const html = renderToString(<SearchAnimatedIcon title="Search" />);
    container.innerHTML = html;
    render(<SearchAnimatedIcon title="Search" />, container);
    expect(container.querySelectorAll("title").length).toBe(1);
  });
});
