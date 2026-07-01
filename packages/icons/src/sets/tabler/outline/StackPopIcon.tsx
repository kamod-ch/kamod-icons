import type { IconProps } from "../../../shared/types";

export function StackPopIcon({
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
      <path d="M7 9.5 4 11l8 4 8-4-3-1.5M4 15l8 4 8-4m-8-4V4M9 7l3-3 3 3"/>
    </svg>
  );
}
