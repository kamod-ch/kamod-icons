import type { IconProps } from "../../../shared/types";

export function VipOffIcon({
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
      <path d="M3 5h2m4 0h12M3 19h16M4 9l2 6h1l2-6m3 3v3m4-3V9h2a2 2 0 1 1 0 4h-1M3 3l18 18"/>
    </svg>
  );
}
