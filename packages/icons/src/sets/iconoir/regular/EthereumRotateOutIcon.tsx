import type { IconProps } from "../../../shared/types";

export function EthereumRotateOutIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20M7 12l5 7 5-7M7 12l5-7m-5 7 5 1m0-8 5 7m-5-7v8m5-1-5 1"/>
    </svg>
  );
}
