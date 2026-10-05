import type { IconProps } from "../../shared/types";

export function IdempotencyKeyIcon({
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
      <path d="M4 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 1h7m-2.5 0v3m4.5-3h4m-4 6h4"/>
    </svg>
  );
}
