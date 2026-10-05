import type { IconProps } from "../../shared/types";

export function SunnyIcon({
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
      <path d="M6.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0M4 4l3 3m13-3-3 3M4 20l3-3m13 3-3-3"/>
    </svg>
  );
}
