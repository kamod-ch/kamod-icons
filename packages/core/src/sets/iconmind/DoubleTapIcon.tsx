import type { IconProps } from "../../shared/types";

export function DoubleTapIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M16.24 7.76a6 6 0 1 1-8.5 0"/><path d="M19.07 4.93a10 10 0 1 1-14.14 0"/>
    </svg>
  );
}
