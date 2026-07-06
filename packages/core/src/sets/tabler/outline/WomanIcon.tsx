import type { IconProps } from "../../../shared/types";

export function WomanIcon({
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
      <path d="M10 16v5m4-5v5m-6-5h8l-2-7h-4zm-3-5q2.5-2 5-2m9 2q-2.5-2-5-2m-4-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
