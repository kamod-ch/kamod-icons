import type { IconProps } from "../../../shared/types";

export function ShareIcon({
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
      <path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-6.3-7.3 6.6-3.4m-6.6 6 6.6 3.4"/>
    </svg>
  );
}
