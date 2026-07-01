import type { IconProps } from "../../../shared/types";

export function ReminderHandGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17.5 12 2.004 2.672a2 2 0 0 1-.126 2.552l-3.783 4.127A2 2 0 0 1 14.12 22H9.5c-2.358 0-3.622-2.575-3.982-3.93a.6.6 0 0 1-.018-.143V9.43c0-2.286 3-2.286 3 0V10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 10V8.286c0-2.286-3-2.286-3 0V10m6 0V7.5c0-2.286-3-2.286-3 0q0 0 0 0V10m3 0V3.499A1.5 1.5 0 0 1 16 2v0a1.5 1.5 0 0 1 1.5 1.5V15"/><path stroke="currentColor" strokeWidth="1.5" d="M17.563 6.5h2.062C20.5 6.5 21 6.078 21 5.25S20.5 4 19.625 4H12.25C11.56 4 11 4.56 11 5.25v.25a1 1 0 0 0 1 1"/>
    </svg>
  );
}
