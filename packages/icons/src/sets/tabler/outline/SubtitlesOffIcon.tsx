import type { IconProps } from "../../../shared/types";

export function SubtitlesOffIcon({
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
      <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.13.874m-2.006 2A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8c0-1.35.893-2.493 2.12-2.869M7 15h5m5-3h-1m-4 0h-2M3 3l18 18"/>
    </svg>
  );
}
