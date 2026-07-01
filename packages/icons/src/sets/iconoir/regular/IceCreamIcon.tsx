import type { IconProps } from "../../../shared/types";

export function IceCreamIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M14 18v2a2 2 0 1 1-4 0v-2m-5-6h14"/><path stroke="currentColor" strokeWidth="1.5" d="M7 18a2 2 0 0 1-2-2V9a7 7 0 1 1 14 0v7a2 2 0 0 1-2 2z"/>
    </svg>
  );
}
