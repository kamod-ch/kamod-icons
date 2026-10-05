import type { IconProps } from "../../shared/types";

export function DayTripIcon({
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
      <path d="M7.5 11a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0M12 2v3M4 5l3 3m13-3-3 3M2 18h20"/>
    </svg>
  );
}
