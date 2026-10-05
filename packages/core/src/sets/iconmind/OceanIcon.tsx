import type { IconProps } from "../../shared/types";

export function OceanIcon({
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
      <path d="m3 8 3-3 3 3 3-3 3 3 3-3 3 3M3 14l3-3 3 3 3-3 3 3 3-3 3 3M3 20l3-3 3 3 3-3 3 3 3-3 3 3"/>
    </svg>
  );
}
