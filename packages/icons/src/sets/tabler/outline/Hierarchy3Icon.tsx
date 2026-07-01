import type { IconProps } from "../../../shared/types";

export function Hierarchy3Icon({
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
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-4 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-9 5 2-3m2-4 2-3m2 0 2 3m2 4 2 3m-4-3-2 3m-4-3 2 3"/>
    </svg>
  );
}
