import type { IconProps } from "../../shared/types";

export function GearWheelIcon({
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
      <path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7.5 7.5 5 5m11.5 2.5L19 5m-2.5 11.5L19 19M7.5 16.5 5 19"/>
    </svg>
  );
}
