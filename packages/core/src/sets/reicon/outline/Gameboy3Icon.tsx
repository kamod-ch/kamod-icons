import type { IconProps } from "../../../shared/types";

export function Gameboy3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75m-5.95 4.28L8 17.58m.03-2.27 2.3 2.3m6.16-2.28h.02m-2.02 2.17v-.02"/>
    </svg>
  );
}
