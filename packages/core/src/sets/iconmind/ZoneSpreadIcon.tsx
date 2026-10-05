import type { IconProps } from "../../shared/types";

export function ZoneSpreadIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M6.5 8.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-5.5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
