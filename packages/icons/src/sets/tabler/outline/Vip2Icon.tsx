import type { IconProps } from "../../../shared/types";

export function Vip2Icon({
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
      <path d="M3 5h4m10 0h4M3 19h18M4 9l2 6h1l2-6m3 1v5m4 0V9h2a2 2 0 1 1 0 4h-2m-6-8a2 2 0 0 1 2 2 2 2 0 0 1 2-2 2 2 0 0 1-2-2 2 2 0 0 1-2 2"/>
    </svg>
  );
}
