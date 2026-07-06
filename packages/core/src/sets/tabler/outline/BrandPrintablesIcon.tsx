import type { IconProps } from "../../../shared/types";

export function BrandPrintablesIcon({
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
      <path d="m6 21 12-7V6.5L12 3 6 6.5l6 3.5v7.5L6 14z"/>
    </svg>
  );
}
