import type { IconProps } from "../../../shared/types";

export function WaistIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.4 4s-1.6 3.75-1.6 6.857c0 .995.34 1.827.8 2.656.528.954 1.214 1.903 1.717 3.09A8.5 8.5 0 0 1 20 20M5.6 4s1.6 3.75 1.6 6.857c0 .995-.34 1.827-.8 2.656-.528.954-1.214 1.903-1.717 3.09A8.5 8.5 0 0 0 4 20m2.4-6.487h11.2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.683 16.604S10.4 17.714 12 20c1.6-2.286 7.317-3.396 7.317-3.396"/>
    </svg>
  );
}
