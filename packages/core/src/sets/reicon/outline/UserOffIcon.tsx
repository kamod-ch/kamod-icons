import type { IconProps } from "../../../shared/types";

export function UserOffIcon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l11.798 11.8q-.626-.08-1.268-.08c-4.266 0-8.176 2.677-8.742 6.644a.75.75 0 0 0 1.484.212C5.176 18.073 8.265 15.75 12 15.75a8.5 8.5 0 0 1 3.371.682l3.621 3.62q.187.51.265 1.054a.75.75 0 0 0 1.242.454l.97.97a.75.75 0 1 0 1.061-1.06zM12 3.75a3.74 3.74 0 0 0-2.852 1.315.75.75 0 1 1-1.14-.975 5.25 5.25 0 1 1 7.402 7.402.75.75 0 1 1-.975-1.14A3.75 3.75 0 0 0 12 3.75Z"/>
    </svg>
  );
}
