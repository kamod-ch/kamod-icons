import type { IconProps } from "../../../shared/types";

export function Printer5Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3zM16 15v4q0 3-3 3h-2q-3 0-3-3v-4z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M21 10v5q0 3-3 3h-2v-3H8v3H6q-3 0-3-3v-5q0-3 3-3h12q3 0 3 3m-4 5H7m0-4h3"/>
    </svg>
  );
}
