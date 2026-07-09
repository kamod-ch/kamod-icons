import type { IconProps } from "../../../shared/types";

export function BookmarksIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M13.667 5.333H6.333A3.67 3.67 0 0 0 2.667 9v12.667a1.001 1.001 0 0 0 1.593.805l5.74-4.23 5.74 4.23a1 1 0 0 0 1.593-.805V9a3.67 3.67 0 0 0-3.666-3.667Z"/><path d="M20.333 18.667a1 1 0 0 1-1-1V5c0-.92-.747-1.667-1.666-1.667H9.333a1 1 0 0 1 0-2h8.334A3.67 3.67 0 0 1 21.333 5v12.667a1 1 0 0 1-1 1Z"/></g>
    </svg>
  );
}
