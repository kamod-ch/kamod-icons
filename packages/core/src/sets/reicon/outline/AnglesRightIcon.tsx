import type { IconProps } from "../../../shared/types";

export function AnglesRightIcon({
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
      <path fill="currentColor" d="M11.47 4.53a.75.75 0 0 1 1.06-1.06l8 8a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 1 1-1.06-1.06L18.94 12z"/><path fill="currentColor" d="M3.47 4.53a.75.75 0 0 1 1.06-1.06l8 8a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.06-1.06L10.94 12z"/>
    </svg>
  );
}
