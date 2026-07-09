import type { IconProps } from "../../../shared/types";

export function PrinterSlash2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3zm5.72 8H16v4q0 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M6 18q-3 0-3-3v-5q0-3 3-3h10.59m3.38.52C20.66 8 21 8.83 21 10v5q0 3-3 3h-2v-3h-3m4 0h-1.21M7 11h2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 2 2 22"/>
    </svg>
  );
}
