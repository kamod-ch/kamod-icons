import { useEffect, useMemo, useState } from "preact/hooks";
import type { ComponentType } from "preact";
import type { AnimatedIconProps } from "@kamod-ch/icons/lucide/animated";
import { animatedIconComponents } from "./animatedIconComponents.generated.ts";
import {
  formatAnimatedCompactSnippet,
  formatAnimatedUsageSnippet,
  loadAnimatedIconCatalog,
  type AnimatedCatalogIcon,
  type AnimatedIconCatalog,
  type AnimatedTriggerMode,
} from "./animatedIconCatalog.ts";
import { usePagination } from "./IconCatalogParts.tsx";

const TRIGGER_OPTIONS: { id: AnimatedTriggerMode; label: string }[] = [
  { id: "manual", label: "Play" },
  { id: "hover", label: "Hover" },
  { id: "focus", label: "Focus" },
  { id: "press", label: "Press" },
];

type AnimatedIconCardProps = {
  icon: AnimatedCatalogIcon;
  previewReducedMotion: boolean;
  copiedId: string | null;
  onCopy: (id: string, text: string) => void;
};

function AnimatedIconPreview({
  Icon,
  icon,
  variant,
  trigger,
  playKey,
  resetKey,
  previewReducedMotion,
  loopManual,
}: {
  Icon: ComponentType<AnimatedIconProps<string>>;
  icon: AnimatedCatalogIcon;
  variant: string;
  trigger: AnimatedTriggerMode;
  playKey: number;
  resetKey: number;
  previewReducedMotion: boolean;
  loopManual: boolean;
}) {
  const reducedMotion = previewReducedMotion ? ("always" as const) : ("system" as const);
  const shared = {
    size: 32,
    title: `${icon.componentName.replace(/AnimatedIcon$/, "")} preview`,
    reducedMotion,
    class: "ki-animated-icon-preview-svg",
  };

  if (trigger === "hover") {
    return <Icon key={`hover-${resetKey}`} {...shared} animateOnHover={variant} />;
  }

  if (trigger === "focus") {
    return (
      <button type="button" class="ki-animated-trigger-btn" aria-label={`Focus to animate ${icon.iconName}`}>
        <Icon key={`focus-${resetKey}`} {...shared} animateOnFocus={variant} triggerTarget="parent" />
      </button>
    );
  }

  if (trigger === "press") {
    return (
      <button type="button" class="ki-animated-trigger-btn" aria-label={`Press to animate ${icon.iconName}`}>
        <Icon key={`press-${resetKey}`} {...shared} animateOnPress={variant} triggerTarget="parent" />
      </button>
    );
  }

  return (
    <Icon
      key={`manual-${resetKey}-${playKey}`}
      {...shared}
      animate={playKey > 0 ? variant : false}
      loop={loopManual && playKey > 0 ? true : false}
    />
  );
}

