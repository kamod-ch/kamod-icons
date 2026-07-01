import type { IconProps } from "../../../shared/types";

export function TiffFormatIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15V9h3m2.5 6V9h3m-17 0H5m1.5 0H5m0 0v6m7-3h2.5m3 0H20M9 15V9"/>
    </svg>
  );
}
