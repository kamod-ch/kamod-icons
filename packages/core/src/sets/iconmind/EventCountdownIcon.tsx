import type { IconProps } from "../../shared/types";

export function EventCountdownIcon({
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
      <path d="M6 3h12c0 4-5 6-5 9s5 5 5 9H6c0-4 5-6 5-9S6 7 6 3"/><path d="M8 19c1.5-2 6.5-2 8 0"/>
    </svg>
  );
}
