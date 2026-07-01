import type { IconProps } from "../../shared/types";

export function BandageIcon({
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
      <path d="M10 10.01h.01m-.01 4h.01m3.99-4h.01m-.01 4h.01M18 6v12M6 6v12"/><rect x="2" y="6" rx="2"/>
    </svg>
  );
}
