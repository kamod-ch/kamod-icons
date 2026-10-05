import type { IconProps } from "../../shared/types";

export function FreeWifiIcon({
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
      <path d="M7.77 15.46a4.5 4.5 0 0 1 8.46 0"/><path d="M3.54 13.92a9 9 0 0 1 16.92 0M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
