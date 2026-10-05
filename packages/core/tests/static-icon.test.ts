// @vitest-environment node

import { describe, expect, it } from "vitest";
import { AgentIcon } from "../src/sets/iconmind/AgentIcon";
import { HeartIcon } from "../src/sets/lucide/HeartIcon";

describe("static lucide icons", () => {
  it("exports HeartIcon as a named function component", () => {
    expect(typeof HeartIcon).toBe("function");
    expect(HeartIcon.name).toBe("HeartIcon");
  });

  it("exports IconMind icons as named function components", () => {
    expect(typeof AgentIcon).toBe("function");
    expect(AgentIcon.name).toBe("AgentIcon");
  });
});
