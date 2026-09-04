#!/usr/bin/env node
/**
 * Release candidate quality gate (no publish). Exits non-zero on first failing step unless --continue.
 */
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../..", import.meta.url)));
const core = resolve(root, "packages/core");
const continueOnFail = process.argv.includes("--continue");

const steps = [
  { name: "pnpm install (lockfile)", cwd: root, cmd: "pnpm", args: ["install", "--frozen-lockfile"] },
  { name: "oxlint", cwd: root, cmd: "pnpm", args: ["lint"] },
  { name: "oxfmt check", cwd: root, cmd: "pnpm", args: ["format:check"] },
  { name: "core typecheck", cwd: core, cmd: "pnpm", args: ["typecheck"] },
  { name: "core unit + SSR tests", cwd: core, cmd: "pnpm", args: ["test"] },
  { name: "animated meta determinism", cwd: core, cmd: "pnpm", args: ["animated:meta:check"] },
  { name: "core build", cwd: core, cmd: "pnpm", args: ["build"] },
  { name: "bundle budgets", cwd: core, cmd: "node", args: ["scripts/check-bundle-budgets.mjs"] },
  { name: "consumer fixture", cwd: core, cmd: "pnpm", args: ["test:consumer"] },
  { name: "npm pack dry-run", cwd: core, cmd: "npm", args: ["pack", "--dry-run"] },
  { name: "docs check", cwd: root, cmd: "pnpm", args: ["check:docs"] },
  { name: "docs build", cwd: root, cmd: "pnpm", args: ["build:docs"] },
  { name: "browser tests", cwd: core, cmd: "pnpm", args: ["test:browser"] },
];

const results = [];

for (const step of steps) {
  const result = spawnSync(step.cmd, step.args, { cwd: step.cwd, encoding: "utf8", shell: false });
  const passed = result.status === 0;
  results.push({
    step: step.name,
    passed,
    status: result.status,
    stderr: (result.stderr ?? "").slice(-2000),
    stdout: (result.stdout ?? "").slice(-2000),
  });
  const tag = passed ? "PASS" : "FAIL";
  console.log(`\n=== ${tag}: ${step.name} ===`);
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (!passed && !continueOnFail) break;
}

console.log("\n--- Release candidate summary ---");
for (const row of results) {
  console.log(`${row.passed ? "✓" : "✗"} ${row.step}`);
}

const anyFail = results.some((r) => !r.passed);
process.exit(anyFail ? 1 : 0);
