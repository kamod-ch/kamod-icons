import type { IconProps } from "../../../shared/types";

export function Grid32Icon({
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
      <path fill="currentColor" d="M16.19 2h-3.44v11.75H22V7.81C22 4.17 19.83 2 16.19 2ZM2 10.25v5.94C2 19.83 4.17 22 7.81 22h3.44V10.25zM11.25 2v6.75H2v-.94C2 4.17 4.17 2 7.81 2zM22 15.25v.94c0 3.64-2.17 5.81-5.81 5.81h-3.44v-6.75z"/>
    </svg>
  );
}
