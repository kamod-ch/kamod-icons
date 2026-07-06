import type { IconProps } from "../../../shared/types";

export function BallAmericanFootballOffIcon({
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
      <path d="m15 9-1 1m-2 2-3 3m1-3 2 2m-4 7a5 5 0 0 0-5-5"/><path d="M6.813 6.802A12.96 12.96 0 0 0 3 16a5 5 0 0 0 5 5 12.96 12.96 0 0 0 9.186-3.801m1.789-2.227A12.94 12.94 0 0 0 21 8a5 5 0 0 0-5-5 12.94 12.94 0 0 0-6.967 2.022"/><path d="M16 3a5 5 0 0 0 5 5M3 3l18 18"/>
    </svg>
  );
}
