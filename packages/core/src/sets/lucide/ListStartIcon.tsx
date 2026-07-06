import type { IconProps } from "../../shared/types";

export function ListStartIcon({
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
      <path d="M3 5h6m-6 7h13M3 19h13m0-11-3-3 3-3"/><path d="M21 19V7a2 2 0 0 0-2-2h-6"/>
    </svg>
  );
}
