import type { IconProps } from "../../../shared/types";

export function ActivityHeartbeatIcon({
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
      <path d="M3 12h4.5L9 6l4 12 2-9 1.5 3H21"/>
    </svg>
  );
}
