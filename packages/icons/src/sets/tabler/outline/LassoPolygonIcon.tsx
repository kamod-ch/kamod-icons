import type { IconProps } from "../../../shared/types";

export function LassoPolygonIcon({
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
      <path d="M4.028 13.252 3 10l2-7 7 5 8-3 1 9-9 3-5.144-1.255"/><path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M5 17c0 1.42.316 2.805 1 4"/>
    </svg>
  );
}
