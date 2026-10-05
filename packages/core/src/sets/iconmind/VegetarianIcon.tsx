import type { IconProps } from "../../shared/types";

export function VegetarianIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 3v5m4-5v5M6 8h4M8 8v13m6-3c0-5 3-8 8-8 0 5-3 8-8 8"/>
    </svg>
  );
}
