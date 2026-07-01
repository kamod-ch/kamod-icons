import type { IconProps } from "../../../shared/types";

export function CurrencyZlotyIcon({
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
      <path d="M12 18H5l7-7H5m12 7V5m-3 9.5 6-3.5"/>
    </svg>
  );
}
