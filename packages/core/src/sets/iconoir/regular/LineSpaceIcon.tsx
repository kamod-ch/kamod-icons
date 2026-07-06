import type { IconProps } from "../../../shared/types";

export function LineSpaceIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 6h10m-10 6h10m-10 6h10M5 19V5m0 14-2-2.5M5 19l2-2.5M5 5 3 7m2-2 2 2"/>
    </svg>
  );
}
