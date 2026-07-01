import type { IconProps } from "../../../shared/types";

export function BrandYahooIcon({
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
      <path d="M3 6h5M7 18h7M4.5 6l5.5 7v5m0-5 6-5m-3.5 0h5m2.5 3v4m0 3v.01"/>
    </svg>
  );
}
