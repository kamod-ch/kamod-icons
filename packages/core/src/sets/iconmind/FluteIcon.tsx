import type { IconProps } from "../../shared/types";

export function FluteIcon({
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
      <path d="M3 16 17 2l4 4L7 20Z"/><path d="M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
