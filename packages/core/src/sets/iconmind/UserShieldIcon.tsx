import type { IconProps } from "../../shared/types";

export function UserShieldIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 21a6 6 0 0 1 12 0m.5-12h5v4L18 15.5 15.5 13Z"/>
    </svg>
  );
}
