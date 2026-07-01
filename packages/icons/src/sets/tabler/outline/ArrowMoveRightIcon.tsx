import type { IconProps } from "../../../shared/types";

export function ArrowMoveRightIcon({
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
      <path d="M11 12h10m-3-3 3 3-3 3M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
}
