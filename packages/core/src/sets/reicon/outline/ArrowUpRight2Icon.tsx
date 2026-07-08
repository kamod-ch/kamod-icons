import type { IconProps } from "../../../shared/types";

export function ArrowUpRight2Icon({
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
      <path fill="currentColor" d="M19 4.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V6.81L5.53 19.53a.75.75 0 0 1-1.06-1.06L17.19 5.75H11a.75.75 0 0 1 0-1.5z"/>
    </svg>
  );
}
