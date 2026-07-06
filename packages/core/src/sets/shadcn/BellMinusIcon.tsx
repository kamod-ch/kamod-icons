import type { IconProps } from "../../shared/types";

export function BellMinusIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.73 21a2 2 0 0 1-3.46 0M21 5h-6m3.021 4C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916"/>
    </svg>
  );
}
