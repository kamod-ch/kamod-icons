import type { IconProps } from "../../../shared/types";

export function BackwardStepIcon({
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
      <path fill="currentColor" d="M5.75 5.5a.75.75 0 0 1 1.5 0v4.825q.098-.087.207-.165l6.732-4.776c1.39-.986 3.315.008 3.315 1.713v9.796c0 1.705-1.925 2.7-3.315 1.713L7.457 13.83a2 2 0 0 1-.207-.165V18.5a.75.75 0 0 1-1.5 0z"/>
    </svg>
  );
}
