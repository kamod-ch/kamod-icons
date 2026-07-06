import type { IconProps } from "../../../shared/types";

export function DroneLandingIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5 9 8M4.5 19.5l5-4m10-11L15 8m-.5 7.5 1.25 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 16v6m0 0L17 19.5m2.5 2.5 2.5-2.5"/>
    </svg>
  );
}
