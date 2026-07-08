import type { IconProps } from "../../../shared/types";

export function VolumeCross2Icon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M2 10.16v4q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.57c0-2.98-2.07-4.12-4.59-2.54L7.49 6.86c-.32.19-.69.3-1.06.3H5q-3 0-3 3Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m22 14.12-3.96-3.96m3.92.04L18 14.16"/>
    </svg>
  );
}
