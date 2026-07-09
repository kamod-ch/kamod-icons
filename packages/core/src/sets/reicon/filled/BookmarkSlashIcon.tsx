import type { IconProps } from "../../../shared/types";

export function BookmarkSlashIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M19.881 4.119a3.664 3.664 0 0 0-3.548-2.786H7.667A3.67 3.67 0 0 0 4 5v15zM6.121 22.121 12 18.536l6.445 3.964a1 1 0 0 0 1.027.05 1 1 0 0 0 .528-.882V8.243z"/><path d="M2.667 22.333a1 1 0 0 1-.707-1.708L20.627 1.96a1 1 0 1 1 1.414 1.415L3.373 22.04a1 1 0 0 1-.706.293Z"/></g>
    </svg>
  );
}
