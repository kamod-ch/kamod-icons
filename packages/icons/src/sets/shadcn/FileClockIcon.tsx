import type { IconProps } from "../../shared/types";

export function FileClockIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 22h2c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6S4 3.5 4 4v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6M8 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 17.5 8 16.25V14"/>
    </svg>
  );
}
