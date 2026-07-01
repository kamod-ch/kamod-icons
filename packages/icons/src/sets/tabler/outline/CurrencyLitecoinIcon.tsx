import type { IconProps } from "../../../shared/types";

export function CurrencyLitecoinIcon({
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
      <path d="M18 19H9.806a2 2 0 0 1-1.98-2.283L9.5 5M14 9l-9 4"/>
    </svg>
  );
}
