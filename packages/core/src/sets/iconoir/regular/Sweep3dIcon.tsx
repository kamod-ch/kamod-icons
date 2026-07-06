import type { IconProps } from "../../../shared/types";

export function Sweep3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 22 5.5-5.5M20 5l-2.5 2.5M7 21h8.5l-7-12-5.833 10M14.5 3l7 12m-13-6 6-6m1 18 6-6"/>
    </svg>
  );
}
