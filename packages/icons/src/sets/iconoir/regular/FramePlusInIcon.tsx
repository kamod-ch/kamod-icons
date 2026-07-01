import type { IconProps } from "../../../shared/types";

export function FramePlusInIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.998 2H2v2.998h2.998zm.001 1.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998zM21.997 2.001H19v2.998h2.998zm0 17H19v2.998h2.998z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m3 0h-3m0 0V9m0 3v3"/>
    </svg>
  );
}
