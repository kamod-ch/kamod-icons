import { expect, test } from "@playwright/test";

async function animationCount(scope: import("@playwright/test").Locator): Promise<number> {
  return scope.evaluate((root) => {
    const nodes = root.querySelectorAll("svg, svg *");
    let total = 0;
    for (const node of nodes) total += node.getAnimations().length;
    return total;
  });
}

test.describe("animated icon browser smoke", () => {
  test("renders fixture icons", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('[data-testid="search-hover"] svg')).toBeVisible();
    await expect(page.locator('[data-testid="parent-focus"] button')).toBeVisible();
  });

  test("hover triggers WAAPI on Search", async ({ page }) => {
    await page.goto("/");
    const row = page.locator('[data-testid="search-hover"]');
    await row.locator("svg").hover();
    await expect.poll(async () => animationCount(row)).toBeGreaterThan(0);
  });

  test("focus on parent button triggers animation", async ({ page }) => {
    await page.goto("/");
    const row = page.locator('[data-testid="parent-focus"]');
    await page.locator("#parent-btn").focus();
    await expect.poll(async () => animationCount(row)).toBeGreaterThan(0);
  });

  test("prefers-reduced-motion skips new animations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => window.__playwright?.animateCheck());
    const row = page.locator('[data-testid="check-draw"]');
    await expect.poll(async () => animationCount(row)).toBe(0);
  });
});
