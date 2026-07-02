import type { FunctionalComponent } from "preact";

interface LogoProps {
  class?: string;
  label: string;
  base?: string;
}

function withBase(base: string, link: string): string {
  if (/^https?:\/\//.test(link)) return link;
  const b = base === "/" ? "" : base.replace(/\/$/, "");
  const l = link.startsWith("/") ? link : `/${link}`;
  return `${b}${l}`;
}

const Logo: FunctionalComponent<LogoProps> = ({ class: className, label, base = "/" }) => (
  <span class={`ki-logo ${className ?? ""}`.trim()} aria-label={label}>
    <span class="ki-logo__kamod-wrap" aria-hidden="true">
      <img
        src={withBase(base, "/logo-kamod-dark.svg")}
        alt=""
        class="ki-logo__kamod ki-logo__kamod--light"
        decoding="async"
      />
      <img
        src={withBase(base, "/logo-kamod-light.svg")}
        alt=""
        class="ki-logo__kamod ki-logo__kamod--dark"
        decoding="async"
      />
    </span>
    <span class="ki-logo__icons" aria-hidden="true">
      Icons
    </span>
  </span>
);

export default Logo;
