import type { IconProps } from "../../../shared/types";

export function BrandAdobeIndesignIcon({
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
      <path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12"/><path d="M15 11v4c0 1.1-.657.997-1.6.997a2.35 2.35 0 0 1-1.697-.731A2.55 2.55 0 0 1 11 13.499c0-.663.253-1.299.703-1.767A2.35 2.35 0 0 1 13.4 11zm0 0V8M8 8v8"/>
    </svg>
  );
}
