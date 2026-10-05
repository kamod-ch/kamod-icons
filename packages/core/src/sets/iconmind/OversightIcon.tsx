import type { IconProps } from "../../shared/types";

export function OversightIcon({
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
      <path d="M19.5 10.74a8 8 0 0 1-15.04 0"/><path d="M4.5 13.26a8 8 0 0 1 15.04 0"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
