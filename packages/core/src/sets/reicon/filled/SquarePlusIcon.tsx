import type { IconProps } from "../../../shared/types";

export function SquarePlusIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M17.667 2.667H6.333a3.67 3.67 0 0 0-3.666 3.666v11.334a3.67 3.67 0 0 0 3.666 3.666h11.334a3.67 3.67 0 0 0 3.666-3.666V6.333a3.67 3.67 0 0 0-3.666-3.666ZM16.333 13H13v3.333a1 1 0 0 1-2 0V13H7.667a1 1 0 0 1 0-2H11V7.667a1 1 0 0 1 2 0V11h3.333a1 1 0 0 1 0 2Z"/>
    </svg>
  );
}
