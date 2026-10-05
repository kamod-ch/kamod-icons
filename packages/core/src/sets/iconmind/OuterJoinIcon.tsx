import type { IconProps } from "../../shared/types";

export function OuterJoinIcon({
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
      <path d="M2 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0"/><path d="M11 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0M5 3h5m4 0h5"/>
    </svg>
  );
}
