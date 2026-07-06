import type { IconProps } from "../../../shared/types";

export function BuildingCarouselIcon({
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
      <path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-9 6 4-10 4 10"/>
    </svg>
  );
}
