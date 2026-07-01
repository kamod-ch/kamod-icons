import type { IconProps } from "../../../shared/types";

export function DataTransferUpIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 4v1m0 4v1m10 10V4m0 0 3 3m-3-3-3 3m-7 7v6m0 0 3-3m-3 3-3-3"/>
    </svg>
  );
}
