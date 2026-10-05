import type { IconProps } from "../../shared/types";

export function RollingPinIcon({
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
      <path d="M5 10.5A3.5 3.5 0 0 1 8.5 7h7a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 10.5m-3 0h3m14 0h3M4 20h16"/>
    </svg>
  );
}
