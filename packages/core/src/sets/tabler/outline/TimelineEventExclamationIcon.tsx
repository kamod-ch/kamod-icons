import type { IconProps } from "../../../shared/types";

export function TimelineEventExclamationIcon({
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
      <path d="M10 20a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm0-9v2m0 3v.01"/>
    </svg>
  );
}
