import type { IconProps } from "../../../shared/types";

export function DropletSnowFlakeInIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 10v3.5m0 3.5v-3.5m0 0-3-1.75m3 1.75 3 1.75m-3-1.75 3-1.75m-3 1.75-3 1.75"/>
    </svg>
  );
}
