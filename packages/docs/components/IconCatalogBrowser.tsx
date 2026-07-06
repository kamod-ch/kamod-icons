import { useState } from "preact/hooks";
import {
  formatImportSnippet,
  setSupportsStroke,
  variantLabel,
} from "./iconCatalog.ts";
import { IconCatalogCell, IconCatalogPagination, usePagination } from "./IconCatalogParts.tsx";
import { useIconCatalog } from "./useIconCatalog.ts";

export default function IconCatalogBrowser() {
  const {
    catalog,
    error,
    filters,
    updateFilters,
    activeSet,
    availableVariants,
    filteredIcons,
    categories,
  } = useIconCatalog();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { visibleItems, page, totalPages, totalItems, startIndex, endIndex, setPage } =
    usePagination(filteredIcons);
  const showVariants = availableVariants.length > 1 && availableVariants[0] !== "default";
  const strokeEnabled = activeSet ? setSupportsStroke(activeSet.id, filters.variant) : false;
  const showCategories = categories.length > 1;

  function goToPage(nextPage: number) {
    setPage(nextPage);
    document.getElementById("icon-browser")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function copyImport(icon: Parameters<typeof formatImportSnippet>[0]) {
    const snippet = formatImportSnippet(icon);
    const key = `${icon.importPath}:${icon.componentName}`;

    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedId(key);
      window.setTimeout(() => setCopiedId((current) => (current === key ? null : current)), 1600);
    } catch {
      setCopiedId(null);
    }
  }

  if (error) {
    return (
      <section class="ki-catalog" id="icon-browser">
        <p class="ki-catalog-error">Could not load icon catalog: {error}</p>
      </section>
    );
  }

  if (!catalog || !activeSet) {
    return (
      <section class="ki-catalog" id="icon-browser">
        <p class="ki-catalog-loading">Loading icon catalog…</p>
      </section>
    );
  }

  return (
    <section class="ki-catalog" id="icon-browser" aria-labelledby="icon-browser-title">
      <div class="ki-catalog-toolbar">
        <div class="ki-catalog-toolbar-row">
          <div class="ki-catalog-field">
            <span class="ki-catalog-label">Set</span>
            <div class="ki-catalog-tabs" role="tablist" aria-label="Icon sets">
              {catalog.sets.map((set) => {
                const selected = set.id === filters.setId;
                return (
                  <button
                    key={set.id}
                    type="button"
                    role="tab"
                    class={selected ? "is-active" : ""}
                    aria-selected={selected}
                    onClick={() => updateFilters({ setId: set.id })}
                  >
                    {set.label}
                  </button>
                );
              })}
            </div>
          </div>

          {showVariants ? (
            <div class="ki-catalog-field">
              <span class="ki-catalog-label">Style</span>
              <div class="ki-catalog-tabs" role="tablist" aria-label="Icon style">
                {availableVariants.map((variant) => {
                  const selected = variant === filters.variant;
                  return (
                    <button
                      key={variant}
                      type="button"
                      role="tab"
                      class={selected ? "is-active" : ""}
                      aria-selected={selected}
                      onClick={() => updateFilters({ variant })}
                    >
                      {variantLabel(variant)}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div class="ki-catalog-toolbar-row ki-catalog-toolbar-controls">
          <label class="ki-catalog-control">
            <span>Size</span>
            <input
              type="range"
              min="16"
              max="48"
              value={filters.size}
              onInput={(event) => updateFilters({ size: Number((event.currentTarget as HTMLInputElement).value) })}
            />
            <output>{filters.size}px</output>
          </label>

          {strokeEnabled ? (
            <label class="ki-catalog-control">
              <span>Stroke</span>
              <input
                type="range"
                min="1"
                max="3"
                step="0.5"
                value={filters.stroke}
                onInput={(event) => updateFilters({ stroke: Number((event.currentTarget as HTMLInputElement).value) })}
              />
              <output>{filters.stroke}px</output>
            </label>
          ) : null}

          <label class="ki-catalog-control ki-catalog-color">
            <span>Color</span>
            <input
              type="color"
              value={filters.color}
              onInput={(event) => updateFilters({ color: (event.currentTarget as HTMLInputElement).value })}
            />
          </label>

          {showCategories ? (
            <label class="ki-catalog-control ki-catalog-select">
              <span>Category</span>
              <select
                value={filters.category}
                onChange={(event) => updateFilters({ category: (event.currentTarget as HTMLSelectElement).value })}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          <label class="ki-catalog-control ki-catalog-search">
            <span>Search</span>
            <input
              type="search"
              placeholder="Search icons"
              value={filters.search}
              onInput={(event) => updateFilters({ search: (event.currentTarget as HTMLInputElement).value })}
            />
          </label>
        </div>
      </div>

      <div class="ki-catalog-meta">
        <h2 id="icon-browser-title">{variantLabel(filters.variant)} icons</h2>
        <p>
          {filteredIcons.length.toLocaleString()} icons in {activeSet.label}
          {filters.search ? ` matching “${filters.search}”` : ""}
        </p>
      </div>

      <IconCatalogPagination
        page={page}
        totalPages={totalPages}
        totalItems={totalItems}
        startIndex={startIndex}
        endIndex={endIndex}
        onPageChange={goToPage}
      />

      <div class="ki-catalog-grid" role="list">
        {visibleItems.map((icon) => (
          <IconCatalogCell
            key={`${icon.importPath}:${icon.componentName}`}
            icon={icon}
            size={filters.size}
            stroke={filters.stroke}
            color={filters.color}
            strokeEnabled={strokeEnabled}
            copiedId={copiedId}
            onCopy={copyImport}
          />
        ))}
      </div>

      <IconCatalogPagination
        page={page}
        totalPages={totalPages}
        totalItems={totalItems}
        startIndex={startIndex}
        endIndex={endIndex}
        onPageChange={goToPage}
      />

      {!filteredIcons.length ? <p class="ki-catalog-empty">No icons match your filters.</p> : null}
    </section>
  );
}
