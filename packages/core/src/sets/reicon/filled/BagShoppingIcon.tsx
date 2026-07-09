import type { IconProps } from "../../../shared/types";

export function BagShoppingIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M15 7.333a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2s-2 .897-2 2v2.333a1 1 0 0 1-2 0V4c0-2.205 1.795-4 4-4s4 1.795 4 4v2.333a1 1 0 0 1-1 1Z"/><path d="M20.541 8.683a3.646 3.646 0 0 0-3.652-3.35H7.111a3.645 3.645 0 0 0-3.652 3.35l-.87 10c-.089 1.021.258 2.04.95 2.796s1.677 1.189 2.702 1.189h11.516a3.67 3.67 0 0 0 3.653-3.985l-.87-10Z"/></g>
    </svg>
  );
}
