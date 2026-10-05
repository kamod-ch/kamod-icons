import type { IconProps } from "../../shared/types";

export function PropertyTestIcon({
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
      <path d="M3 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7.5 6 11 9.5M7.5 18l3.5-3.5m2-2.5 2 2 4-4"/>
    </svg>
  );
}
