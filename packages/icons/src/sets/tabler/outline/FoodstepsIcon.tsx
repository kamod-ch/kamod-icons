import type { IconProps } from "../../../shared/types";

export function FoodstepsIcon({
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
      <path d="M4 16.5a2.5 2.5 0 0 0 5 0A1.5 1.5 0 0 0 7.5 15h-2A1.5 1.5 0 0 0 4 16.5m11 2a2.5 2.5 0 0 0 5 0 1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5M8.52 12H4.48c-.348 0-.678-.179-.823-.496C2.331 8.6 2.883 3 6.5 3s4.17 5.6 2.843 8.504c-.145.317-.475.496-.824.496m11.001 2h-4.04c-.348 0-.678-.179-.823-.496C13.331 10.6 13.883 5 17.5 5s4.17 5.6 2.843 8.504c-.145.317-.475.496-.824.496"/>
    </svg>
  );
}
