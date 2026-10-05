import type { IconProps } from "../../shared/types";

export function SunHaloIcon({
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
      <path d="M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0"/><path d="M3.54 8.92a9 9 0 0 1 16.92 0m0 6.16a9 9 0 0 1-16.92 0"/>
    </svg>
  );
}
