import type { IconProps } from "../../../shared/types";

export function CactusIcon({
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
      <path d="M6 9v1a3 3 0 0 0 3 3h1m8-5v5a3 3 0 0 1-3 3h-1m-4 5V5a2 2 0 1 1 4 0v16m-7 0h10"/>
    </svg>
  );
}
