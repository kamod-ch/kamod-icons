export type AnimatedCatalogIcon = {
  componentName: string;
  iconName: string;
  variants: string[];
  defaultVariant: string;
  source: "kamod";
  intent: string;
  loopCapable: boolean;
  importPath: string;
};

export type AnimatedIconCatalog = {
  generatedAt: string;
  importPath: string;
  icons: AnimatedCatalogIcon[];
  totalIcons: number;
};

export type AnimatedTriggerMode = "manual" | "hover" | "focus" | "press";

let catalogPromise: Promise<AnimatedIconCatalog> | null = null;

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export function loadAnimatedIconCatalog(): Promise<AnimatedIconCatalog> {
  if (!catalogPromise) {
    catalogPromise = fetch(withBase("data/animated-icon-catalog.json")).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load animated icon catalog (${response.status})`);
      }
      return response.json() as Promise<AnimatedIconCatalog>;
    });
  }
  return catalogPromise;
}

export function formatAnimatedImportSnippet(componentName: string, importPath: string): string {
  return `import { ${componentName} } from "${importPath}";`;
}

type AnimatedSnippetOptions = {
  componentName: string;
  importPath: string;
  variant: string;
  trigger: AnimatedTriggerMode;
  loop?: boolean;
  withButton?: boolean;
};

function formatAnimatedJsxBody(options: AnimatedSnippetOptions): string {
  const { componentName, variant, trigger, loop } = options;
  const loopProp = loop ? "\n  loop" : "";

  if (trigger === "focus" || trigger === "press") {
    const prop = trigger === "focus" ? "animateOnFocus" : "animateOnPress";
    return `<button type="button" aria-label="Run action">
  <${componentName}
    size={20}
    ${prop}="${variant}"
    triggerTarget="parent"
    title="Action"
  />
</button>`;
  }

  if (trigger === "hover") {
    return `<${componentName} size={20} animateOnHover="${variant}" title="Action" />`;
  }

  return `<${componentName}
  size={20}
  animate="${variant}"${loopProp}
  title="Action"
/>`;
}

/** Compact JSX for in-card preview (no import, no wrapper function). */
export function formatAnimatedCompactSnippet(options: AnimatedSnippetOptions): string {
  return formatAnimatedJsxBody(options);
}

/** Full copy-paste example including import and export function. */
export function formatAnimatedUsageSnippet(options: AnimatedSnippetOptions): string {
  const importLine = formatAnimatedImportSnippet(options.componentName, options.importPath);
  const body = formatAnimatedJsxBody(options);
  const indentedBody = body
    .split("\n")
    .map((line) => (line ? `    ${line}` : line))
    .join("\n");

  return `${importLine}

export function Example() {
  return (
${indentedBody}
  );
}`;
}

export function formatAnimateIconGroupSnippet(importPath: string): string {
  return `import { AnimateIcon, SearchAnimatedIcon, BellAnimatedIcon } from "${importPath}";

export function Toolbar() {
  return (
    <AnimateIcon animateOnHover>
      <SearchAnimatedIcon size={20} title="Search" />
      <BellAnimatedIcon size={20} title="Notifications" />
    </AnimateIcon>
  );
}`;
}

export function formatReducedMotionSnippet(componentName: string, importPath: string): string {
  return `${formatAnimatedImportSnippet(componentName, importPath)}

<${componentName} animate reducedMotion="system" title="Respects prefers-reduced-motion" />`;
}
