import type { IconProps } from "../../shared/types";

export function VolleyballIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M4 9c4 1 10-1 13-5M3 15c4-1 10 1 13 5"/><path d="M9 3.5c2 4.5 2 12.5 0 17"/>
    </svg>
  );
}
