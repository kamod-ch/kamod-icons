import type { IconProps } from "../../../shared/types";

export function TunnelIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 20 3 14"/><path stroke="currentColor" strokeLinecap="round" d="M16 10v1m-4-2v1M8 8v1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 21h18v-9a9 9 0 1 0-18 0z"/>
    </svg>
  );
}
