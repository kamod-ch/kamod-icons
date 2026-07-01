import type { IconProps } from "../../../shared/types";

export function BallBasketballIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m2.65-6.35 12.7 12.7m-12.7 0 12.7-12.7"/><path d="M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 1 9 9"/>
    </svg>
  );
}
