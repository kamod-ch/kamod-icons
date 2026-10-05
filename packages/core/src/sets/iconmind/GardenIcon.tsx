import type { IconProps } from "../../shared/types";

export function GardenIcon({
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
      <path d="M4 18h16M2 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 4v6m7 0a4 4 0 0 1 8 0"/>
    </svg>
  );
}
