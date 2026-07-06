import { iconSources } from "@kamod-ch/icons/meta";

const totalIcons = Object.values(iconSources).reduce((sum, set) => sum + set.iconCount, 0);
const packageVersion = "1.0.0";

export default function LandingHero() {
  return (
    <section class="ki-hero" aria-labelledby="landing-hero-title">
      <div class="ki-hero-inner">
        <p class="ki-hero-eyebrow">Kamod Icons for Preact</p>
        <h1 id="landing-hero-title">Find, copy, and ship production-ready icons faster</h1>
        <p class="ki-hero-lead">
          Browse {totalIcons.toLocaleString()} typed SVG components from curated icon families, import only
          what you need, and keep visual language consistent across apps, docs, and design systems.
        </p>
        <div class="ki-hero-actions">
          <a class="ki-btn ki-btn-primary" href=".-ch-ch/icons/installation">
            Start in 2 minutes
          </a>
          <a class="ki-btn ki-btn-secondary" href="#icon-browser">
            Browse icons
          </a>
        </div>
        <div class="ki-hero-meta">
          <span class="ki-hero-badge">v{packageVersion}</span>
          <span class="ki-hero-meta-copy">{totalIcons.toLocaleString()} icons · Preact components · MIT License</span>
        </div>
      </div>
    </section>
  );
}
