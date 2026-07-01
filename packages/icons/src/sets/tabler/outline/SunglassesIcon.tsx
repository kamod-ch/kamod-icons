import type { IconProps } from "../../../shared/types";

export function SunglassesIcon({
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
      <path d="M8 4H6L3 14M16 4h2l3 10m-11 2h4m7 .5a3.5 3.5 0 0 1-7 0V14h7zm-11 0a3.5 3.5 0 0 1-7 0V14h7zM4 14l4.5 4.5M15 14l4.5 4.5"/>
    </svg>
  );
}
