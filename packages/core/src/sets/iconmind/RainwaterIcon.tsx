import type { IconProps } from "../../shared/types";

export function RainwaterIcon({
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
      <path d="M7 13v7h10v-7M5 13h14M9 5l2 2a2 2 0 0 1-4 0Zm6-1 2 2a2 2 0 0 1-4 0Z"/>
    </svg>
  );
}
