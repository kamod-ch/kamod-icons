import type { IconProps } from "../../shared/types";

export function FloodIcon({
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
      <path d="m5 11 7-7 7 7M7 11v5h10v-5M3 19l2.5-2.5L8 19l2.5-2.5L13 19l2.5-2.5L18 19l2.5-2.5"/>
    </svg>
  );
}
