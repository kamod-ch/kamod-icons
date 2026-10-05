import type { IconProps } from "../../shared/types";

export function AltitudeIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m3 18 7-7 7 7m2-15v15M16.5 5.5 19 3l2.5 2.5M2 18h20"/>
    </svg>
  );
}
