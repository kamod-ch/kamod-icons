import type { IconProps } from "../../../shared/types";

export function MoreHorizCircleIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>
    </svg>
  );
}
