import type { IconProps } from "../../../shared/types";

export function CurrencyYenOffIcon({
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
      <path d="M12 19v-7m5-7-3.328 4.66M8 17h8m-8-4h5M3 3l18 18"/>
    </svg>
  );
}
