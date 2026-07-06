import type { IconProps } from "../../../shared/types";

export function ZoomPanIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m8 5-2.5-2.5M10 4l2-2 2 2m6 6 2 2-2 2M4 10l-2 2 2 2m6 6 2 2 2-2"/>
    </svg>
  );
}
