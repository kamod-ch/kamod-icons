import type { IconProps } from "../../../shared/types";

export function CurrencyPesoIcon({
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
      <path d="M8 19V5h3.5a4.5 4.5 0 1 1 0 9H8m10-6H6m12 3H6"/>
    </svg>
  );
}
