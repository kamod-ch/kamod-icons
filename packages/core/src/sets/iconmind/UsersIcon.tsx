import type { IconProps } from "../../shared/types";

export function UsersIcon({
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
      <path d="M5 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 20a5 5 0 0 1 10 0m2-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 10a4 4 0 0 1 8 0"/>
    </svg>
  );
}
