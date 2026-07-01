import type { IconProps } from "../../../shared/types";

export function CurrencyIcon({
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
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M4 4l3 3m13-3-3 3M4 20l3-3m13 3-3-3"/>
    </svg>
  );
}
