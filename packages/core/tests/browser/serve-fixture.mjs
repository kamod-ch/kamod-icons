import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const packageRoot = resolve(fileURLToPath(new URL(".", import.meta.url)), "../..");
const fixtureDir = resolve(packageRoot, "tests/browser/fixtures");

spawnSync("node", ["tests/browser/build-fixture.mjs"], { cwd: packageRoot, stdio: "inherit" });

const server = createServer((req, res) => {
  const pathname = new URL(req.url ?? "/", "http://127.0.0.1").pathname;
  const relative = pathname === "/" ? "/index.html" : pathname;
  const file = resolve(fixtureDir, `.${relative}`);

  if (!file.startsWith(fixtureDir)) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }

  try {
    const data = readFileSync(file);
    res.setHeader("Content-Type", file.endsWith(".js") ? "text/javascript" : "text/html");
    res.end(data);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(4173, "127.0.0.1");
