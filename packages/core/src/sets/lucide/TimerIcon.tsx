import type { IconProps } from "../../shared/types";

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
      <path d="M10 2h4m-2 12 3-3"/><circle cx="12" cy="14" r="8"/>
    </svg>
  );
}
