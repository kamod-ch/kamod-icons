import type { IconProps } from "../../shared/types";

export function PeopleGroupIcon({
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
      <path d="M4 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 20a9 9 0 0 1 18 0"/>
    </svg>
  );
}
