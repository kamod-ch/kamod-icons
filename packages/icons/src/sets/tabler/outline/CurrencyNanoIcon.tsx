import type { IconProps } from "../../../shared/types";

export function CurrencyNanoIcon({
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
      <path d="M7 20 17 4M7 12h10M7 16h10m0 4L7 4"/>
    </svg>
  );
}
