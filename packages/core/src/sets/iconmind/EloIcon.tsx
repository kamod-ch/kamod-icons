import type { IconProps } from "../../shared/types";

export function EloIcon({
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
      <path d="M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M6 4v9M3.5 6.5 6 4l2.5 2.5M15 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v9m-2.5-2.5L18 20l2.5-2.5"/>
    </svg>
  );
}
