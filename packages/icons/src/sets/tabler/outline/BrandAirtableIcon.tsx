import type { IconProps } from "../../../shared/types";

export function BrandAirtableIcon({
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
      <path d="M3 10v8l7-3v-2.6zm0-4 9 3 9-3-9-3zm11 6.3V21l7-3v-8z"/>
    </svg>
  );
}
