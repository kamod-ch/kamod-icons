import type { IconProps } from "../../../shared/types";

export function AdjustmentsAltIcon({
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
      <path d="M4 8h4v4H4zm2-4v4m0 4v8m4-6h4v4h-4zm2-10v10m0 4v2m4-15h4v4h-4zm2-1v1m0 4v11"/>
    </svg>
  );
}
