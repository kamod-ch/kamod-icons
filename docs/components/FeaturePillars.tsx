const pillars = [
  {
    title: "Ready-to-use",
    description:
      "Import typed Preact components and render icons directly in your UI — no sprite sheets or manual SVG wiring.",
  },
  {
    title: "Multiple formats",
    description:
      "Choose from shadcn, Lucide, Heroicons, Tabler, and Iconoir with stable subpath exports for each family.",
  },
  {
    title: "Customizable",
    description:
      "Every icon uses currentColor, so size, stroke, and color stay aligned with your design tokens.",
  },
  {
    title: "Free and open source",
    description:
      "MIT-licensed icon components with tree-shakeable imports — use them freely in personal and commercial projects.",
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
