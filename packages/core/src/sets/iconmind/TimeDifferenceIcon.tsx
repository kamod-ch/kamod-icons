import type { IconProps } from "../../shared/types";

export function TimeDifferenceIcon({
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
      <path d="M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m4.5-3.5V12m0 0h3m3.5 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m4.5 0v3.5m-3-3.5h3"/>
    </svg>
  );
}
