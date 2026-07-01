import type { IconProps } from "../../../shared/types";

export function MenuOrderIcon({
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
      <path d="M4 10h16M4 14h16M9 18l3 3 3-3M9 6l3-3 3 3"/>
    </svg>
  );
}
