import type { IconProps } from "../../../shared/types";

export function Nightstand4Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M2 9.75q0-.663.002-1.25h9.248v11.25H10c-1.806 0-3.18 0-4.25-.129v2.129a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.407 2 15.521 2 11.75zM9 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 9 11Z" clipRule="evenodd"/><path fill="currentColor" d="M21.974 7H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 1.75 6.229 1.75 10 1.75h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078Z"/><path fill="currentColor" fillRule="evenodd" d="M12.75 8.5h9.248Q22 9.087 22 9.75v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697v2.475a.75.75 0 0 1-1.5 0v-2.129c-1.07.129-2.444.129-4.25.129h-1.25zM15 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 15 11Z" clipRule="evenodd"/>
    </svg>
  );
}
