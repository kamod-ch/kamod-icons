import type { IconProps } from "../../../shared/types";

export function BrandBinanceIcon({
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
      <path d="m6 8 2 2 4-4 4 4 2-2-6-6zm0 8 2-2 4 4 3.5-3.5 2 2L12 22zm14-6 2 2-2 2-2-2zM4 10l2 2-2 2-2-2zm8 0 2 2-2 2-2-2z"/>
    </svg>
  );
}
