import type { IconProps } from "../../../shared/types";

export function BrandAdobeXdIcon({
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
      <path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12m3-4 5 8m-5 0 5-8"/><path d="M18 11v4c0 1.1-.517.997-1.5.997A2.5 2.5 0 0 1 14 13.5a2.5 2.5 0 0 1 2.5-2.5zV8"/>
    </svg>
  );
}
