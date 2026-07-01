import { cp, mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateMeta } from "./generate-meta.ts";
import {
  copyFileEnsuringDir,
  rawRoot,
  readIconSources,
  readPackageVersion,
  resolvePackageRoot,
  writeIconSources,
} from "./icon-sources-shared.ts";

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

const syncHandlers: Record<string, () => Promise<void>> = {
  heroicons: syncHeroicons,
  lucide: syncLucide,
  shadcn: syncShadcn,
  tabler: syncTabler,
  iconoir: syncIconoir,
};

async function updateSetMetadata(setName: string): Promise<void> {
  const data = await readIconSources();
  const setConfig = data.sets[setName];

  if (!setConfig) {
    throw new Error(`Unknown icon set "${setName}" in icon-sources.json`);
  }

  const versionPackage = setConfig.upstream.versionPackage ?? setConfig.upstream.package;
  setConfig.upstream.version = readPackageVersion(versionPackage);
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
