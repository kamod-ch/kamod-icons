import type { IconProps } from "../../../shared/types";

export function FileContentIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.667 9h2.666m-2.666 4h8.666m-8.666 4h8.666M3.667 19V5a2.666 2.666 0 0 1 2.666-2.667h7.448c.354 0 .694.14.943.391l5.219 5.219c.25.25.39.589.39.942V19a2.666 2.666 0 0 1-2.666 2.667H6.333A2.666 2.666 0 0 1 3.667 19"/><path d="M20.213 8.333h-4.546A1.334 1.334 0 0 1 14.333 7V2.47"/></g>
    </svg>
  );
}
