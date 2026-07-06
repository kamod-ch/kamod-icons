import type { IconProps } from "../../../shared/types";

export function BrandMessengerIcon({
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
      <path d="m3 20 1.3-3.9A9 8 0 1 1 7.7 19z"/><path d="m8 13 3-2 2 2 3-2"/>
    </svg>
  );
}
