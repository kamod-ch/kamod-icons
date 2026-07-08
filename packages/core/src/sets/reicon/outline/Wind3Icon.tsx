import type { IconProps } from "../../../shared/types";

export function Wind3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 9h7.31a2.69 2.69 0 1 0-2.69-2.69v.38"/>
    </svg>
  );
}
