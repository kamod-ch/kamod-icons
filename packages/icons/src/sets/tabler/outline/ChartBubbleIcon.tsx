import type { IconProps } from "../../../shared/types";

export function ChartBubbleIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m11 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0"/>
    </svg>
  );
}
