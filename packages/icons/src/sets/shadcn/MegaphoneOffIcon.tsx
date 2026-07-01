import type { IconProps } from "../../shared/types";

export function MegaphoneOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.26 9.26 3 11v3l14.14 3.14m3.86-1.8V6l-7.31 2.03M11.6 16.8a3.009 3.009 0 0 1-5.8-1.6M2 2l20 20"/>
    </svg>
  );
}
