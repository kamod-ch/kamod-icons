import type { IconProps } from "../../../shared/types";

export function Shuffle3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 17.98 2.55.01c.91 0 1.76-.45 2.26-1.2l6.39-9.58a2.69 2.69 0 0 1 2.26-1.2l4.55.02M8.89 8.62l-1.08-1.5A2.68 2.68 0 0 0 5.61 6L3 6.01m16 13.97 2-2m-8.03-2.6 1.22 1.57c.51.66 1.31 1.05 2.15 1.05l4.67-.02M21 6.02l-2-2"/>
    </svg>
  );
}
