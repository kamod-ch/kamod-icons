import type { IconProps } from "../../shared/types";

export function SignificanceIcon({
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
      <path d="M3 10h18M5 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
