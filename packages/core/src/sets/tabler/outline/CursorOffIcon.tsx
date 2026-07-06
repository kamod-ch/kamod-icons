import type { IconProps } from "../../../shared/types";

export function CursorOffIcon({
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
      <path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1-3 3m6-16a3 3 0 0 0-3 3v1m0 4v5a3 3 0 0 0 3 3M3 3l18 18"/>
    </svg>
  );
}
