import type { IconProps } from "../../../shared/types";

export function NumberIcon({
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
      <path d="M4 17V7l7 10V7m4 10h5m-5-7a2.5 3 0 1 0 5 0 2.5 3 0 1 0-5 0"/>
    </svg>
  );
}
