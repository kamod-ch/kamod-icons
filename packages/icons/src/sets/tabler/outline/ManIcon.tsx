import type { IconProps } from "../../../shared/types";

export function ManIcon({
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
      <path d="M10 16v5m4-5v5M9 9h6l-1 7h-4zm-4 2q2-2 4-2m10 2q-2-2-4-2m-5-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
