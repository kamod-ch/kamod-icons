import type { IconProps } from "../../../shared/types";

export function FrameIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.998 2.001H2v2.998h2.998zm0 8.501H2V13.5h2.998zM20.498 5v5.503M3.5 5v5.503m16.998 2.999v5.502M3.5 13.502v5.502m1.499 1.498h5.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.22" d="M4.999 3.503h5.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M13.498 20.499h5.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.22" d="M13.498 3.501h5.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" d="M4.998 19.001H2v2.998h2.998zM21.997 2.002H19V5h2.998zM13.497 2H10.5v2.998h2.998zm8.5 8.503H19V13.5h2.998zm0 8.499H19V22h2.998zm-8.5-.002H10.5v2.998h2.998z"/>
    </svg>
  );
}
