import type { IconProps } from "../../../shared/types";

export function Menu12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92m-11.08 0a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92m11.08 12.3a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92m-11.08 0a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92"/>
    </svg>
  );
}
