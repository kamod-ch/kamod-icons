import type { IconProps } from "../../../shared/types";

export function PercentageSquareIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 8-8 8"/>
    </svg>
  );
}
