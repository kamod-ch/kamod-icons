import type { IconProps } from "../../shared/types";

export function FailoverRegionIcon({
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
      <path d="M2.5 6.5a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4 9l5-5m4.5 13.5a4 4 0 1 0 8 0 4 4 0 1 0-8 0m.5 0h7M17.5 14v7m-8-11.5L14 14"/>
    </svg>
  );
}
