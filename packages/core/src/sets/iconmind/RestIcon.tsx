import type { IconProps } from "../../shared/types";

export function RestIcon({
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
      <path d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3"/><path d="M5 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0h8M2 17a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3"/><path d="M5 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0h5"/>
    </svg>
  );
}
