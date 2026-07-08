import type { IconProps } from "../../../shared/types";

export function SunFog3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 12a6.5 6.5 0 1 0-13 0m-.51-7.01-.13-.13m14.15.13.13-.13zM12 2.08V2zM2.08 12H2zM22 12h-.08z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4 15h16M6 18h12m-9 3h6"/>
    </svg>
  );
}
