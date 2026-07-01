import type { IconProps } from "../../../shared/types";

export function CurrencyLariIcon({
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
      <path d="M18 13a6 6 0 1 0-6 6m-6 0h12M10 5v7m4 0V5"/>
    </svg>
  );
}
