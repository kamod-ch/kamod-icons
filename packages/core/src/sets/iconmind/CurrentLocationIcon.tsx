import type { IconProps } from "../../shared/types";

export function CurrentLocationIcon({
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
      <path d="M9 14a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M5.42 11.61a7 7 0 0 1 13.16 0"/><path d="M2.6 10.58a10 10 0 0 1 18.8 0"/>
    </svg>
  );
}
