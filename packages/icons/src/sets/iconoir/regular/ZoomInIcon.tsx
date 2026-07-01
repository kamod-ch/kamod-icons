import type { IconProps } from "../../../shared/types";

export function ZoomInIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 11h3m3 0h-3m0 0V8m0 3v3m6 3 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0"/>
    </svg>
  );
}
