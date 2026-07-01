import type { IconProps } from "../../shared/types";

export function DumbbellIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.5 6.5 11 11M21 21l-1-1M3 3l1 1m14 18 4-4M2 6l4-4m-3 8 7-7m4 18 7-7"/>
    </svg>
  );
}
