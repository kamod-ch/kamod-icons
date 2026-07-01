import type { IconProps } from "../../shared/types";

export function ExpandIcon({
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
      <path d="m15 15 6 6M15 9l6-6m0 13v5h-5m5-13V3h-5M3 16v5h5m-5 0 6-6M3 8V3h5m1 6L3 3"/>
    </svg>
  );
}
