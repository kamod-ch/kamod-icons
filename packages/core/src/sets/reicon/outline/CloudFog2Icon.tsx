import type { IconProps } from "../../../shared/types";

export function CloudFog2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.54 8.93c.52-.26 1.09-.4 1.67-.41M4 15.03h16m-14 3h12m-9 3h6"/>
    </svg>
  );
}
