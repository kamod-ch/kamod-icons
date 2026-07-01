import type { IconProps } from "../../../shared/types";

export function GraveIcon({
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
      <path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2zm5-5v-5H6V7h4V3h4v4h4v4h-4v5"/>
    </svg>
  );
}
