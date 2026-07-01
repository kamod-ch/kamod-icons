import type { IconProps } from "../../../shared/types";

export function PlaceholderIcon({
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
      <path d="M10 20.415A8 8 0 1 0 13 5h-3"/><path d="m13 8-3-3 3-3M7 17l4-4-4-4-4 4z"/>
    </svg>
  );
}
