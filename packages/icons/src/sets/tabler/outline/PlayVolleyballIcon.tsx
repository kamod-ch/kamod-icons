import type { IconProps } from "../../../shared/types";

export function PlayVolleyballIcon({
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
      <path d="M11.007 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M2 16l5 1 .5-2.5m4 6.5 2.5-5.5L8.5 12 12 8l3 4 4 2"/>
    </svg>
  );
}
