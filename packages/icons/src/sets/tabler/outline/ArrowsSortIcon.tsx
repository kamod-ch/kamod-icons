import type { IconProps } from "../../../shared/types";

export function ArrowsSortIcon({
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
      <path d="m3 9 4-4 4 4M7 5v14m14-4-4 4-4-4m4 4V5"/>
    </svg>
  );
}
