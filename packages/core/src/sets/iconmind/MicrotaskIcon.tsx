import type { IconProps } from "../../shared/types";

export function MicrotaskIcon({
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
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M4 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m14 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0m14 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
