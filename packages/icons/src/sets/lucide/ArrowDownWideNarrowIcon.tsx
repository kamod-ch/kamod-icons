import type { IconProps } from "../../shared/types";

export function ArrowDownWideNarrowIcon({
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
      <path d="m3 16 4 4 4-4m-4 4V4m4 0h10M11 8h7m-7 4h4"/>
    </svg>
  );
}
