import type { IconProps } from "../../../shared/types";

export function MoodShareIcon({
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
      <path d="M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01"/><path d="M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}
