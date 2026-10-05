import type { IconProps } from "../../shared/types";

export function LuggageTagIcon({
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
      <path d="M6 4h10l4 4-4 4H6Z"/><path d="M8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4 8h14M4 20h10"/>
    </svg>
  );
}
