import type { IconProps } from "../../../shared/types";

export function Logout12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.44 14.62 20 12.06 17.44 9.5m-7.68 2.56h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"/>
    </svg>
  );
}
