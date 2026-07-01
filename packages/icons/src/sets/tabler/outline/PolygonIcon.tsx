import type { IconProps } from "../../../shared/types";

export function PolygonIcon({
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
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6.5 9.5l3.5-3m4-1L17 7m1.5 3L16 17m-2.5.5-7-5"/>
    </svg>
  );
}
