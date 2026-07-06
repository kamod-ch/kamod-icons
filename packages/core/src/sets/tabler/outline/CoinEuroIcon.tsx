import type { IconProps } from "../../../shared/types";

export function CoinEuroIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M14.401 8c-.669-.628-1.5-1-2.401-1-2.21 0-4 2.239-4 5s1.79 5 4 5c.9 0 1.731-.372 2.4-1M7 10.5h4m-4 3h4"/>
    </svg>
  );
}
