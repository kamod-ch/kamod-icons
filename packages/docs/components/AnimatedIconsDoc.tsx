import { AnimateIcon, SearchAnimatedIcon, BellAnimatedIcon } from "@kamod-ch/icons/lucide/animated";
import AnimatedIconGallery from "./AnimatedIconGallery.tsx";
import {
  formatAnimateIconGroupSnippet,
  formatAnimatedImportSnippet,
  formatReducedMotionSnippet,
} from "./animatedIconCatalog.ts";

const importPath = "@kamod-ch/icons/lucide/animated";

function CodeBlock({ code }: { code: string }) {
  return (
    <pre class="ki-doc-code">
      <code>{code}</code>
    </pre>
  );
}

export default function AnimatedIconsDoc() {
  return (
    <div class="ki-doc ki-animated-doc">
      <header class="ki-doc-header">
        <p class="ki-doc-eyebrow">Product capability</p>
        <h1>Animated icons</h1>
        <p class="ki-doc-lead">
          Kamod Animated Icons are Preact-native Lucide components powered by the Web Animations API. They ship on a
          dedicated subpath, stay independent from static icon sets, and never pull React or motion libraries into your
          bundle.
        </p>
      </header>

      <section class="ki-doc-section" aria-labelledby="animated-positioning">
        <h2 id="animated-positioning">Preact-native positioning</h2>
        <ul>
          <li>Built for Preact 10+ with `preact/jsx-runtime` — no React or `preact/compat` dependency.</li>
          <li>Animations use `Element.animate` (WAAPI) after mount; imports are SSR-safe.</li>
          <li>Separate export at <code>{importPath}</code> — static <code>@kamod-ch/icons/lucide</code> stays animation-free.</li>
          <li>Preview API — motion semantics may evolve as cross-browser coverage improves.</li>
        </ul>
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-install">
        <h2 id="animated-install">Installation</h2>
        <p>Install the icons package and Preact together:</p>
        <CodeBlock code={`npm install @kamod-ch/icons preact`} />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-import">
        <h2 id="animated-import">Import</h2>
        <p>Always import animated components from the dedicated subpath:</p>
        <CodeBlock code={formatAnimatedImportSnippet("SearchAnimatedIcon", importPath)} />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-basic">
        <h2 id="animated-basic">Basic usage</h2>
        <p>Animated icons accept the same props as static icons (`size`, `class`, `title`, SVG props) plus animation controls.</p>
        <CodeBlock
          code={`import { CheckAnimatedIcon } from "${importPath}";

export function SavedBadge() {
  return (
    <span class="inline-flex items-center gap-2 text-green-700">
      <CheckAnimatedIcon size={20} title="Saved" animate="draw" />
      Saved
    </span>
  );
}`}
        />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-programmatic">
        <h2 id="animated-programmatic">Programmatic `animate`</h2>
        <p>
          Pass <code>animate</code> as <code>true</code> (default variant) or a variant name to play immediately. Combine
          with <code>loop</code> only for loader or refresh semantics.
        </p>
        <CodeBlock
          code={`import { LoaderCircleAnimatedIcon } from "${importPath}";

<LoaderCircleAnimatedIcon animate="spin" loop title="Loading" />`}
        />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-triggers">
        <h2 id="animated-triggers">Interaction triggers</h2>
        <p>Trigger animation from pointer or visibility events:</p>
        <ul>
          <li><code>animateOnHover</code> — pointer enter on the trigger target</li>
          <li><code>animateOnFocus</code> — focusin on the trigger target</li>
          <li><code>animateOnPress</code> — pointer down on the trigger target</li>
          <li><code>animateOnView</code> — when the target enters the viewport (Intersection Observer)</li>
        </ul>
        <CodeBlock
          code={`import { BellAnimatedIcon } from "${importPath}";

<BellAnimatedIcon size={20} animateOnHover="ring" title="Notifications" />`}
        />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-parent">
        <h2 id="animated-parent">Parent button triggers</h2>
        <p>
          Use <code>triggerTarget="parent"</code> when the interactive element already exists — common for icon-only
          buttons.
        </p>
        <CodeBlock
          code={`import { SearchAnimatedIcon } from "${importPath}";

<button type="button" aria-label="Search">
  <SearchAnimatedIcon
    size={20}
    animateOnFocus="scan"
    triggerTarget="parent"
    title="Search"
  />
</button>`}
        />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-group">
        <h2 id="animated-group">Group control with `AnimateIcon`</h2>
        <p>Wrap related icons to share triggers via context:</p>
        <div class="ki-animated-group-demo" aria-hidden="true">
          <AnimateIcon animateOnHover class="ki-animated-group-inline">
            <SearchAnimatedIcon size={22} title="Search" />
            <BellAnimatedIcon size={22} title="Notifications" />
          </AnimateIcon>
        </div>
        <CodeBlock code={formatAnimateIconGroupSnippet(importPath)} />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-reduced">
        <h2 id="animated-reduced">Reduced motion</h2>
        <p>
          Default is <code>reducedMotion="system"</code>, which skips animation when the user prefers reduced motion.
          Use the gallery toggle below to preview the static fallback. Override only when you have a product reason:
        </p>
        <CodeBlock code={formatReducedMotionSnippet("HeartAnimatedIcon", importPath)} />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-a11y">
        <h2 id="animated-a11y">Accessibility</h2>
        <ul>
          <li>Add <code>title</code> when the icon conveys meaning on its own — it renders an SVG <code>&lt;title&gt;</code> and <code>role="img"</code>.</li>
          <li>Decorative icons inside labelled controls stay un-titled; put <code>aria-label</code> on the button instead.</li>
          <li>Animation never replaces text labels for icon-only controls.</li>
        </ul>
        <CodeBlock
          code={`import { Trash2AnimatedIcon } from "${importPath}";

<button type="button" aria-label="Delete item">
  <Trash2AnimatedIcon size={20} animateOnPress="delete" triggerTarget="parent" />
</button>`}
        />
      </section>

      <section class="ki-doc-section" aria-labelledby="animated-ssr">
        <h2 id="animated-ssr">SSR behavior</h2>
        <p>
          Animated icons render static SVG on the server. WAAPI runs only after hydration in the browser. No{" "}
          <code>window</code> or <code>document</code> access occurs at import time.
        </p>
      </section>

      <AnimatedIconGallery id="animated-icon-gallery" />
    </div>
  );
}
