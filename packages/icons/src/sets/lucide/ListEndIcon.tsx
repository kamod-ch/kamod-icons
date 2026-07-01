import type { IconProps } from "../../shared/types";

export function ListEndIcon({
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
      <path d="M16 5H3m13 7H3m6 7H3m13-3-3 3 3 3"/><path d="M21 5v12a2 2 0 0 1-2 2h-6"/>
    </svg>
  );
}
