import type { IconProps } from "../../../shared/types";

export function Export12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m9.32 6.5 2.56-2.56 2.56 2.56m-2.56 7.68V4.01M4 12c0 4.42 3 8 8 8s8-3.58 8-8"/>
    </svg>
  );
}
