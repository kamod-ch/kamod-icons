import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync, readFileSync as readFileSyncNode } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const packageRoot = path.resolve(__dirname, "..");
export const rawRoot = path.join(packageRoot, "raw");
export const iconSourcesPath = path.join(packageRoot, "icon-sources.json");
export const metaOutputPath = path.join(packageRoot, "src", "meta.ts");

const require = createRequire(import.meta.url);

export type IconSourceUpstream = {
  type: "npm" | "github";
  package: string;
  version: string;
  versionPackage?: string;
  repository: string;
  license: string;
  note?: string;
};

export type IconSourceSet = {
  label: string;
  exportPath: string;
  variants?: string[];
  upstream: IconSourceUpstream;
  syncedAt: string | null;
  iconCount: number;
};

export type IconSourcesFile = {
  sets: Record<string, IconSourceSet>;
};

export async function readIconSources(): Promise<IconSourcesFile> {
  const raw = await readFile(iconSourcesPath, "utf8");
  return JSON.parse(raw) as IconSourcesFile;
}

export async function writeIconSources(data: IconSourcesFile): Promise<void> {
  await writeFile(iconSourcesPath, `${JSON.stringify(data, null, 2)}\n`);
}

function resolvePackageJson(packageName: string): string {
  try {
    return require.resolve(`${packageName}/package.json`);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "ERR_PACKAGE_PATH_NOT_EXPORTED" && code !== "MODULE_NOT_FOUND") {
      throw error;
    }
  }

  for (const basePath of require.resolve.paths(packageName) ?? []) {
    const packageJsonPath = path.join(basePath, packageName, "package.json");
    if (existsSync(packageJsonPath)) {
      return packageJsonPath;
    }
  }

  throw new Error(`Could not resolve package.json for ${packageName}`);
}

export function resolvePackageRoot(packageName: string): string {
  return path.dirname(resolvePackageJson(packageName));
}

export function readPackageVersion(packageName: string): string {
  const packageJson = JSON.parse(readFileSyncNode(resolvePackageJson(packageName), "utf8")) as { version: string };
  return packageJson.version;
}

export async function countSvgFiles(dir: string): Promise<number> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  let count = 0;

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await countSvgFiles(entryPath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".svg")) {
      count += 1;
    }
  }

  return count;
}

export async function countSetIcons(setName: string, variants?: string[]): Promise<number> {
  const setDir = path.join(rawRoot, setName);

  if (variants?.length) {
    let count = 0;
    for (const variant of variants) {
      count += await countSvgFiles(path.join(setDir, variant));
    }
    return count;
  }

  return countSvgFiles(setDir);
}

export async function copyFileEnsuringDir(sourcePath: string, targetPath: string): Promise<void> {
  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, await readFile(sourcePath));
}
