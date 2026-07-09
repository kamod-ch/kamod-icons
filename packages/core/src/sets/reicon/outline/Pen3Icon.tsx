import type { IconProps } from "../../../shared/types";

export function Pen3Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m13.333 6.667 4.782 4.781a2.666 2.666 0 0 1 0 3.77L16 17.334"/><path d="M3.667 20.333s4.798-.757 6.061-2.02l9.77-9.769a2.856 2.856 0 1 0-4.04-4.04l-9.77 9.77c-1.263 1.262-2.02 6.06-2.02 6.06Z"/></g>
    </svg>
  );
}
