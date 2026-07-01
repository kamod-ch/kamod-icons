import type { IconProps } from "../../../shared/types";

export function H6Icon({
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
      <path d="M19 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/><path d="M21 12a2 2 0 1 0-4 0v4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"/>
    </svg>
  );
}
