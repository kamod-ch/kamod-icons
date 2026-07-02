import { iconSources } from "@kamod/icons/meta";

const totalIcons = Object.values(iconSources).reduce((sum, set) => sum + set.iconCount, 0);
const packageVersion = "1.0.0";

export default function LandingHero() {
  return (
    <section class="ki-hero" aria-labelledby="landing-hero-title">
      <div class="ki-hero-inner">
        <p class="ki-hero-eyebrow">Kamod Icons</p>
        <h1 id="landing-hero-title">One icon library for every Preact project</h1>
        <p class="ki-hero-lead">
          A complete icon library with {totalIcons.toLocaleString()} icons across five curated families —
          ready for Preact apps, docs, and design systems.
        </p>
        <div class="ki-hero-actions">
          <a class="ki-btn ki-btn-primary" href="/icons/installation">
            Get started
          </a>
        </div>
        <div class="ki-hero-meta">
          <span class="ki-hero-badge">v{packageVersion}</span>
          <span class="ki-hero-meta-copy">{totalIcons.toLocaleString()} icons · MIT License</span>
        </div>
      </div>
    </section>
  );
}
