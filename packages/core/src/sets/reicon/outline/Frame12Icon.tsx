import type { IconProps } from "../../../shared/types";

export function Frame12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m9.01 20.5-5.02-5.01M9.01 3.5v17m5.98-17 5.02 5.01M14.99 20.5v-17"/>
    </svg>
  );
}
