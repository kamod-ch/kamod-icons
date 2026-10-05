import type { IconProps } from "../../shared/types";

export function ReadingGlassesIcon({
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
      <path d="M3 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0m10 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-2.5 0h3M3 10l2-2m16 2-2-2"/>
    </svg>
  );
}
