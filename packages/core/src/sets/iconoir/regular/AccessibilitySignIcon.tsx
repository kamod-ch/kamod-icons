import type { IconProps } from "../../../shared/types";

export function AccessibilitySignIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 12.5 7-.5-1.5 6.5m-5.5-6 4.5-5L12.5 5 10 7.5m8.5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.5a5 5 0 0 1 7.584 6M3.729 15A5 5 0 0 0 11 20.831"/>
    </svg>
  );
}
