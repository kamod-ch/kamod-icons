import { expect, test } from "@playwright/test";

const ICONS = [
  "search-hover",
  "bell-programmatic",
  "check-draw",
  "heart-pulse",
  "loader-spin",
  "parent-focus",
] as const;

async function setTheme(page: import("@playwright/test").Page, theme: "light" | "dark") {
  await page.evaluate((value) => {
    document.documentElement.dataset.theme = value;
  }, theme);
}

async function primeAnimations(page: import("@playwright/test").Page) {
  await page.locator('[data-testid="search-hover"] svg').hover();
  await page.evaluate(() => window.__playwright?.animateCheck());
  await page.evaluate(() => window.__playwright?.animateLoader());
}

for (const theme of ["light", "dark"] as const) {
  for (const motion of ["no-preference", "reduce"] as const) {
    test(`visual ${theme} / reduced=${motion}`, async ({ page }) => {
      if (motion === "reduce") {
        await page.emulateMedia({ reducedMotion: "reduce" });
      } else {
        await page.emulateMedia({ reducedMotion: "no-preference" });
      }
      await page.goto("/");
      await setTheme(page, theme);
      if (motion === "no-preference") {
        await primeAnimations(page);
      }
      await page.waitForTimeout(150);
      for (const id of ICONS) {
        await expect(page.locator(`[data-testid="${id}"]`)).toHaveScreenshot(
          `${id}-${theme}-${motion}.png`,
          {
            maxDiffPixelRatio: 0.02,
          },
        );
      }
    });
  }
}

declare global {
  interface Window {
    __playwright?: {
      playBell: () => void;
      animateCheck: () => void;
      animateLoader: () => void;
    };
  }
}
