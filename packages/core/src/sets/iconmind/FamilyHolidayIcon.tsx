import type { IconProps } from "../../shared/types";

export function FamilyHolidayIcon({
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
      <path d="M3.5 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 20a4.5 4.5 0 0 1 9 0m1-14a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M10 19a5 5 0 0 1 10 0m-2.5-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M17 20a2.5 2.5 0 0 1 5 0"/>
    </svg>
  );
}
