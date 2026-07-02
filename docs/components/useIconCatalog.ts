import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import {
  loadIconCatalog,
  type CatalogIcon,
  type CatalogSet,
  type IconCatalog,
} from "./iconCatalog.ts";

export type IconCatalogFilters = {
  setId: string;
  variant: string;
  search: string;
  category: string;
  size: number;
  stroke: number;
  color: string;
};

const DEFAULT_FILTERS: IconCatalogFilters = {
  setId: "tabler",
  variant: "outline",
  search: "",
  category: "All",
  size: 32,
  stroke: 2,
  color: "#1f2937",
};

function debounce<T extends (value: string) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(value), delay);
  };
}

export function useIconCatalog() {
  const [catalog, setCatalog] = useState<IconCatalog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<IconCatalogFilters>(DEFAULT_FILTERS);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const debouncedSetSearch = useRef(debounce((value: string) => setDebouncedSearch(value), 180)).current;

  useEffect(() => {
    loadIconCatalog()
      .then(setCatalog)
      .catch((loadError: Error) => setError(loadError.message));
  }, []);

  useEffect(() => {
    debouncedSetSearch(filters.search);
  }, [filters.search, debouncedSetSearch]);

  const activeSet = useMemo<CatalogSet | null>(() => {
    if (!catalog) return null;
    return catalog.sets.find((set) => set.id === filters.setId) ?? catalog.sets[0] ?? null;
  }, [catalog, filters.setId]);

  const availableVariants = activeSet?.variants ?? ["default"];

  useEffect(() => {
    if (!activeSet) return;
    if (!activeSet.variants.includes(filters.variant)) {
      setFilters((current) => ({
        ...current,
        variant: activeSet.variants[0] ?? "default",
      }));
    }
  }, [activeSet, filters.variant]);

  const filteredIcons = useMemo<CatalogIcon[]>(() => {
    if (!activeSet) return [];

    const query = debouncedSearch.trim().toLowerCase();
    return activeSet.icons.filter((icon) => {
      if (icon.variant !== filters.variant) return false;
      if (filters.category !== "All" && icon.category !== filters.category) return false;
      if (!query) return true;

      const haystack = [icon.name, icon.componentName, ...(icon.tags ?? [])].join(" ").toLowerCase();
      return haystack.includes(query);
    });
  }, [activeSet, debouncedSearch, filters.category, filters.variant]);

  const categories = useMemo(() => {
    if (!activeSet?.categories.length) return ["All"];
    return ["All", ...activeSet.categories];
  }, [activeSet]);

  function updateFilters(patch: Partial<IconCatalogFilters>) {
    setFilters((current) => ({ ...current, ...patch }));
  }

  return {
    catalog,
    error,
    filters,
    updateFilters,
    activeSet,
    availableVariants,
    filteredIcons,
    categories,
  };
}
