import type { IconProps } from "../../../shared/types";

export function Gauge3Icon({
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
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path fill="none" d="M12 3.667v2.666m6.836.164-1.887 1.887m4.718 4.949H19M5.164 6.497l5.893 5.894m-8.724.942H5M8.603 4.28A9.6 9.6 0 0 1 12 3.667c5.339 0 9.667 4.328 9.667 9.666a9.64 9.64 0 0 1-2.831 6.836l-1.885-1.885m-9.901-.001-1.885 1.885a9.64 9.64 0 0 1-2.832-6.836c0-1.195.217-2.34.614-3.396"/><path fill="currentColor" d="M12 15a1.667 1.667 0 1 0-.001-3.335A1.667 1.667 0 0 0 12 15"/></g>
    </svg>
  );
}
