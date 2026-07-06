import type { IconProps } from "../../../shared/types";

export function CompressLinesIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 2H6m12 20H6m6-17v5m0 0 3-3m-3 3L9 7m3 12v-5m0 0 3 3m-3-3-3 3"/>
    </svg>
  );
}
