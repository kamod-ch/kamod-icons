import type { IconProps } from "../../../shared/types";

export function Cloud3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.27 13.01a3.8 3.8 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M15.85 9.92c.52-.26 1.09-.4 1.67-.41"/>
    </svg>
  );
}
