import type { IconProps } from "../../../shared/types";

export function Archive12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-8.78M5 2h14q3 0 3 3v2q0 3-3 3H5q-3 0-3-3V5q0-3 3-3m5.18 12h3.64"/>
    </svg>
  );
}
