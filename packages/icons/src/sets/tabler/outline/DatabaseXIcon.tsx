import type { IconProps } from "../../../shared/types";

export function DatabaseXIcon({
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
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"/><path d="M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5m0 5 5-5"/>
    </svg>
  );
}
