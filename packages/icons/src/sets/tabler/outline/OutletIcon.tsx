import type { IconProps } from "../../../shared/types";

export function OutletIcon({
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
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path fill="currentColor" d="M8.5 12a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m6 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/>
    </svg>
  );
}
