import type { IconProps } from "../../../shared/types";

export function AnglesLeftIcon({
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
      <path fill="currentColor" d="M12.53 4.53a.75.75 0 0 0-1.06-1.06l-8 8a.75.75 0 0 0 0 1.06l8 8a.75.75 0 1 0 1.06-1.06L5.06 12z"/><path fill="currentColor" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-8 8a.75.75 0 0 0 0 1.06l8 8a.75.75 0 1 0 1.06-1.06L13.06 12z"/>
    </svg>
  );
}
