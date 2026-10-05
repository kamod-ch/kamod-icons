import type { IconProps } from "../../shared/types";

export function DinosaurIcon({
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
      <path d="M4 19c0-4 3-6 7-6q1.5-6 6-6c0-2 2-3 3-2s0 3-1 3c0 3-2 6-5 7 0 2-1 4-3 4Zm0 0-2 2m5-3v3m5-3v3"/>
    </svg>
  );
}
