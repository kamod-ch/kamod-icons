import type { IconProps } from "../../../shared/types";

export function LitecoinRotateOutIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20"/><path stroke="currentColor" strokeLinecap="round" d="M10.5 7v9.4a.6.6 0 0 0 .6.6h4.4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.5 13 4.5-2"/>
    </svg>
  );
}
