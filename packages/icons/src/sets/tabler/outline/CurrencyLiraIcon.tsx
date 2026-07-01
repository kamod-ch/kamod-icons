import type { IconProps } from "../../../shared/types";

export function CurrencyLiraIcon({
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
      <path d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4m0-4-8 4"/>
    </svg>
  );
}
