import type { IconProps } from "../../../shared/types";

export function BadgeIcon({
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
      <path d="M16.486 3.143 12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857"/>
    </svg>
  );
}
