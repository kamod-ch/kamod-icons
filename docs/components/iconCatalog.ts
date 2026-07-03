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

let catalogPromise: Promise<IconCatalog> | null = null;

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export function loadIconCatalog(): Promise<IconCatalog> {
  if (!catalogPromise) {
    catalogPromise = fetch(withBase("data/icon-catalog.json")).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load icon catalog (${response.status})`);
      }
      return response.json() as Promise<IconCatalog>;
    });
  }
  return catalogPromise;
}

export function formatImportSnippet(icon: CatalogIcon): string {
  return `import { ${icon.componentName} } from "${icon.importPath}";`;
}

export function variantLabel(variant: string): string {
  if (variant === "default") return "Default";
  return variant.charAt(0).toUpperCase() + variant.slice(1);
}

export const STROKE_SETS = new Set(["lucide", "shadcn", "tabler", "heroicons", "iconoir"]);

export function setSupportsStroke(setId: string, variant: string): boolean {
  if (setId === "heroicons" && variant === "solid") return false;
  if (setId === "iconoir" && variant === "solid") return false;
  if (setId === "tabler" && variant === "filled") return false;
  return STROKE_SETS.has(setId);
}
