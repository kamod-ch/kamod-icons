import type { IconProps } from "../../../shared/types";

export function ChevronRightIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M17.707 11.293 9.373 2.96A1 1 0 1 0 7.96 4.375L15.585 12 7.96 19.628a1 1 0 0 0 1.413 1.415l8.333-8.334a1 1 0 0 0 0-1.414Z"/>
    </svg>
  );
}
