import type { IconProps } from "../../../shared/types";

export function TrendingDownIcon({
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
      <path d="m3 7 6 6 4-4 8 8"/><path d="M21 10v7h-7"/>
    </svg>
  );
}
