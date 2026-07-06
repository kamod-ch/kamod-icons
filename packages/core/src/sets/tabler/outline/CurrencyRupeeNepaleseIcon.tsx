import type { IconProps } from "../../../shared/types";

export function CurrencyRupeeNepaleseIcon({
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
      <path d="M15 5H4h3a4 4 0 1 1 0 8H4l6 6m11-2-4.586-4.414a2 2 0 0 0-2.828 2.828l.707.707"/>
    </svg>
  );
}
