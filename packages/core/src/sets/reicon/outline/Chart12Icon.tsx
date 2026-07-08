import type { IconProps } from "../../../shared/types";

export function Chart12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 22h20"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2M3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10m14 5v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"/>
    </svg>
  );
}
