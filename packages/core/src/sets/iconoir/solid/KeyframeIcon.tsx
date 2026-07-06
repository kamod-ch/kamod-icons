import type { IconProps } from "../../../shared/types";

export function KeyframeIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M9.965 2.124a2.75 2.75 0 0 1 4.07 0l7.297 8.027a2.75 2.75 0 0 1 0 3.7l-7.297 8.026a2.75 2.75 0 0 1-4.07 0L2.668 13.85a2.75 2.75 0 0 1 0-3.7z"/>
    </svg>
  );
}
