import type { IconProps } from "../../shared/types";

export function GameTokenIcon({
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
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="M5 12c0 3 3 5 7 5s7-2 7-5"/>
    </svg>
  );
}
