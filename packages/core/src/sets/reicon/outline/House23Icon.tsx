import type { IconProps } from "../../../shared/types";

export function House23Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 22h20"/><path stroke="currentColor" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5M10 16.25v1.5m.5-10.25h3"/>
    </svg>
  );
}
