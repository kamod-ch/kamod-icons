import type { IconProps } from "../../../shared/types";

export function VideoMinusIcon({
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
      <path d="M13 5a3 3 0 0 1 3 3v.381l3.106-1.552A2 2 0 0 1 22 8.618v6.765a2 2 0 0 1-2.894 1.787L16 15.618V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm-2 6H7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/>
    </svg>
  );
}
