import type { IconProps } from "../../../shared/types";

export function DirectionsIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 22a1 1 0 0 1 0-2h1v-2.001L6 18a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 6 12l5-.001V10H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 2 0v1h6a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2A1 1 0 0 1 19 10h-6v1.999L14 12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1l-1-.001V20h1a1 1 0 0 1 0 2z"/>
    </svg>
  );
}
