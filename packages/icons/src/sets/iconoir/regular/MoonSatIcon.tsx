import type { IconProps } from "../../../shared/types";

export function MoonSatIcon({
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
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" d="M7.633 3.067A3.001 3.001 0 1 1 4.017 6.32M22 13.05a3.5 3.5 0 1 0-3 5.914"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 8.51.01-.011M10 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}
