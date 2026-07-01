import type { IconProps } from "../../../shared/types";

export function TopologyStar3Icon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8-14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4-7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4m4 0h4m-3-5-2 3M9 7l2 3m0 4-2 3m4-3 2 3"/>
    </svg>
  );
}
