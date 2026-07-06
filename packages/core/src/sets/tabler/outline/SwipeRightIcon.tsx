import type { IconProps } from "../../../shared/types";

export function SwipeRightIcon({
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
      <path d="M4 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m8 0h8m-3 3 3-3-3-3"/>
    </svg>
  );
}
