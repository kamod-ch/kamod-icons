import type { IconProps } from "../../../shared/types";

export function TriangleSquareCircleIcon({
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
      <path d="m11.132 2.504-4 7A1 1 0 0 0 8 11h8a1 1 0 0 0 .868-1.496l-4-7a1 1 0 0 0-1.736 0M17 13a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13m-8 0H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"/>
    </svg>
  );
}
