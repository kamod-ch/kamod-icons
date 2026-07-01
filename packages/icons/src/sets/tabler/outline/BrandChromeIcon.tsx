import type { IconProps } from "../../../shared/types";

export function BrandChromeIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-3h8.4m-5.802 4.5-4.2 7.275M9.402 13.5l-4.2-7.275"/>
    </svg>
  );
}
