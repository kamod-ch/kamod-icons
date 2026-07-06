import type { IconProps } from "../../../shared/types";

export function CircuitBulbIcon({
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
      <path d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m1.5-3.5 7 7m0-7-7 7"/>
    </svg>
  );
}
