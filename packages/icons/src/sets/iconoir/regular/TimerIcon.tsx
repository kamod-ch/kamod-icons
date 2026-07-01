import type { IconProps } from "../../../shared/types";

export function TimerIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 2h6m-3 8v4m0 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16"/>
    </svg>
  );
}
