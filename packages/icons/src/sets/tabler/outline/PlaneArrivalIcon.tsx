import type { IconProps } from "../../../shared/types";

export function PlaneArrivalIcon({
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
      <path d="m15.157 11.81 4.83 1.295a2 2 0 1 1-1.036 3.863L4.462 13.086 3.117 6.514l2.898.776 1.414 2.45 2.898.776-.12-7.279 2.898.777zM3 21h18"/>
    </svg>
  );
}
