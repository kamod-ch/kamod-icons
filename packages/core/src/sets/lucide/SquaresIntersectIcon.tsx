import type { IconProps } from "../../shared/types";

export function SquaresIntersectIcon({
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
      <path d="M10 22a2 2 0 0 1-2-2m6-18a2 2 0 0 1 2 2m0 18h-2M2 10V8m0-4a2 2 0 0 1 2-2m16 6a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2M4 16a2 2 0 0 1-2-2m6-4a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1zm0-8h2"/>
    </svg>
  );
}
