import type { IconProps } from "../../../shared/types";

export function DroneChargeHalfIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="m14.25 14.75.25-2.25.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5 9 8M4.5 19.5l5-4m10-11L15 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M23 19v2m-8-2v2m2-2v2"/><path stroke="currentColor" d="M13 22.4v-4.8a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-6.8a.6.6 0 0 1-.6-.6Z"/>
    </svg>
  );
}
