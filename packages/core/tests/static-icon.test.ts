// @vitest-environment node

import { describe, expect, it } from "vitest";
import { HeartIcon } from "../src/sets/lucide/HeartIcon";

describe("static lucide icons", () => {
  it("exports HeartIcon as a named function component", () => {
    expect(typeof HeartIcon).toBe("function");
    expect(HeartIcon.name).toBe("HeartIcon");
  });
});
