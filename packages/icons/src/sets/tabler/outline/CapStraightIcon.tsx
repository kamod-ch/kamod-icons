import type { IconProps } from "../../../shared/types";

export function CapStraightIcon({
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
      <path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h12"/><path d="M20 6H8a2 2 0 0 0-2 2v2m0 4v2a2 2 0 0 0 2 2h12"/>
    </svg>
  );
}
