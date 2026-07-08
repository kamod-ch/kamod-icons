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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16.333 21.667 10 17l-6.333 4.667V9a2.666 2.666 0 0 1 2.666-2.667h7.334A2.666 2.666 0 0 1 16.333 9z"/><path d="M9.333 2.333h8.334A2.666 2.666 0 0 1 20.333 5v12.667"/></g>
    </svg>
  );
}
