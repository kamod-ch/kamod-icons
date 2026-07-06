import type { IconProps } from "../../../shared/types";

export function BallAmericanFootballIcon({
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
      <path d="m15 9-6 6m1-3 2 2m0-4 2 2m-6 9a5 5 0 0 0-5-5"/><path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5"/><path d="M16 3a5 5 0 0 0 5 5"/>
    </svg>
  );
}
