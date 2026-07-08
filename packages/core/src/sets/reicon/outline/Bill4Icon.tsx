import type { IconProps } from "../../../shared/types";

export function Bill4Icon({
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
      <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M3.67 2.5v11.97c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9c.79-.59 1.25-1.52 1.25-2.5V2.5z"/><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 2.5h20"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8 8h8m-8 5h8"/>
    </svg>
  );
}
