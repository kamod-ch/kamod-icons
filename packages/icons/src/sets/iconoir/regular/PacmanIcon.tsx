import type { IconProps } from "../../../shared/types";

export function PacmanIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 12 .011.01M19 12l.011.01M22 12l.011.01M2 12c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8-3.999L12 12l8-6.001A9.99 9.99 0 0 0 12 2C6.477 2 2 6.477 2 12"/>
    </svg>
  );
}
