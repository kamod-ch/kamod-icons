import type { IconProps } from "../../shared/types";

export function SquareScissorsIcon({
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
      <rect x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M9.561 9.561 12 12m5 5-2.18-2.18"/><circle cx="8.5" cy="15.5" r="1.5"/><path d="M9.561 14.439 17 7"/>
    </svg>
  );
}
