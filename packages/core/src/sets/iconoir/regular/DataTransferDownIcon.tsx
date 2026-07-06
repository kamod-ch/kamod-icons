import type { IconProps } from "../../../shared/types";

export function DataTransferDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 20v-1m0-4v-1M7 4v16m0 0-3-3m3 3 3-3m7-7V4m0 0-3 3m3-3 3 3"/>
    </svg>
  );
}
