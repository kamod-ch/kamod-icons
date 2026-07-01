import type { IconProps } from "../../../shared/types";

export function LayoutDistributeHorizontalIcon({
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
      <path d="M20 3a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM16 8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"/>
    </svg>
  );
}
