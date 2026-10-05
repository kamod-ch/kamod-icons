import type { IconProps } from "../../shared/types";

export function GameAvatarIcon({
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
      <path d="M7 10V5h10v5M7 10c0 4 2 6 5 6s5-2 5-6M6 21v-3h12v3"/>
    </svg>
  );
}
