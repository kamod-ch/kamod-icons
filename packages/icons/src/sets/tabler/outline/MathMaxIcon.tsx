import type { IconProps } from "../../../shared/types";

export function MathMaxIcon({
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
      <path d="M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M3 15s.616-5.544 2.332-7.93m3.305.042C11.354 10.425 14.519 20 17 20q3 0 4-9"/>
    </svg>
  );
}
