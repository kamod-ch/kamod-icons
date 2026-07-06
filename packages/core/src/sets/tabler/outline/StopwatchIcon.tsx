import type { IconProps } from "../../../shared/types";

export function StopwatchIcon({
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
      <path d="M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0m9.5-2.5L12 13m5-5 1-1m-4-4h-4"/>
    </svg>
  );
}
