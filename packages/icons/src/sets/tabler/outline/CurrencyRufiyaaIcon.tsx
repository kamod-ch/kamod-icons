import type { IconProps } from "../../../shared/types";

export function CurrencyRufiyaaIcon({
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
      <path d="M20 16h.01M4 16c9.5-4 11.5-8 14-9m-6 1 5 3"/>
    </svg>
  );
}
