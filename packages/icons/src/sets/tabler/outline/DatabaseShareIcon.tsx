import type { IconProps } from "../../../shared/types";

export function DatabaseShareIcon({
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
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"/><path d="M4 6v6c0 1.657 3.582 3 8 3q.541 0 1.065-.026M20 13V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3m4 1 5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}
