import type { IconProps } from "../../shared/types";

export function HistogramBucketIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 4v16m0 0h16M9 11v7m4-10v10m4-5v5M12 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
