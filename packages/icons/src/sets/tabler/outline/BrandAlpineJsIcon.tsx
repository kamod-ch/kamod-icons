import type { IconProps } from "../../../shared/types";

export function BrandAlpineJsIcon({
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
      <path d="M3 11.5 7.5 16h9l-9-9z"/><path d="m16.5 16 4.5-4.5L16.5 7 12 11.5"/>
    </svg>
  );
}
