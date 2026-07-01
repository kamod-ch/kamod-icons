import type { IconProps } from "../../../shared/types";

export function BallBowlingIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M17 3.34A10 10 0 1 1 7 20.66 10 10 0 0 1 17 3.34M14 11a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V12a1 1 0 0 0-1-1m-3-3a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4-1a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"/>
    </svg>
  );
}
