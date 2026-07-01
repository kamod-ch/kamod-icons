import type { IconProps } from "../../../shared/types";

export function FastArrowUpSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M21.75 3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35zm-9.22 8.87 3.5 3.5a.75.75 0 1 1-1.06 1.06L12 14.06l-2.97 2.97a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0m3.5-2.5-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 8.06l2.97 2.97a.75.75 0 1 0 1.06-1.06" clipRule="evenodd"/>
    </svg>
  );
}
