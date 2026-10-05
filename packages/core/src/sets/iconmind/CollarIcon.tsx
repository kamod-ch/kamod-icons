import type { IconProps } from "../../shared/types";

export function CollarIcon({
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
      <path d="M3 6c0 6 4 9 9 9s9-3 9-9M10 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
