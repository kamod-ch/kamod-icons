import type { IconProps } from "../../../shared/types";

export function BrandMantineIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M11 16a4.97 4.97 0 0 0 2-4 5.01 5.01 0 0 0-2-4m3 1h-2m2 6h-2m-2-3h.01"/>
    </svg>
  );
}
