import type { IconProps } from "../../../shared/types";

export function BrandAndroidIcon({
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
      <path d="M4 10v6m16-6v6M7 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1za5 5 0 0 1 10 0M8 3l1 2m7-2-1 2M9 18v3m6-3v3"/>
    </svg>
  );
}
