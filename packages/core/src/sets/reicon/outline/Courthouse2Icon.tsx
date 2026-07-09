import type { IconProps } from "../../../shared/types";

export function Courthouse2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0zm0 3v3m5 0H7q-3 0-3 3v11h16V11q0-3-3-3M4.58 12h14.84"/><path stroke="currentColor" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.99 12v10m4-10v10m4-10v10"/>
    </svg>
  );
}
