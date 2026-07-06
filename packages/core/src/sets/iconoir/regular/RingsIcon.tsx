import type { IconProps } from "../../../shared/types";

export function RingsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 8a6 6 0 1 0 0 12A6 6 0 0 0 8 8m0 0V3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 0V3"/>
    </svg>
  );
}
