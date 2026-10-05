import type { IconProps } from "../../shared/types";

export function MotionTransferIcon({
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
      <path d="M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.5M19 10l3-3v10l-3-3Z"/><path d="M8 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1 1v3.5M6.5 16 9 13.5l2.5 2.5"/>
    </svg>
  );
}
