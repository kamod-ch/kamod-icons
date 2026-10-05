import type { IconProps } from "../../shared/types";

export function HandbackIcon({
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
      <path d="M7.27 15.28a3 3 0 1 1-2.54 0m3.77.22L11 13m-.5-2H13v2.5M17 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0"/>
    </svg>
  );
}
