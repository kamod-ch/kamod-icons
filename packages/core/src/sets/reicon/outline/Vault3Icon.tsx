import type { IconProps } from "../../../shared/types";

export function Vault3Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><rect x="2.75" y="2.75" rx="2" ry="2"/><path d="M4.75 15.25v1.5m8.5-1.5v1.5M1.75 9h2m-2-3.25h2m-2 6.5h2"/><circle cx="9" cy="8.25" r="1.75"/><path d="M9 11.75V10"/></g>
    </svg>
  );
}
