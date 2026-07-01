import type { IconProps } from "../../../shared/types";

export function ChartDotsIcon({
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
      <path d="M3 3v18h18"/><path d="M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-5 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1.84-4.38 2.34 2.88m2.588-.172 2.837-4.586"/>
    </svg>
  );
}
