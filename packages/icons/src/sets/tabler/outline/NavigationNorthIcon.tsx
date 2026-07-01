import type { IconProps } from "../../../shared/types";

export function NavigationNorthIcon({
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
      <path d="m16 21-4-8-4 8 4-2zM10 9V3l4 6V3"/>
    </svg>
  );
}
