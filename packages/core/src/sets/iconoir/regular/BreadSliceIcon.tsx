import type { IconProps } from "../../../shared/types";

export function BreadSliceIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 20V9S3 4 9.5 4H17c7 0 3 5 3 5v9a2 2 0 0 1-2 2z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 20H6a2 2 0 0 1-2-2V9S0 4 6.5 4H10"/>
    </svg>
  );
}
