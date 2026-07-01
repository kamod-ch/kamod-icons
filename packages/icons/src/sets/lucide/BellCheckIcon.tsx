import type { IconProps } from "../../shared/types";

export function BellCheckIcon({
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
      <path d="M10.268 21a2 2 0 0 0 3.464 0M15 8l2 2 4-4m-4.14-1.518A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326m0 0A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.531-.548-1.075-1.109-1.537-1.873"/>
    </svg>
  );
}
