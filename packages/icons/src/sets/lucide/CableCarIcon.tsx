import type { IconProps } from "../../shared/types";

export function CableCarIcon({
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
      <path d="M10 3h.01M14 2h.01M2 9l20-5m-10 8V6.5"/><rect x="4" y="12" rx="3"/><path d="M9 12v5m6-5v5M4 17h16"/>
    </svg>
  );
}
