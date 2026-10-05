import type { IconProps } from "../../shared/types";

export function SessionCountIcon({
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
      <path d="M4 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 19a5 5 0 0 1 10 0m2-11a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-2 11a5 5 0 0 1 10 0"/>
    </svg>
  );
}
