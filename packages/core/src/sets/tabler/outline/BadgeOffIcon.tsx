import type { IconProps } from "../../../shared/types";

export function BadgeOffIcon({
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
      <path d="M7 7v10l5 3 5-3m0-4V4l-5 3-2.496-1.497M3 3l18 18"/>
    </svg>
  );
}
