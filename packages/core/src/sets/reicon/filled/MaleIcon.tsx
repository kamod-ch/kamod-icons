import type { IconProps } from "../../../shared/types";

export function MaleIcon({
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
      <path fill="currentColor" d="M17 1.25a.75.75 0 1 0 0 1.5h3.19l-5.088 5.088a8 8 0 1 0 1.06 1.06l5.088-5.087V7a.75.75 0 1 0 1.5 0V2a.75.75 0 0 0-.75-.75z"/>
    </svg>
  );
}
