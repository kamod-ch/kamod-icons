import type { IconProps } from "../../../shared/types";

export function BrandTumblrIcon({
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
      <path d="M14 2a1 1 0 0 1 1 1v3h3a1 1 0 0 1 .993.883L19 7v4a1 1 0 0 1-1 1h-3v4h3a1 1 0 0 1 .993.883L19 17v4a1 1 0 0 1-1 1h-4a5 5 0 0 1-5-5v-5H6a1 1 0 0 1-.993-.883L5 11V7a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2V3a1 1 0 0 1 1-1z"/>
    </svg>
  );
}
