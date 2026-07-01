import type { IconProps } from "../../../shared/types";

export function RainbowIcon({
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
      <path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17"/><path d="M18 17a6 6 0 1 0-12 0"/><path d="M14 17a2 2 0 1 0-4 0"/>
    </svg>
  );
}
