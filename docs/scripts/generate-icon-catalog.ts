import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, "..");
const iconsPackageRoot = path.resolve(docsRoot, "../packages/icons");
const rawRoot = path.join(iconsPackageRoot, "raw");
const iconSourcesPath = path.join(iconsPackageRoot, "icon-sources.json");
const catalogOutputPath = path.join(docsRoot, "public", "data", "icon-catalog.json");
const assetsOutputRoot = path.join(docsRoot, "public", "icon-assets");

type IconSourcesFile = {
  sets: Record<
    string,
    {
      label: string;
      exportPath: string;
      variants?: string[];
    }
  >;
};

export type CatalogIcon = {
  id: string;
  name: string;
  componentName: string;
  variant: string;
  category?: string;
  tags?: string[];
  assetPath: string;
  importPath: string;
  strokeBased: boolean;
};

export type CatalogSet = {
  id: string;
  label: string;
  importPath: string;
  variants: string[];
  icons: CatalogIcon[];
  categories: string[];
};

export type IconCatalog = {
  generatedAt: string;
  sets: CatalogSet[];
  totalIcons: number;
};

function toPascalCase(fileName: string): string {
  const baseName = path.basename(fileName, path.extname(fileName));
  const name = baseName
    .replace(/['’]/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const safeName = /^[A-Za-z]/.test(name) ? name : `Icon${name}`;
  return `${safeName}Icon`;
}

function parseSvgMetadata(content: string): { category?: string; tags?: string[] } {
  const commentMatch = content.match(/<!--([\s\S]*?)-->/);
  if (!commentMatch) return {};

  const comment = commentMatch[1];
  const categoryMatch = comment.match(/category:\s*([^\n]+)/i);
  const tagsMatch = comment.match(/tags:\s*\[([^\]]+)\]/i);

  const category = categoryMatch?.[1]?.trim();
  const tags = tagsMatch
    ? tagsMatch[1]
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : undefined;

  return { category, tags };
}

function isStrokeBasedSvg(content: string): boolean {
  return /stroke=["']currentColor["']|stroke-width=/i.test(content);
}

async function listSvgFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listSvgFiles(entryPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".svg")) {
      files.push(entryPath);
    }
  }

  return files.sort();
}

function resolveImportPath(exportPath: string, variant: string): string {
  if (exportPath.includes("{variant}")) {
    return exportPath.replace("{variant}", variant === "default" ? "outline" : variant);
  }
  return exportPath;
}

async function buildSetCatalog(
  setId: string,
  config: IconSourcesFile["sets"][string],
): Promise<CatalogSet> {
  const variants = config.variants?.length ? config.variants : ["default"];
  const icons: CatalogIcon[] = [];
  const categories = new Set<string>();

  for (const variant of variants) {
    const sourceDir =
      variant === "default" ? path.join(rawRoot, setId) : path.join(rawRoot, setId, variant);
    const targetDir =
      variant === "default"
        ? path.join(assetsOutputRoot, setId)
        : path.join(assetsOutputRoot, setId, variant);

    await mkdir(targetDir, { recursive: true });

    const svgFiles = await listSvgFiles(sourceDir);
    for (const svgPath of svgFiles) {
      const fileName = path.basename(svgPath);
      const id = variant === "default" ? fileName.replace(/\.svg$/, "") : `${variant}/${fileName.replace(/\.svg$/, "")}`;
      const content = await readFile(svgPath, "utf8");
      const { category, tags } = parseSvgMetadata(content);
      const componentName = toPascalCase(fileName);
      const assetPath =
        variant === "default"
          ? `/icon-assets/${setId}/${fileName}`
          : `/icon-assets/${setId}/${variant}/${fileName}`;

      await cp(svgPath, path.join(targetDir, fileName));

      if (category) categories.add(category);

      icons.push({
        id,
        name: fileName.replace(/\.svg$/, ""),
        componentName,
        variant,
        category,
        tags,
        assetPath,
        importPath: resolveImportPath(config.exportPath, variant),
        strokeBased: isStrokeBasedSvg(content),
      });
    }
  }

  const importPath = resolveImportPath(config.exportPath, variants[0]);

  return {
    id: setId,
    label: config.label,
    importPath,
    variants,
    icons: icons.sort((a, b) => a.name.localeCompare(b.name)),
    categories: [...categories].sort((a, b) => a.localeCompare(b)),
  };
}

export async function generateIconCatalog(): Promise<IconCatalog> {
  const iconSources = JSON.parse(await readFile(iconSourcesPath, "utf8")) as IconSourcesFile;

  await rm(assetsOutputRoot, { recursive: true, force: true });
  await mkdir(path.dirname(catalogOutputPath), { recursive: true });

  const sets: CatalogSet[] = [];
  for (const [setId, config] of Object.entries(iconSources.sets)) {
    sets.push(await buildSetCatalog(setId, config));
  }

  const catalog: IconCatalog = {
    generatedAt: new Date().toISOString(),
    sets,
    totalIcons: sets.reduce((sum, set) => sum + set.icons.length, 0),
  };

  await writeFile(catalogOutputPath, `${JSON.stringify(catalog)}\n`);
  console.log(`Generated ${catalog.totalIcons.toLocaleString()} icons into ${catalogOutputPath}`);
  return catalog;
}

const isDirectRun = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;

if (isDirectRun) {
  await generateIconCatalog();
}
