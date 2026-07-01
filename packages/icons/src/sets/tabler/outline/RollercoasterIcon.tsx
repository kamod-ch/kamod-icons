import type { IconProps } from "../../../shared/types";

export function RollercoasterIcon({
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
      <path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.775 8.775 0 0 1 8.325-6H21m-1 0v12M8 21v-3m4 3V11m4-1.5V21M15 3h5v3h-5zM6 8l4-3 2 2.5-4 3-1.8-.5z"/>
    </svg>
  );
}
