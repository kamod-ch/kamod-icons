import type { IconProps } from "../../../shared/types";

export function PendulumIcon({
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
      <path d="M5 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-16L7.6 17.09M19 3H5"/>
    </svg>
  );
}
