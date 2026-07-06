import { useMemo, useState } from "preact/hooks";
import { iconSets } from "./iconSets.ts";

type IconSetBrowserProps = {
  variant?: "hero" | "full";
  id?: string;
  panelId?: string;
};

export default function IconSetBrowser({
  variant = "full",
  id = "browse-icons",
  panelId = "ki-icon-set-panel",
}: IconSetBrowserProps) {
  const [activeSetId, setActiveSetId] = useState(iconSets[0].id);
  const activeSet = useMemo(
    () => iconSets.find((set) => set.id === activeSetId) ?? iconSets[0],
    [activeSetId],
  );
  const previewIcons = variant === "hero" ? activeSet.icons.slice(0, 9) : activeSet.icons;
  const rootClass = variant === "hero" ? "ki-icon-browser ki-icon-browser-hero" : "ki-icon-browser";

  return (
    <div class={rootClass} id={id}>
      <div class="ki-set-tabs" role="tablist" aria-label="Icon sets">
        {iconSets.map((set) => {
          const selected = set.id === activeSet.id;
          return (
            <button
              key={set.id}
              type="button"
              class={selected ? "active" : ""}
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              onClick={() => setActiveSetId(set.id)}
            >
              <span class="ki-set-tab-label">{set.label}</span>
              <span class="ki-set-tab-count">{set.iconCount.toLocaleString()}</span>
            </button>
          );
        })}
      </div>

      <div class="ki-set-intro">
        <div>
          <h3>{activeSet.label}</h3>
          <p>{activeSet.description}</p>
        </div>
        <code>{activeSet.importPath}</code>
      </div>

      <div
        class={variant === "hero" ? "ki-icon-grid ki-hero-set-grid" : "ki-icon-grid"}
        id={panelId}
        role="tabpanel"
      >
        {previewIcons.map(([name, Icon]) => (
          <div class="ki-icon-card" key={`${activeSet.id}:${name}`}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
