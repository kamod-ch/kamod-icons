import type { IconProps } from "../../../shared/types";

export function CurrencyYenIcon({
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
      <path d="M12 19v-7L7 5m10 0-5 7m-4 5h8m-8-4h8"/>
    </svg>
  );
}
