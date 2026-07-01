import type { IconProps } from "../../shared/types";

export function UsbIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 20 19 5m2-2-3 1 2 2z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 7-5 5 2 5m3-3 5 2 4-4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18 12 1-1 1 1-1 1z"/>
    </svg>
  );
}
