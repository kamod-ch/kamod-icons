import type { IconProps } from "../../shared/types";

export function PlaceSearchIcon({
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
      <path d="M4 10a8 8 0 0 1 16 0l-8 8Z"/><path d="M9 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2.5.5L15 13"/>
    </svg>
  );
}
