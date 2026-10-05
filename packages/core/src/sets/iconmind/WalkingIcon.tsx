import type { IconProps } from "../../shared/types";

export function WalkingIcon({
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
      <path d="M9 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v6m-3-1 3-3 3 3m-7 5 4-4 4 4m-8 0H5m11 0h3"/>
    </svg>
  );
}
