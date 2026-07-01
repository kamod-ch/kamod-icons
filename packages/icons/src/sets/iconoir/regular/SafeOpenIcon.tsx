import type { IconProps } from "../../../shared/types";

export function SafeOpenIcon({
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
      <path stroke="currentColor" d="M3 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path stroke="currentColor" d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 15C6.672 15 6 13.657 6 12s.672-3 1.5-3S9 10.343 9 12s-.672 3-1.5 3m5.5-1v-4m-4.5-.5 1-1m-3 1-1-1m0 7 1-1m3 1-1-1M2 8h1M2 6h1m0 10H2m1 2H2"/>
    </svg>
  );
}
