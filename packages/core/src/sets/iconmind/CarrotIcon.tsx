import type { IconProps } from "../../shared/types";

export function CarrotIcon({
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
      <path d="M9 8h6c0 5-2 11-3 13-1-2-3-8-3-13m0 0L5 4m7 4V3m3 5 4-4"/>
    </svg>
  );
}
