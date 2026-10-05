import type { IconProps } from "../../shared/types";

export function TokenUsageIcon({
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
      <path d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m0 10a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3"/>
    </svg>
  );
}
