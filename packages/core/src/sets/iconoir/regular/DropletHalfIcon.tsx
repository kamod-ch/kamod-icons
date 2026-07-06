import type { IconProps } from "../../../shared/types";

export function DropletHalfIcon({
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
      <path stroke="currentColor" d="m4.5 16.5 14-6.5m1.5 4c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"/>
    </svg>
  );
}
