// @vitest-environment node

import { renderToString } from "preact-render-to-string";
import { describe, expect, it } from "vitest";
import { HeartIcon } from "../src/sets/lucide/HeartIcon";

describe("SSR", () => {
  it("renders HeartIcon to static SVG markup", () => {
    const html = renderToString(<HeartIcon size={24} title="Favorite" />);

    expect(html).toContain("<svg");
    expect(html).toContain("<title>Favorite</title>");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain('role="img"');
    expect(html).toContain('stroke="currentColor"');
  });
});
