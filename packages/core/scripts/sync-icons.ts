import { execFile } from "node:child_process";
import { cp, mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { generateMeta } from "./generate-meta.ts";
import {
  copyFileEnsuringDir,
  rawRoot,
  readIconSources,
  readPackageVersion,
  resolvePackageRoot,
  writeIconSources,
} from "./icon-sources-shared.ts";

const execFileAsync = promisify(execFile);

const REICON_ZIP_URL =
  "https://raw.githubusercontent.com/dqev/reicon/main/public/reicon-icons.zip";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const setArg =
  args.find((arg) => arg.startsWith("--set="))?.split("=")[1] ??
  (args.includes("--set") ? args[args.indexOf("--set") + 1] : undefined);

async function cleanSvgFiles(dir: string): Promise<void> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".svg"))
      .map((entry) => rm(path.join(dir, entry.name), { force: true })),
  );
}

async function copyAllSvgs(sourceDir: string, targetDir: string): Promise<number> {
  await mkdir(targetDir, { recursive: true });
  await cleanSvgFiles(targetDir);

  const entries = await readdir(sourceDir, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".svg")) {
      continue;
    }

    await cp(path.join(sourceDir, entry.name), path.join(targetDir, entry.name));
    copied += 1;
  }

  return copied;
}

async function syncHeroicons(): Promise<void> {
  const heroiconsRoot = resolvePackageRoot("heroicons");
  const outlineCopied = await copyAllSvgs(
    path.join(heroiconsRoot, "24", "outline"),
    path.join(rawRoot, "heroicons", "outline"),
  );
  const solidCopied = await copyAllSvgs(
    path.join(heroiconsRoot, "24", "solid"),
    path.join(rawRoot, "heroicons", "solid"),
  );

  console.log(`Synced heroicons: ${outlineCopied} outline, ${solidCopied} solid`);
}

async function syncLucide(): Promise<void> {
  const lucideRoot = resolvePackageRoot("lucide-static");
  const copied = await copyAllSvgs(path.join(lucideRoot, "icons"), path.join(rawRoot, "lucide"));
  console.log(`Synced lucide: ${copied} icons`);
}

async function syncShadcn(): Promise<void> {
  const lucideRoot = resolvePackageRoot("lucide-static");
  const lucideIconsDir = path.join(lucideRoot, "icons");
  const shadcnDir = path.join(rawRoot, "shadcn");
  const existingFiles = await readdir(shadcnDir).catch(() => []);
  const svgFiles = existingFiles.filter((file) => file.endsWith(".svg")).sort((a, b) => a.localeCompare(b));

  if (svgFiles.length === 0) {
    throw new Error(`No shadcn icons found in ${shadcnDir}. Add SVGs or create the set first.`);
  }

  let copied = 0;
  const missing: string[] = [];

  for (const fileName of svgFiles) {
    const sourcePath = path.join(lucideIconsDir, fileName);
    try {
      await readFile(sourcePath);
      await copyFileEnsuringDir(sourcePath, path.join(shadcnDir, fileName));
      copied += 1;
    } catch {
      missing.push(fileName);
    }
  }

  console.log(`Synced shadcn subset: ${copied}/${svgFiles.length} icons refreshed from lucide-static`);

  if (missing.length > 0) {
    console.warn(
      `Warning: ${missing.length} shadcn icon(s) were not found in lucide-static and were left unchanged:`,
    );
    for (const fileName of missing.slice(0, 10)) {
      console.warn(`  - ${fileName}`);
    }
    if (missing.length > 10) {
      console.warn(`  ... and ${missing.length - 10} more`);
    }
  }
}

async function syncTabler(): Promise<void> {
  const tablerRoot = resolvePackageRoot("@tabler/icons");
  const outlineCopied = await copyAllSvgs(
    path.join(tablerRoot, "icons", "outline"),
    path.join(rawRoot, "tabler", "outline"),
  );
  const filledCopied = await copyAllSvgs(
    path.join(tablerRoot, "icons", "filled"),
    path.join(rawRoot, "tabler", "filled"),
  );

  console.log(`Synced tabler: ${outlineCopied} outline, ${filledCopied} filled`);
}

