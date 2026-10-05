import type { IconProps } from "../../shared/types";

export function Http2StreamIcon({
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
      <path d="M2 12a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5 5 5 0 0 1-5 5H7a5 5 0 0 1-5-5m3-2.5h14M5 12h14M5 14.5h14"/>
    </svg>
  );
}
