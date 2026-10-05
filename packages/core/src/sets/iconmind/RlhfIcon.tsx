import type { IconProps } from "../../shared/types";

export function RlhfIcon({
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
      <path d="M9 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M6.5 19a5.5 5.5 0 0 1 11 0"/><path d="M7 20.66A10 10 0 0 1 7 3.34m10 0a10 10 0 0 1 0 17.32"/>
    </svg>
  );
}
