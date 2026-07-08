import type { IconProps } from "../../../shared/types";

export function GasPumpIcon({
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
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path fill="none" d="m21 5.333 1.837 3.368c.107.196.163.416.163.639l.028 4.688a3 3 0 0 1-6 0"/><path fill="currentColor" d="M22.667 9.333h-1v2.334h1z"/><path fill="none" d="M5 21V5.667A2.666 2.666 0 0 1 7.667 3h6.666A2.666 2.666 0 0 1 17 5.667V21M2.667 21h16.666M5 11.667h12"/></g>
    </svg>
  );
}
