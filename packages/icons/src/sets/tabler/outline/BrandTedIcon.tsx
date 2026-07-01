import type { IconProps } from "../../../shared/types";

export function BrandTedIcon({
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
      <path d="M2 8h4M4 8v8m9-8H9v8h4m-4-4h2.5M16 8v8h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"/>
    </svg>
  );
}
