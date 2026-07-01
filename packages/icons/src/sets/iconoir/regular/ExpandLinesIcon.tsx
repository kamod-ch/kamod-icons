import type { IconProps } from "../../../shared/types";

export function ExpandLinesIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 2H6m12 20H6m6-8v5m0 0 3-3m-3 3-3-3m3-6V5m0 0 3 3m-3-3L9 8"/>
    </svg>
  );
}
