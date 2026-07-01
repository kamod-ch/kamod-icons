import type { IconProps } from "../../../shared/types";

export function Signal4gPlusIcon({
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
      <path d="M17 12h4M3 8v3a1 1 0 0 0 1 1h3m0-4v8m12-6v4m-5-6h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1"/>
    </svg>
  );
}
