import type { IconProps } from "../../../shared/types";

export function CurrencyYuanIcon({
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
      <path d="M12 19v-7L7 5m10 0-5 7m-4 1h8"/>
    </svg>
  );
}
