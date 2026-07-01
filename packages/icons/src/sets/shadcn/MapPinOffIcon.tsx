import type { IconProps } from "../../shared/types";

export function MapPinOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a30 30 0 0 0 5-5m2.18-3.48A8.7 8.7 0 0 0 20 10a8 8 0 0 0-8-8 7.9 7.9 0 0 0-3.52.82"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.13 9.13a3 3 0 0 0 3.74 3.74m2.03-3.62a3 3 0 0 0-2.15-2.16M2 2l20 20"/>
    </svg>
  );
}
