import type { IconProps } from "../../shared/types";

export function RainbowIcon({
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
      <path d="M3 17a9 9 0 0 1 18 0"/><path d="M5.5 17a6.5 6.5 0 0 1 13 0"/><path d="M8 17a4 4 0 0 1 8 0M3 17h18"/>
    </svg>
  );
}
