import type { IconProps } from "../../../shared/types";

export function ReceiveEurosIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 12h-8m0 0 3.84-4M13 12l3.84 4M11 7.503A4.75 4.75 0 0 0 8.87 7C6.18 7 4 9.239 4 12s2.18 5 4.87 5a4.7 4.7 0 0 0 2.13-.503M3 11h6m-6 2h6"/>
    </svg>
  );
}
