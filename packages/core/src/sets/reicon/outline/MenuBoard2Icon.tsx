import type { IconProps } from "../../../shared/types";

export function MenuBoard2Icon({
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
      <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="m21.93 6.76-3.37 13.53A2.23 2.23 0 0 1 16.38 22H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6m-12.32.38 1.04-4.32m5.66 4.33.94-4.34M7.7 12h8m-9 4h8"/>
    </svg>
  );
}
