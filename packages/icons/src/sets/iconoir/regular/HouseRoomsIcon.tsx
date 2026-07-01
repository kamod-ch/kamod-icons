import type { IconProps } from "../../../shared/types";

export function HouseRoomsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 19v2m0-9v4m5-4v4h-2m7-4H8m-3 0H3m0-7 9-2 9 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 8.6v11.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"/>
    </svg>
  );
}
