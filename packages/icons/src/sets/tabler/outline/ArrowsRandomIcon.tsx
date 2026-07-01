import type { IconProps } from "../../../shared/types";

export function ArrowsRandomIcon({
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
      <path d="M20 21h-4v-4m0 4 5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1 1 4m-1-4-3.5 6M21 5l-.5 4-4-.5m4 .5L16 3.5"/>
    </svg>
  );
}
