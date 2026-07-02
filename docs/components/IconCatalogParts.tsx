import { useEffect, useRef, useState } from "preact/hooks";
import type { CatalogIcon } from "./iconCatalog.ts";

const svgCache = new Map<string, string>();

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
        let svgText = svgCache.get(icon.assetPath);
        if (!svgText) {
          const response = await fetch(icon.assetPath);
          if (!response.ok) throw new Error("SVG fetch failed");
          svgText = await response.text();
          svgCache.set(icon.assetPath, svgText);
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

export function useInfiniteBatch<T>(items: T[], batchSize = 120) {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(batchSize);
  }, [items, batchSize]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || visibleCount >= items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibleCount((current) => Math.min(current + batchSize, items.length));
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [items.length, visibleCount, batchSize]);

  return {
    visibleItems: items.slice(0, visibleCount),
    sentinelRef,
    hasMore: visibleCount < items.length,
  };
}
