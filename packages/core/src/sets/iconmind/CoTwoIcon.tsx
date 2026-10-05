import type { IconProps } from "../../shared/types";

export function CoTwoIcon({
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
      <path d="M5 18a4 4 0 0 1 2-7 5 5 0 0 1 9-1 4.5 4.5 0 0 1 3 8Z"/><path d="M7.5 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5.5 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
