import type { IconProps } from "../../shared/types";

export function FileArchiveIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 22V4c0-.5.2-1 .6-1.4S5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4s-.9.6-1.4.6h-2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-15V6m0 6v-1m0 7v-2"/>
    </svg>
  );
}
