import type { IconProps } from "../../../shared/types";

export function CurrencyRubelIcon({
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
      <path d="M8 19V5h6a3 3 0 0 1 0 6H6m8 4H6"/>
    </svg>
  );
}
