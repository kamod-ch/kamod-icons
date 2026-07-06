import type { IconProps } from "../../shared/types";

export function SunSnowIcon({
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
      <path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22m-5-9-3 6 1.5 3M2 12h1"/><path d="m20 10-1.5 2 1.5 2M3.64 18.36l.7-.7m0-11.32-.7-.7"/>
    </svg>
  );
}
