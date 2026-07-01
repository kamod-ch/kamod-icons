import type { IconProps } from "../../../shared/types";

export function ArrowMoveLeftIcon({
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
      <path d="M13 12H3m3 3-3-3 3-3m11 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
  );
}
