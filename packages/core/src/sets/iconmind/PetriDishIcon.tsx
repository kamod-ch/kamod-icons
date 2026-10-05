import type { IconProps } from "../../shared/types";

export function PetriDishIcon({
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
      <path d="M21 9A9 9 0 0 1 3 9m0 0h18"/><path d="M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 1a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
