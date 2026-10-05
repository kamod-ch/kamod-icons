import type { IconProps } from "../../shared/types";

export function CheeseIcon({
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
      <path d="M4 19v-6l6-6h10v12Z"/><path d="M8 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
