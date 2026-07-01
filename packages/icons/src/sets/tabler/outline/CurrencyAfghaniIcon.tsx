import type { IconProps } from "../../../shared/types";

export function CurrencyAfghaniIcon({
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
      <path d="M15 13h-3.5A3.5 3.5 0 1 1 15 9.5V16H8m4-13v.01M12 19v2"/>
    </svg>
  );
}
