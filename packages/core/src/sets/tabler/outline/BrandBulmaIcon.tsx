import type { IconProps } from "../../../shared/types";

export function BrandBulmaIcon({
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
      <path d="m5 16 1-9 5-5 6.5 6-3.5 4 5 5-8 5z"/>
    </svg>
  );
}
