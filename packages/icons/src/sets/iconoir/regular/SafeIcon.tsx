import type { IconProps } from "../../../shared/types";

export function SafeIcon({
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
      <path stroke="currentColor" d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m8-1v-4m-5.5-.5 1-1m-6 1-1-1m0 7 1-1m6 1-1-1M2 8h1M2 6h1m0 10H2m1 2H2"/>
    </svg>
  );
}
