import type { IconProps } from "../../shared/types";

export function WifiIcon({
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
      <path d="M3 11.69a11 11 0 0 1 18 0"/><path d="M5.86 13.7a7.5 7.5 0 0 1 12.28 0"/><path d="M8.72 15.71a4 4 0 0 1 6.56 0M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
