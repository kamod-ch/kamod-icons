import type { IconProps } from "../../../shared/types";

export function BounceRightIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M4 15.5c3-1 5.5-.5 8 4.5.5-3 2-7.5 3.5-10"/>
    </svg>
  );
}
