import type { IconProps } from "../../shared/types";

export function Move3dIcon({
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
      <path d="M5 3v16h16M5 19l6-6"/><path d="m2 6 3-3 3 3m10 10 3 3-3 3"/>
    </svg>
  );
}
