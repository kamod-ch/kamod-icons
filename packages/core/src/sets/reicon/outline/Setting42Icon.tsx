import type { IconProps } from "../../../shared/types";

export function Setting42Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M22 6.5h-6m-10 0H2m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m12 7.5h-4m-10 0H2M14 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
    </svg>
  );
}
