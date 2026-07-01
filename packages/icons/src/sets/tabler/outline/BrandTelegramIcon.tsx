import type { IconProps } from "../../../shared/types";

export function BrandTelegramIcon({
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
      <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4"/>
    </svg>
  );
}
