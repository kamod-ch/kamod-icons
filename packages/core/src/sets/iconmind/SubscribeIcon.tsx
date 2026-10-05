import type { IconProps } from "../../shared/types";

export function SubscribeIcon({
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
      <path d="M4 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-7a7 7 0 0 1 7 7M5 6a13 13 0 0 1 13 13"/>
    </svg>
  );
}
