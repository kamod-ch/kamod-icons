import type { IconProps } from "../../../shared/types";

export function BallBasketIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M8.652 1.759c-.494.437-3.396 3.091-3.496 7.459-.086 3.759 1.959 6.291 2.483 6.903"/><path d="M1.77 9.532c1.191.411 2.625.782 4.268.967 4.479.504 8.135-.642 10.212-1.499M3.147 13.277s1.147-.668 2.52-.668c2.203 0 4.666 2.287 8.238 1.727M3.147 4.722c.697 1.528.145 3.202 2.124 3.202 4.063 0 4.729-3.987 8.918-3.987"/><circle cx="9" cy="9" r="7.25"/></g>
    </svg>
  );
}
