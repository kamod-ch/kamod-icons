import type { IconProps } from "../../shared/types";

export function OvercastIcon({
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
      <path d="M2 12a3 3 0 0 1 2-5.5 4 4 0 0 1 7.5-1A4.5 4.5 0 0 1 15 12Z"/><path d="M7 21a3.5 3.5 0 0 1 2-6 4.5 4.5 0 0 1 8-1 4.5 4.5 0 0 1 3 7Z"/>
    </svg>
  );
}
