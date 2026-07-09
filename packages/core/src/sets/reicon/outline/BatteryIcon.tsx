import type { IconProps } from "../../../shared/types";

export function BatteryIcon({
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
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><rect x="1.75" y="4.25" fill="none" rx="2" ry="2"/><path fill="currentColor" d="M15.75 7.75h1.5v2.5h-1.5z"/></g>
    </svg>
  );
}
