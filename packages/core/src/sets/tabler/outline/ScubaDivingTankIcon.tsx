import type { IconProps } from "../../../shared/types";

export function ScubaDivingTankIcon({
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
      <path d="M8 11a4 4 0 1 1 8 0v5H8zm0 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M9 4h6m-3 3V4M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path fill="currentColor" d="M11.5 4a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/>
    </svg>
  );
}
