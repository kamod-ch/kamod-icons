import type { IconProps } from "../../../shared/types";

export function DataTransferCheckIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 19 3 3 5-5m-5-3V4m0 0 3 3m-3-3-3 3M7 4v16m0 0 3-3m-3 3-3-3"/>
    </svg>
  );
}
