import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { optimize, type Config } from "svgo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const rawRoot = path.join(packageRoot, "raw");
const setsRoot = path.join(packageRoot, "src", "sets");
const defaultViewBox = "0 0 24 24";

const args = process.argv.slice(2);
const setArg = args.find((arg) => arg.startsWith("--set="))?.split("=")[1] ?? (args.includes("--set") ? args[args.indexOf("--set") + 1] : undefined);

const svgoConfigModule = (await import(path.join(packageRoot, "svgo.config.js"))) as { default: Config };
const svgoConfig = svgoConfigModule.default;

type SvgSource = {
  fileName: string;
  rawPath: string;
  variant?: string;
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

function normalizeColors(svg: string): string {
  return svg
    .replace(/\s(fill|stroke)=(['"])(?!none\2|currentColor\2|url\(|inherit\2|transparent\2)[^'"]+\2/gi, " $1=\"currentColor\"")
    .replace(/(fill|stroke):\s*(?!none\b|currentColor\b|url\(|inherit\b|transparent\b)[^;\"]+/gi, "$1:currentColor");
}

const attributeMap: Record<string, string> = {
  "accent-height": "accentHeight",
  "alignment-baseline": "alignmentBaseline",
  "baseline-shift": "baselineShift",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "color-interpolation": "colorInterpolation",
  "color-interpolation-filters": "colorInterpolationFilters",
  "color-profile": "colorProfile",
  "color-rendering": "colorRendering",
  "dominant-baseline": "dominantBaseline",
  "enable-background": "enableBackground",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "flood-color": "floodColor",
  "flood-opacity": "floodOpacity",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-size-adjust": "fontSizeAdjust",
  "font-stretch": "fontStretch",
  "font-style": "fontStyle",
  "font-variant": "fontVariant",
  "font-weight": "fontWeight",
  "glyph-name": "glyphName",
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  "glyph-orientation-vertical": "glyphOrientationVertical",
  "image-rendering": "imageRendering",
  "letter-spacing": "letterSpacing",
  "lighting-color": "lightingColor",
  "marker-end": "markerEnd",
  "marker-mid": "markerMid",
  "marker-start": "markerStart",
  "paint-order": "paintOrder",
  "shape-rendering": "shapeRendering",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-opacity": "strokeOpacity",
  "stroke-width": "strokeWidth",
  "text-anchor": "textAnchor",
  "text-decoration": "textDecoration",
  "text-rendering": "textRendering",
  "transform-origin": "transformOrigin",
  "unicode-bidi": "unicodeBidi",
  "vector-effect": "vectorEffect",
  "word-spacing": "wordSpacing",
  "writing-mode": "writingMode",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
};

function toJsxAttributes(svgContent: string): string {
  let content = svgContent;

  for (const [svgAttribute, jsxAttribute] of Object.entries(attributeMap)) {
    content = content.replace(new RegExp(`\\b${svgAttribute}=`, "g"), `${jsxAttribute}=`);
  }

  return content;
}

function extractViewBox(svg: string): string {
  return svg.match(/<svg[^>]*\sviewBox=(['"])(.*?)\1/i)?.[2] ?? defaultViewBox;
}

function extractChildren(svg: string): string {
  return svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)?.[1].trim() ?? "";
}

function getSvgRootAttributes(normalizedSvg: string, variant?: string): { fill: string; stroke?: string } {
  const svgTag = normalizedSvg.match(/<svg[^>]*>/i)?.[0] ?? "";
  const usesStroke = /stroke=(['"])currentColor\1/i.test(svgTag);
  const usesFill = /fill=(['"])currentColor\1/i.test(svgTag);

  if (variant === "solid" || variant === "filled" || (usesFill && !usesStroke)) {
    return { fill: "currentColor" };
  }

  return { fill: "none", stroke: "currentColor" };
}

async function collectSvgSources(rawSetDir: string): Promise<SvgSource[]> {
  const entries = await readdir(rawSetDir, { withFileTypes: true }).catch(() => []);
  const topLevelSvgs = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".svg"));
  const subdirs = entries.filter((entry) => entry.isDirectory());

  if (topLevelSvgs.length > 0) {
    return topLevelSvgs
      .map((entry) => ({
        fileName: entry.name,
        rawPath: path.join(rawSetDir, entry.name),
      }))
      .sort((a, b) => a.fileName.localeCompare(b.fileName));
  }

  const sources: SvgSource[] = [];

  for (const subdir of subdirs.sort((a, b) => a.name.localeCompare(b.name))) {
    const variantDir = path.join(rawSetDir, subdir.name);
    const variantFiles = await readdir(variantDir).catch(() => []);
    for (const fileName of variantFiles.filter((file) => file.endsWith(".svg")).sort((a, b) => a.localeCompare(b))) {
      sources.push({
        fileName,
        rawPath: path.join(variantDir, fileName),
        variant: subdir.name,
      });
    }
  }

  return sources;
}

async function cleanGeneratedComponents(outDir: string): Promise<void> {
  await mkdir(outDir, { recursive: true });
  const existingFiles = await readdir(outDir).catch(() => []);
  await Promise.all(
    existingFiles
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => rm(path.join(outDir, file), { force: true })),
  );
}

function buildComponentSource(
  componentName: string,
  viewBox: string,
  rootAttributes: { fill: string; stroke?: string },
  indentedChildren: string,
  typesImportPath: string,
): string {
  const strokeAttribute = rootAttributes.stroke ? `\n      stroke="${rootAttributes.stroke}"` : "";

  return `import type { IconProps } from "${typesImportPath}";\n\nexport function ${componentName}({\n  size = 24,\n  title,\n  ...props\n}: IconProps) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="${viewBox}"\n      fill="${rootAttributes.fill}"${strokeAttribute}\n      aria-hidden={title ? undefined : true}\n      role={title ? "img" : undefined}\n      {...props}\n    >\n      {title ? <title>{title}</title> : null}${indentedChildren ? `\n${indentedChildren}` : ""}\n    </svg>\n  );\n}\n`;
}

async function generateIcon(source: SvgSource, outSetDir: string, setName: string): Promise<string> {
  const componentName = toPascalCase(source.fileName);
  const label = source.variant ? `${setName}/${source.variant}/${source.fileName}` : `${setName}/${source.fileName}`;
  const typesImportPath = source.variant ? "../../../shared/types" : "../../shared/types";
  const rawSvg = await readFile(source.rawPath, "utf8");
  const optimized = optimize(normalizeColors(rawSvg), {
    ...svgoConfig,
    path: source.rawPath,
  });

  if ("error" in optimized) {
    throw new Error(`SVGO failed for ${label}: ${optimized.error}`);
  }

  const normalizedSvg = normalizeColors(optimized.data)
    .replace(/\swidth=(['"])[^'"]*\1/gi, "")
    .replace(/\sheight=(['"])[^'"]*\1/gi, "");
  const viewBox = extractViewBox(normalizedSvg);
  const rootAttributes = getSvgRootAttributes(normalizedSvg, source.variant);
  const children = toJsxAttributes(extractChildren(normalizedSvg));
  const indentedChildren = children
    ? children
        .split("\n")
        .map((line) => `      ${line}`)
        .join("\n")
    : "";

  const component = buildComponentSource(componentName, viewBox, rootAttributes, indentedChildren, typesImportPath);

  await writeFile(path.join(outSetDir, `${componentName}.tsx`), component);
  return componentName;
}

async function generateSet(setName: string): Promise<number> {
  const rawSetDir = path.join(rawRoot, setName);
  const sources = await collectSvgSources(rawSetDir);

  if (sources.length === 0) {
    return 0;
  }

  const hasVariants = sources.some((source) => source.variant);
  let generatedCount = 0;

  if (hasVariants) {
    const variants = [...new Set(sources.map((source) => source.variant).filter(Boolean))].sort((a, b) =>
      a!.localeCompare(b!),
    );

    for (const variant of variants) {
      const outSetDir = path.join(setsRoot, setName, variant!);
      await cleanGeneratedComponents(outSetDir);
      const variantSources = sources.filter((source) => source.variant === variant);
      const exports: string[] = [];

      for (const source of variantSources) {
        const componentName = await generateIcon(source, outSetDir, setName);
        exports.push(`export { ${componentName} } from "./${componentName}";`);
        generatedCount += 1;
      }

      await writeFile(path.join(outSetDir, "index.ts"), exports.length > 0 ? `${exports.join("\n")}\n` : "");
    }

    const flatSetDir = path.join(setsRoot, setName);
    const flatIndexPath = path.join(flatSetDir, "index.ts");
    if (await stat(flatIndexPath).then(() => true).catch(() => false)) {
      await rm(flatIndexPath, { force: true });
    }
    await cleanGeneratedComponents(flatSetDir);
  } else {
    const outSetDir = path.join(setsRoot, setName);
    await cleanGeneratedComponents(outSetDir);
    const exports: string[] = [];

    for (const source of sources) {
      const componentName = await generateIcon(source, outSetDir, setName);
      exports.push(`export { ${componentName} } from "./${componentName}";`);
      generatedCount += 1;
    }

    await writeFile(path.join(outSetDir, "index.ts"), exports.length > 0 ? `${exports.join("\n")}\n` : "");
  }

  return generatedCount;
}

async function main() {
  const allSets = (await readdir(rawRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const sets = setArg ? allSets.filter((set) => set === setArg) : allSets;

  if (setArg && sets.length === 0) {
    throw new Error(`Icon set "${setArg}" not found in ${rawRoot}`);
  }

  for (const setName of sets) {
    const count = await generateSet(setName);
    console.log(`Generated ${count} icon${count === 1 ? "" : "s"} for ${setName}`);
  }
}

await main();
