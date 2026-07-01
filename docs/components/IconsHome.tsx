import {
  AlertCircleIcon,
  CheckIcon,
  CodeIcon,
  LayersIcon,
  PaletteIcon,
  SearchIcon,
  ShieldCheckIcon,
  GitBranchIcon,
  Wand2Icon,
  ZapIcon,
} from "@kamod/icons/shadcn";
import IconGrid from "./IconGrid.tsx";
import IconSourcesTable from "./IconSourcesTable.tsx";

const features = [
  [CodeIcon, "Preact native", "Icons are real typed Preact components and do not pull in React."],
  [ZapIcon, "Tree-shakeable", "Import named icons from a set and ship only the components your app uses."],
  [LayersIcon, "Multiple icon sets", "Subpath exports keep shadcn, lucide, heroicons, tabler and future Kamod icons separated."],
  [PaletteIcon, "currentColor styling", "Every icon follows text color, so Tailwind and CSS tokens work naturally."],
  [ShieldCheckIcon, "Accessible by default", "Decorative icons stay hidden; add a title when an icon carries meaning."],
  [GitBranchIcon, "Figma-friendly workflow", "Drop exported SVGs into raw folders and regenerate Preact components."],
] as const;

export default function IconsHome() {
  return (
    <div class="ki-home">
      <section class="ki-hero">
        <span class="ki-eyebrow"><Wand2Icon size={16} /> @kamod/icons</span>
        <h1>Beautiful Preact icons for Kamod projects.</h1>
        <p class="ki-lead">
          A small, tree-shakeable icon package built for Preact, Kamod UI and modern documentation sites.
        </p>
        <div class="ki-actions">
          <a class="ki-btn ki-btn-primary" href="/icons/installation">Get started</a>
          <a class="ki-btn ki-btn-secondary" href="#browse-icons">Browse icons</a>
        </div>
      </section>

      <section class="ki-section">
        <div class="ki-section-head">
          <div>
            <h2>Preview</h2>
            <p>Clean SVG primitives exported as typed Preact components.</p>
          </div>
        </div>
        <IconGrid />
      </section>

      <section class="ki-section">
        <h2>Built for Preact packages</h2>
        <p>
          @kamod/icons gives you clean SVG icons as typed Preact components. Import only what you need,
          style everything with currentColor and keep multiple icon sets separated through stable subpath exports.
        </p>
        <div class="ki-feature-grid">
          {features.map(([Icon, title, text]) => (
            <article class="ki-feature-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section class="ki-section">
        <h2>Usage in one import</h2>
        <pre class="ki-code"><code>{`import { SearchIcon } from "@kamod/icons/shadcn";

export function Example() {
  return (
    <button class="inline-flex items-center gap-2">
      <SearchIcon class="h-4 w-4" />
      Search
    </button>
  );
}`}</code></pre>
      </section>

      <section class="ki-section">
        <h2>Icon sets stay explicit</h2>
        <p>
          The root import points to the preferred default set, currently shadcn. Explicit imports are better for
          long-lived app code because they make the source set clear and avoid future naming conflicts.
        </p>
        <div class="ki-set-grid">
          <article class="ki-set-card"><h3>Default</h3><p><code>@kamod/icons</code></p></article>
          <article class="ki-set-card"><h3>Stable set</h3><p><code>@kamod/icons/shadcn</code></p></article>
          <article class="ki-set-card"><h3>Future sets</h3><p><code>@kamod/icons/lucide</code>, <code>/heroicons</code>, <code>/tabler</code>, <code>/kamod</code></p></article>
        </div>
      </section>

      <section class="ki-section">
        <h2>Small UI examples</h2>
        <div class="ki-examples-grid">
          <article class="ki-example-card">
            <h3>Button + Icon</h3>
            <div class="ki-demo-button"><SearchIcon size={16} /> Search</div>
          </article>
          <article class="ki-example-card">
            <h3>Input + Icon</h3>
            <div class="ki-demo-input"><SearchIcon size={16} /> Search docs...</div>
          </article>
          <article class="ki-example-card">
            <h3>Alert + Icon</h3>
            <div class="ki-demo-alert"><AlertCircleIcon size={18} /><span>Icons follow current text color.</span></div>
          </article>
        </div>
      </section>

      <section class="ki-section">
        <h2>Upstream icon sources</h2>
        <p>
          Each set tracks the npm package version it was synced from. Use <code>@kamod/icons/meta</code> in code
          or read the full table on the icon sets page.
        </p>
        <IconSourcesTable />
      </section>

      <section class="ki-section">
        <h2>What to read next</h2>
        <div class="ki-actions">
          <a class="ki-btn ki-btn-secondary" href="/icons/usage">Imports and styling</a>
          <a class="ki-btn ki-btn-secondary" href="/icons/icon-sets">Icon sets</a>
          <a class="ki-btn ki-btn-secondary" href="/icons/figma-workflow">Figma workflow</a>
        </div>
      </section>
    </div>
  );
}
