import type { IconProps } from "../../../shared/types";

export function AppleImac2021SideIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 22h2m6 0H8m0 0 2-8.5m0 0L7 2m3 11.5 1.5 5.5m5.5 3h1"/>
    </svg>
  );
}
