import type { IconProps } from "../../../shared/types";

export function CurrencyTugrikIcon({
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
      <path d="M7 6h10m-5 0v13m-4-2 8-3m0-4-8 3"/>
    </svg>
  );
}
