import type { IconProps } from "../../../shared/types";

export function GasTankDropletIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.493" d="M3 7.562A2.56 2.56 0 0 1 5.563 5H7V3h5v2h2.002A7 7 0 0 1 21 11.998v6.442a2.56 2.56 0 0 1-2.563 2.562H5.563A2.565 2.565 0 0 1 3 18.44z" clipRule="evenodd"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.5" d="M12 9s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C9.01 11.992 12 9 12 9" clipRule="evenodd"/>
    </svg>
  );
}
