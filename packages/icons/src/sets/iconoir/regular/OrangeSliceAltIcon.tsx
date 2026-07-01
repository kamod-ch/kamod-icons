import type { IconProps } from "../../../shared/types";

export function OrangeSliceAltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.39 10.11 5.61 2.334c-4.295 4.296-4.295 11.26 0 15.556 4.296 4.296 11.26 4.296 15.557 0zm0 0 .353 8.133m-.354-8.132H5.612m7.779 0-5.304 5.303"/>
    </svg>
  );
}