async function syncIconoir(): Promise<void> {
  const iconoirRoot = resolvePackageRoot("iconoir");
  const regularCopied = await copyAllSvgs(
    path.join(iconoirRoot, "icons", "regular"),
    path.join(rawRoot, "iconoir", "regular"),
  );
  const solidCopied = await copyAllSvgs(
    path.join(iconoirRoot, "icons", "solid"),
    path.join(rawRoot, "iconoir", "solid"),
  );

  console.log(`Synced iconoir: ${regularCopied} regular, ${solidCopied} solid`);
}

async function findNamedDir(rootDir: string, dirName: string): Promise<string | null> {
  const direct = path.join(rootDir, dirName);
  const directEntries = await readdir(direct, { withFileTypes: true }).catch(() => null);
  if (directEntries?.some((entry) => entry.isFile() && entry.name.endsWith(".svg"))) {
    return direct;
  }

  const entries = await readdir(rootDir, { withFileTypes: true }).catch(() => []);
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const nested = await findNamedDir(path.join(rootDir, entry.name), dirName);
    if (nested) {
      return nested;
    }
  }

  return null;
}

async function syncReicon(): Promise<void> {
  const localZipPath = process.env.REICON_ZIP_PATH;
  const zipUrl = process.env.REICON_ZIP_URL ?? REICON_ZIP_URL;
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "reicon-sync-"));

  try {
    let archivePath = localZipPath;

    if (!archivePath) {
      console.log(`Downloading Reicon SVG archive from ${zipUrl}`);
      const response = await fetch(zipUrl);
      if (!response.ok) {
        throw new Error(`Failed to download Reicon zip (${response.status} ${response.statusText}): ${zipUrl}`);
      }

      archivePath = path.join(tmpDir, "reicon-icons.zip");
      await writeFile(archivePath, Buffer.from(await response.arrayBuffer()));
    }

    const extractDir = path.join(tmpDir, "extracted");
    await mkdir(extractDir, { recursive: true });
    await execFileAsync("unzip", ["-q", "-o", archivePath, "-d", extractDir]);

    const outlineSource = await findNamedDir(extractDir, "outline");
    const filledSource = await findNamedDir(extractDir, "filled");

    if (!outlineSource || !filledSource) {
      throw new Error(
        `Reicon zip is missing outline/ or filled/ SVG folders (looked under ${extractDir}). Set REICON_ZIP_PATH to a local public/reicon-icons.zip.`,
      );
    }

    const outlineCopied = await copyAllSvgs(outlineSource, path.join(rawRoot, "reicon", "outline"));
    const filledCopied = await copyAllSvgs(filledSource, path.join(rawRoot, "reicon", "filled"));

    console.log(`Synced reicon: ${outlineCopied} outline, ${filledCopied} filled`);
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
}

const syncHandlers: Record<string, () => Promise<void>> = {
  heroicons: syncHeroicons,
  lucide: syncLucide,
  shadcn: syncShadcn,
  tabler: syncTabler,
  iconoir: syncIconoir,
  reicon: syncReicon,
};

async function updateSetMetadata(setName: string): Promise<void> {
  const data = await readIconSources();
  const setConfig = data.sets[setName];

  if (!setConfig) {
    throw new Error(`Unknown icon set "${setName}" in icon-sources.json`);
  }

  if (setConfig.upstream.type === "npm") {
    const versionPackage = setConfig.upstream.versionPackage ?? setConfig.upstream.package;
    setConfig.upstream.version = readPackageVersion(versionPackage);
  }
  setConfig.syncedAt = new Date().toISOString().slice(0, 10);

  await writeIconSources(data);
}

async function main() {
  const data = await readIconSources();
  const availableSets = Object.keys(data.sets).sort((a, b) => a.localeCompare(b));
  const sets = setArg ? availableSets.filter((set) => set === setArg) : availableSets;

  if (setArg && sets.length === 0) {
    throw new Error(`Icon set "${setArg}" is not configured. Available sets: ${availableSets.join(", ")}`);
  }

  for (const setName of sets) {
    const handler = syncHandlers[setName];
    if (!handler) {
      throw new Error(`No sync handler configured for set "${setName}"`);
    }

    await handler();
    await updateSetMetadata(setName);
  }

  await generateMeta();
}

await main();
