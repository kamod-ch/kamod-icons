import type { IconProps } from "../../../shared/types";

export function SwordIcon({
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
      <path d="M20 4v5l-9 7-4 4-3-3 4-4 7-9zM6.5 11.5l6 6"/>
    </svg>
  );
}
