import type { IconProps } from "../../../shared/types";

export function SliceIcon({
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
      <path d="M3 19 18 4l3 3-6 6 2 2a14 14 0 0 1-14 4"/>
    </svg>
  );
}
