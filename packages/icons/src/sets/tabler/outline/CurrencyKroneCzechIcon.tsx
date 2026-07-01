import type { IconProps } from "../../../shared/types";

export function CurrencyKroneCzechIcon({
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
      <path d="M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m8-12-2 2-2-2m4 6h-2a3 3 0 0 0 0 6h2"/>
    </svg>
  );
}
