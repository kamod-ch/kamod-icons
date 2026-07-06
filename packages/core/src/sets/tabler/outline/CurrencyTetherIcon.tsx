import type { IconProps } from "../../../shared/types";

export function CurrencyTetherIcon({
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
      <path d="M4 11a8 2 0 1 0 16 0 8 2 0 1 0-16 0m8 9V4M4 4h16"/>
    </svg>
  );
}
