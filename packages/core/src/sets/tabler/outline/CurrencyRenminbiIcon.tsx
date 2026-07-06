import type { IconProps } from "../../../shared/types";

export function CurrencyRenminbiIcon({
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
      <path d="M15 9v8a2 2 0 1 0 4 0m0-8H5m14-4H5m4 4v4c0 2.5-.667 4-2 6"/>
    </svg>
  );
}
