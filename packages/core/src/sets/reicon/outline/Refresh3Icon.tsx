import type { IconProps } from "../../../shared/types";

export function Refresh3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56h4.44"/><path stroke="currentColor" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12c0 5.52 4.48 10 10 10"/>
    </svg>
  );
}
