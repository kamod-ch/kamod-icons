import type { IconProps } from "../../../shared/types";

export function JpgFormatIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 15v-3m0 0V9h3v3zm9-3h-3v6h3v-2.4M7 9v4.2C7 15 5 15 5 15"/>
    </svg>
  );
}
