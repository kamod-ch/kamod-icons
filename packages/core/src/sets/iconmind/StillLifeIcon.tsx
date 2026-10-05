import type { IconProps } from "../../shared/types";

export function StillLifeIcon({
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
      <path d="M3 20v-7c0-2 2.5-3 2.5-5V4h4v4c0 2 2.5 3 2.5 5v7Zm12-3a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
