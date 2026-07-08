import type { IconProps } from "../../../shared/types";

export function Link22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6"/>
    </svg>
  );
}
