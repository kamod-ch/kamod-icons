import type { IconProps } from "../../../shared/types";

export function AdjustmentsOffIcon({
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
      <path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-4v2m0 4v8m4-4a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-12v4m0 4v2m0 4v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v5m0 4v2M3 3l18 18"/>
    </svg>
  );
}
