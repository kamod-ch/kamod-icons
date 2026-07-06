import type { IconProps } from "../../../shared/types";

export function BadgesIcon({
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
      <path d="M17 17v-4l-5 3-5-3v4l5 3zm0-9V4l-5 3-5-3v4l5 3z"/>
    </svg>
  );
}
