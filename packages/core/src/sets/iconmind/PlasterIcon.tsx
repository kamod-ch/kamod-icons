import type { IconProps } from "../../shared/types";

export function PlasterIcon({
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
      <path d="m3.5 15.5 12-12a4 4 0 0 1 5 5l-12 12a4 4 0 0 1-5-5"/><path d="M9 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
