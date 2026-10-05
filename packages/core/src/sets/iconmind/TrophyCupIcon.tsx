import type { IconProps } from "../../shared/types";

export function TrophyCupIcon({
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
      <path d="M7 3h10v6c0 4-2 6-5 6s-5-2-5-6Zm0 2c-3 0-4 4 0 5m10-5c3 0 4 4 0 5m-5 5v4m-4 0h8"/>
    </svg>
  );
}
