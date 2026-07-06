import type { IconProps } from "../../../shared/types";

export function FrameSelectIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.998 2H2v2.998h2.998zm.001 1.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998zM21.997 2.002H19V5h2.998zm0 17H19V22h2.998z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="m10.997 15.002-3-7 7 3-2.998.999zm1.002-3 2.998 3z" clipRule="evenodd"/>
    </svg>
  );
}
