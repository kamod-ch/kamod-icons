import type { IconProps } from "../../../shared/types";

export function EuroSquareIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 7.503A4.75 4.75 0 0 0 13.87 7C11.18 7 9 9.239 9 12s2.18 5 4.87 5a4.7 4.7 0 0 0 2.13-.503M8 11h6m-6 2h6"/>
    </svg>
  );
}
