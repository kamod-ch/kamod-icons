import type { IconProps } from "../../shared/types";

export function ArrowUpWideNarrowIcon({
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
      <path d="m3 8 4-4 4 4M7 4v16m4-8h10m-10 4h7m-7 4h4"/>
    </svg>
  );
}
