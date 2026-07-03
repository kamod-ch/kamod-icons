import { useEffect, useState } from "preact/hooks";
import type { CatalogIcon } from "./iconCatalog.ts";

const svgCache = new Map<string, string>();

function withBase(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

type IconSvgProps = {
  icon: CatalogIcon;
  size: number;
  stroke: number;
  color: string;
  strokeEnabled: boolean;
};

function applySvgPresentation(svgText: string, size: number, stroke: number, color: string, strokeEnabled: boolean) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText, "image/svg+xml");
  const svg = doc.querySelector("svg");
  if (!svg) return svgText;

  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.style.color = color;

  if (strokeEnabled) {
    svg.querySelectorAll("[stroke]").forEach((node) => {
      if (node.getAttribute("stroke") && node.getAttribute("stroke") !== "none") {
        node.setAttribute("stroke", "currentColor");
        node.setAttribute("stroke-width", String(stroke));
      }
    });
  }

  svg.querySelectorAll("[fill]").forEach((node) => {
    const fill = node.getAttribute("fill");
    if (fill && fill !== "none") {
      node.setAttribute("fill", "currentColor");
    }
  });

  return svg.outerHTML;
}

export default function IconSvg({ icon, size, stroke, color, strokeEnabled }: IconSvgProps) {
  const [markup, setMarkup] = useState<string>("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadSvg() {
      try {
        const assetUrl = withBase(icon.assetPath);
        let svgText = svgCache.get(assetUrl);
        if (!svgText) {
          const response = await fetch(assetUrl);
          if (!response.ok) throw new Error("SVG fetch failed");
          svgText = await response.text();
          svgCache.set(assetUrl, svgText);
        }

        if (!cancelled) {
          setMarkup(applySvgPresentation(svgText, size, stroke, color, strokeEnabled));
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    void loadSvg();
    return () => {
      cancelled = true;
    };
  }, [icon.assetPath, size, stroke, color, strokeEnabled]);

  if (failed) {
    return <span class="ki-catalog-icon-fallback" aria-hidden="true">?</span>;
  }

  return <span class="ki-catalog-icon-svg" dangerouslySetInnerHTML={{ __html: markup }} aria-hidden="true" />;
}

type IconCatalogCellProps = {
  icon: CatalogIcon;
  size: number;
  stroke: number;
  color: string;
  strokeEnabled: boolean;
  copiedId: string | null;
  onCopy: (icon: CatalogIcon) => void;
};

export function IconCatalogCell({
  icon,
  size,
  stroke,
  color,
  strokeEnabled,
  copiedId,
  onCopy,
}: IconCatalogCellProps) {
  return (
    <button
      type="button"
      class={`ki-catalog-cell${copiedId === `${icon.importPath}:${icon.componentName}` ? " is-copied" : ""}`}
      onClick={() => onCopy(icon)}
      title={`Copy import for ${icon.componentName}`}
    >
      <IconSvg icon={icon} size={size} stroke={stroke} color={color} strokeEnabled={strokeEnabled} />
      <span class="ki-catalog-cell-name">{icon.name}</span>
      <span class="ki-catalog-cell-hint">{copiedId === `${icon.importPath}:${icon.componentName}` ? "Copied" : "Click to copy"}</span>
    </button>
  );
}

export const ICONS_PER_PAGE = 100;

export function usePagination<T>(items: T[], pageSize = ICONS_PER_PAGE) {
  const [requestedPage, setRequestedPage] = useState(1);

  useEffect(() => {
    setRequestedPage(1);
  }, [items, pageSize]);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(requestedPage, totalPages);
  const startIndex = items.length ? (page - 1) * pageSize : 0;
  const endIndex = Math.min(page * pageSize, items.length);

  return {
    visibleItems: items.slice(startIndex, endIndex),
    page,
    totalPages,
    totalItems: items.length,
    startIndex: items.length ? startIndex + 1 : 0,
    endIndex,
    setPage: setRequestedPage,
  };
}

type IconCatalogPaginationProps = {
  page: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
};

export function IconCatalogPagination({
  page,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
}: IconCatalogPaginationProps) {
  if (totalItems <= ICONS_PER_PAGE) return null;

  return (
    <nav class="ki-catalog-pagination" aria-label="Icon list pagination">
      <p class="ki-catalog-pagination-meta">
        Showing {startIndex.toLocaleString()}–{endIndex.toLocaleString()} of {totalItems.toLocaleString()}
      </p>
      <div class="ki-catalog-pagination-controls">
        <button type="button" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
          Previous
        </button>
        <span class="ki-catalog-pagination-status">
          Page {page.toLocaleString()} of {totalPages.toLocaleString()}
        </span>
        <button type="button" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
          Next
        </button>
      </div>
    </nav>
  );
}
