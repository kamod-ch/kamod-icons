import type { IconProps } from "../../../shared/types";

export function WindsockIcon({
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
      <path d="M6 2a1 1 0 0 1 1 1v1.079l11.083.924A1 1 0 0 1 19 6v4a1 1 0 0 1-.917.997L7 11.92V20h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1m1 4.086v3.827l3-.25V6.336zm7 .584v2.659l3-.25V6.92z"/>
    </svg>
  );
}
