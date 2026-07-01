import type { IconProps } from "../../../shared/types";

export function ArrowsDiagonalMinimizeIcon({
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
      <path d="M6 10h4V6M4 4l6 6m8 4h-4v4m0-4 6 6"/>
    </svg>
  );
}
