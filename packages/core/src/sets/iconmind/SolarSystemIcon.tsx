import type { IconProps } from "../../shared/types";

export function SolarSystemIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M18 12a6 6 0 1 1-3-5.2"/><path d="M16.5 19.79A9 9 0 1 1 21 12"/><path d="M17 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
