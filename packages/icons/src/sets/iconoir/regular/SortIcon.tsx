import type { IconProps } from "../../../shared/types";

export function SortIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 14H2m6-4H2m4-4H2m10 12H2m17 2V4m0 16 3-3m-3 3-3-3m3-13 3 3m-3-3-3 3"/>
    </svg>
  );
}
