import type { IconProps } from "../../shared/types";

export function CryptoWalletIcon({
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
      <path d="M8 3h8l5 5v8l-5 5H8l-5-5V8Z"/><path d="M10 10.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2V15m0-1.5h2.5"/>
    </svg>
  );
}
