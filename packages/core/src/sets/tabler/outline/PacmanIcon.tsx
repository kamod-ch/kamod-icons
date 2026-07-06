import type { IconProps } from "../../../shared/types";

export function PacmanIcon({
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
      <path d="M6.636 5.636a9 9 0 0 1 13.397.747L14.414 12l5.619 5.617A9 9 0 1 1 6.636 5.636"/><path d="M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
    </svg>
  );
}
