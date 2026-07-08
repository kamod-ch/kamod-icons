import type { IconProps } from "../../../shared/types";

export function Gps3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-11V2M4 12H2m10 8v2m8-10h2"/>
    </svg>
  );
}
