import type { IconProps } from "../../shared/types";

export function EyeglassesIcon({
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
      <path d="M2 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m11 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m-2.5 0h3M2 9l2 2m18-2-2 2"/>
    </svg>
  );
}
