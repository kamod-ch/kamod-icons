import type { IconProps } from "../../../shared/types";

export function TrekkingIcon({
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
      <path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l2-4m4 4v-4l-3-3 1-6 3 4 3 2"/><path d="m10 14-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11l4 1 3-2m-1 5v9m-1-1h2"/>
    </svg>
  );
}
