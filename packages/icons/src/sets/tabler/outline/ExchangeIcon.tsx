import type { IconProps } from "../../../shared/types";

export function ExchangeIcon({
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
      <path d="M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6-3-3m-6-2v-5a5 5 0 0 1 5-5h3l-3-3m0 6 3-3"/>
    </svg>
  );
}
