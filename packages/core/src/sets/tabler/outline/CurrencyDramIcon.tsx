import type { IconProps } from "../../../shared/types";

export function CurrencyDramIcon({
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
      <path d="M4 10a6 6 0 1 1 12 0v10m-4-4h8m-8-4h8"/>
    </svg>
  );
}
