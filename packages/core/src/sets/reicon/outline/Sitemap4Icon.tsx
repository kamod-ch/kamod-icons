import type { IconProps } from "../../../shared/types";

export function Sitemap4Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M13.25 11.75v-1a2 2 0 0 0-2-2h-4.5a2 2 0 0 0-2 2v1M9 6.25v2.5"/><rect x="6.75" y="1.75" rx="1" ry="1"/><rect x="2.5" y="11.75" rx="1" ry="1"/><rect x="11" y="11.75" rx="1" ry="1"/></g>
    </svg>
  );
}
