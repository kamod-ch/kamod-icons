const pillars = [
  {
    title: "Typed components",
    description:
      "Import icons as real Preact components with SVG props, title support, and predictable JSX behavior.",
  },
  {
    title: "Stable subpaths",
    description:
      "Choose shadcn, Lucide, Heroicons, Tabler, or Iconoir explicitly so long-lived apps never lose icon provenance.",
  },
  {
    title: "Design-token friendly",
    description:
      "Icons inherit currentColor and scale with class names or the size prop, making them easy to theme.",
  },
  {
    title: "Lean by default",
    description:
      "ESM exports, no React runtime dependency, and tree-shakeable imports keep bundles focused on the icons you use.",
  },
] as const;

export default function FeaturePillars() {
  return (
    <section class="ki-features" aria-labelledby="feature-pillars-title">
      <h2 id="feature-pillars-title" class="ki-visually-hidden">
        Why Kamod Icons
      </h2>
      <div class="ki-features-grid">
        {pillars.map((pillar) => (
          <article class="ki-feature-card" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
