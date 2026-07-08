import type { IconProps } from "../../../shared/types";

export function PizzaSlice2Icon({
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
      <g transform="scale(1.33333)"><circle cx="8" cy="9" r="1" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 9.451a1.5 1.5 0 1 1 0 2.598M3.75 5c3.979 0 7.452 2.161 9.311 5.374"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.25 15.25v-.655a.5.5 0 0 0-.75-.433l-1.25.722a1 1 0 0 1-1.5-.866V3.294a1.01 1.01 0 0 1 1.103-.999 13.49 13.49 0 0 1 10.002 5.776 1.01 1.01 0 0 1-.317 1.451l-3.787 2.186a2 2 0 0 0-1 1.732v2.809"/></g>
    </svg>
  );
}
