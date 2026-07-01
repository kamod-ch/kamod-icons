import type { IconProps } from "../../../shared/types";

export function SquareLetterUIcon({
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 5a1 1 0 0 0-1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 0-2 0v6a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"/>
    </svg>
  );
}
