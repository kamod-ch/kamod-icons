import type { IconProps } from "../../shared/types";

export function StackFrameIcon({
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
      <path d="M7 4h10M4 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3 3 3 0 0 1-3 3H7a3 3 0 0 1-3-3"/><path d="M7 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4.5 0h5M7 18h10"/>
    </svg>
  );
}
