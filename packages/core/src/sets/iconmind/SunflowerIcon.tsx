import type { IconProps } from "../../shared/types";

export function SunflowerIcon({
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
      <path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M5.5 9a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0m6.5 6.5V21m1 0c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6"/>
    </svg>
  );
}
