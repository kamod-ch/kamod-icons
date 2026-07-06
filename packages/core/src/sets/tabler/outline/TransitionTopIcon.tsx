import type { IconProps } from "../../../shared/types";

export function TransitionTopIcon({
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
      <path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m3 15h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6m6-6V7m-3 3 3-3 3 3"/>
    </svg>
  );
}
