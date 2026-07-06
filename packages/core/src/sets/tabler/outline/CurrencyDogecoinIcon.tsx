import type { IconProps } from "../../../shared/types";

export function CurrencyDogecoinIcon({
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
      <path d="M6 12h6M9 6v12m-3 0h6a6 6 0 1 0 0-12H6"/>
    </svg>
  );
}
