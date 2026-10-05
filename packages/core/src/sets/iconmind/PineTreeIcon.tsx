import type { IconProps } from "../../shared/types";

export function PineTreeIcon({
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
      <path d="m6 9 6-6 6 6Z"/><path d="m4 15 8-8 8 8Zm8 0v6m-4 0h8"/>
    </svg>
  );
}
