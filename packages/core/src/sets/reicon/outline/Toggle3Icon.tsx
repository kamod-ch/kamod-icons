import type { IconProps } from "../../../shared/types";

export function Toggle3Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M6 13.75h6A4.75 4.75 0 0 0 16.75 9h0A4.75 4.75 0 0 0 12 4.25H6"/><circle cx="6" cy="9" r="4.75"/></g>
    </svg>
  );
}
