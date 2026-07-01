import type { IconProps } from "../../../shared/types";

export function CurrencySolanaIcon({
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
      <path d="M4 18h12l4-4H8zm4-4-4-4h12l4 4m-4-4 4-4H8l-4 4"/>
    </svg>
  );
}
