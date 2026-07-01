import type { IconProps } from "../../../shared/types";

export function GlassChampagneIcon({
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
      <path d="M9 21h6m-3-5v5M8 5a4 2 0 1 0 8 0 4 2 0 1 0-8 0"/><path d="M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11"/>
    </svg>
  );
}
