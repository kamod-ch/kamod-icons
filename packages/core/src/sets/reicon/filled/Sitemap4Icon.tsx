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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><path d="M11.25 8h-1.5V6.25a.75.75 0 0 0-1.5 0V8h-1.5A2.75 2.75 0 0 0 4 10.75v1a.75.75 0 0 0 1.5 0v-1c0-.689.561-1.25 1.25-1.25h4.5c.689 0 1.25.561 1.25 1.25v1a.75.75 0 0 0 1.5 0v-1A2.75 2.75 0 0 0 11.25 8Z"/><rect x="6" y="1" rx="1.75" ry="1.75"/><rect x="1.75" y="11" rx="1.75" ry="1.75"/><rect x="10.25" y="11" rx="1.75" ry="1.75"/></g>
    </svg>
  );
}
