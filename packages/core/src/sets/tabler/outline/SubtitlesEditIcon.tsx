import type { IconProps } from "../../../shared/types";

export function SubtitlesEditIcon({
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
      <path d="M11.5 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3M7 15h5m5-3h-3m-3 0h-1m8.42 3.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"/>
    </svg>
  );
}