function AnimatedIconCard({ icon, previewReducedMotion, copiedId, onCopy }: AnimatedIconCardProps) {
  const Icon = animatedIconComponents[icon.componentName];
  const [variant, setVariant] = useState(icon.defaultVariant);
  const [trigger, setTrigger] = useState<AnimatedTriggerMode>("manual");
  const [playKey, setPlayKey] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [loopManual, setLoopManual] = useState(false);

  useEffect(() => {
    setVariant(icon.defaultVariant);
    setPlayKey(0);
    setResetKey((key) => key + 1);
  }, [icon.componentName, icon.defaultVariant]);

  if (!Icon) {
    return (
      <article class="ki-animated-card" role="listitem">
        <p class="ki-catalog-error">Missing component: {icon.componentName}</p>
      </article>
    );
  }

  const copyId = icon.componentName;
  const snippetOptions = {
    componentName: icon.componentName,
    importPath: icon.importPath,
    variant,
    trigger,
    loop: loopManual && icon.loopCapable,
  };
  const compactSnippet = formatAnimatedCompactSnippet(snippetOptions);
  const fullSnippet = formatAnimatedUsageSnippet(snippetOptions);

  function handlePlay() {
    if (previewReducedMotion) return;
    setPlayKey((key) => key + 1);
  }

  function handleReset() {
    setPlayKey(0);
    setResetKey((key) => key + 1);
  }

  return (
    <article class="ki-animated-card" role="listitem" aria-labelledby={`${icon.componentName}-title`}>
      <div class="ki-animated-card-preview" aria-live="polite">
        <AnimatedIconPreview
          Icon={Icon}
          icon={icon}
          variant={variant}
          trigger={trigger}
          playKey={playKey}
          resetKey={resetKey}
          previewReducedMotion={previewReducedMotion}
          loopManual={loopManual}
        />
      </div>

      <div class="ki-animated-card-body">
        <h3 id={`${icon.componentName}-title`} class="ki-animated-card-title">
          {icon.componentName.replace(/AnimatedIcon$/, "")}
        </h3>
        <p class="ki-animated-card-intent">{icon.intent}</p>

        {icon.variants.length > 1 ? (
          <fieldset class="ki-animated-fieldset">
            <legend>Variant</legend>
            <div class="ki-animated-segment" role="radiogroup" aria-label={`Variants for ${icon.iconName}`}>
              {icon.variants.map((entry) => (
                <label key={entry} class="ki-animated-segment-option">
                  <input
                    type="radio"
                    name={`${icon.componentName}-variant`}
                    value={entry}
                    checked={variant === entry}
                    onChange={() => {
                      setVariant(entry);
                      handleReset();
                    }}
                  />
                  <span>{entry}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <p class="ki-animated-variant-label">
            Variant: <code>{variant}</code>
          </p>
        )}

        <fieldset class="ki-animated-fieldset">
          <legend>Trigger</legend>
          <div class="ki-animated-segment" role="radiogroup" aria-label={`Triggers for ${icon.iconName}`}>
            {TRIGGER_OPTIONS.map((entry) => (
              <label key={entry.id} class="ki-animated-segment-option">
                <input
                  type="radio"
                  name={`${icon.componentName}-trigger`}
                  value={entry.id}
                  checked={trigger === entry.id}
                  onChange={() => {
                    setTrigger(entry.id);
                    handleReset();
                  }}
                />
                <span>{entry.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {trigger === "manual" && icon.loopCapable ? (
          <label class="ki-animated-loop-toggle">
            <input
              type="checkbox"
              checked={loopManual}
              onChange={(event) => setLoopManual((event.currentTarget as HTMLInputElement).checked)}
            />
            <span>Loop while playing</span>
          </label>
        ) : null}

        <div class="ki-animated-card-actions">
          {trigger === "manual" ? (
            <>
              <button
                type="button"
                class="ki-animated-action-btn"
                onClick={handlePlay}
                disabled={previewReducedMotion}
                aria-label={`Play ${icon.iconName} animation`}
              >
                Play
              </button>
              <button
                type="button"
                class="ki-animated-action-btn ki-animated-action-secondary"
                onClick={handleReset}
                aria-label={`Reset ${icon.iconName} preview`}
              >
                Reset
              </button>
            </>
          ) : (
            <p class="ki-animated-trigger-hint">
              {trigger === "hover" ? "Hover the icon" : trigger === "focus" ? "Focus the button" : "Press the button"}
            </p>
          )}
        </div>

        <div class="ki-animated-snippet">
          <div class="ki-animated-snippet-header">
            <span>Usage</span>
            <button
              type="button"
              class="ki-animated-action-btn ki-animated-action-secondary"
              onClick={() => onCopy(copyId, fullSnippet)}
              aria-label={`Copy full example for ${icon.componentName}`}
            >
              {copiedId === copyId ? "Copied" : "Copy full example"}
            </button>
          </div>
          <pre class="ki-animated-snippet-pre" tabindex="0">
            <code>{compactSnippet}</code>
          </pre>
          <p class="ki-animated-snippet-hint">
            Copy includes import from <code>{icon.importPath}</code>
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AnimatedIconGallery({ id = "animated-icon-gallery" }: { id?: string }) {
  const [catalog, setCatalog] = useState<AnimatedIconCatalog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [previewReducedMotion, setPreviewReducedMotion] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    loadAnimatedIconCatalog()
      .then(setCatalog)
      .catch((loadError: Error) => setError(loadError.message));
  }, []);

  const filteredIcons = useMemo(() => {
    if (!catalog) return [];
    const query = search.trim().toLowerCase();
    if (!query) return catalog.icons;
    return catalog.icons.filter((icon) => {
      const haystack = [icon.componentName, icon.iconName, icon.intent, ...icon.variants].join(" ").toLowerCase();
      return haystack.includes(query);
    });
  }, [catalog, search]);

  const { visibleItems, page, totalPages, totalItems, startIndex, endIndex, setPage } =
    usePagination(filteredIcons, 12);

  async function copySnippet(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1600);
    } catch {
      setCopiedId(null);
    }
  }

  if (error) {
    return (
      <section class="ki-animated-gallery" id={id}>
        <p class="ki-catalog-error">Could not load animated icon catalog: {error}</p>
      </section>
    );
  }

  if (!catalog) {
    return (
      <section class="ki-animated-gallery" id={id}>
        <p class="ki-catalog-loading">Loading animated icons…</p>
      </section>
    );
  }

  return (
    <section class="ki-animated-gallery" id={id} aria-labelledby="animated-gallery-title">
      <div class="ki-animated-gallery-toolbar">
        <div class="ki-animated-gallery-heading">
          <h2 id="animated-gallery-title">Animated icon gallery</h2>
          <p>{catalog.totalIcons} Kamod-authored Lucide animations · import from <code>{catalog.importPath}</code></p>
        </div>

        <div class="ki-animated-gallery-controls">
          <label class="ki-catalog-control ki-catalog-search">
            <span>Search</span>
            <input
              type="search"
              placeholder="Search animated icons"
              value={search}
              onInput={(event) => setSearch((event.currentTarget as HTMLInputElement).value)}
            />
          </label>

          <label class="ki-animated-reduced-toggle">
            <input
              type="checkbox"
              checked={previewReducedMotion}
              onChange={(event) => setPreviewReducedMotion((event.currentTarget as HTMLInputElement).checked)}
            />
            <span>Preview reduced motion</span>
          </label>
        </div>

        {previewReducedMotion ? (
          <p class="ki-animated-reduced-note" role="status">
            Gallery preview forces <code>reducedMotion="always"</code>. In apps, use <code>reducedMotion="system"</code>{" "}
            to respect <code>prefers-reduced-motion</code>.
          </p>
        ) : null}
      </div>

      {totalPages > 1 ? (
        <nav class="ki-catalog-pagination" aria-label="Animated icon pagination">
          <p class="ki-catalog-pagination-meta">
            Showing {startIndex.toLocaleString()}–{endIndex.toLocaleString()} of {totalItems.toLocaleString()}
          </p>
          <div class="ki-catalog-pagination-controls">
            <button type="button" disabled={page <= 1} onClick={() => setPage(page - 1)}>
              Previous
            </button>
            <span class="ki-catalog-pagination-status">
              Page {page} of {totalPages}
            </span>
            <button type="button" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
              Next
            </button>
          </div>
        </nav>
      ) : null}

      <div class="ki-animated-grid" role="list">
        {visibleItems.map((icon) => (
          <AnimatedIconCard
            key={icon.componentName}
            icon={icon}
            previewReducedMotion={previewReducedMotion}
            copiedId={copiedId}
            onCopy={copySnippet}
          />
        ))}
      </div>

      {!filteredIcons.length ? <p class="ki-catalog-empty">No animated icons match your search.</p> : null}
    </section>
  );
}
